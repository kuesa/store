const app = require("express")();
const cors = require("cors");

const sku_reference_sheet = require("./sku_reference_sheet");
const secrets = require('./secrets');
var stripe_sk = secrets.secrets().stripe_sk;
var item_sheet = sku_reference_sheet.item_sheet();
var wood_types = sku_reference_sheet.wood_types();

const stripe = require('stripe')(stripe_sk);

var wood_types_arr = [];
for (wood in wood_types) {
    wood_types_arr.push(wood_types[wood]);
}

app.use(require("body-parser").text());
app.use(cors());

app.post("/checkout", async (req, res) => {
    // https://github.com/stripe/stripe-payments-demo/blob/master/public/javascripts/payments.js

    let body = JSON.parse(req.body);

    let total = 0;

    for (item of body.items) {
        total +=
            (item_sheet[parseInt(item.sku[0])].base_price +
                item_sheet[parseInt(item.sku[0])].
                    modifiers[parseInt(item.sku[2])].price) * item.qty;
    }

    let desc = '';
    for (item of body.items) {
        desc += item.qty + 'x ' + wood_types[parseInt(item.sku[1])] + ' ' +
            item_sheet[parseInt(item.sku[0])].name + ', ';
    }
    desc = desc.substr(0, desc.length - 2);
    let paymentIntent = await stripe.paymentIntents.create({
        amount: (total + 5) * 100,
        currency: 'usd',
        description: desc,
        metadata: { description: desc }
    });

    res.send({ secret: paymentIntent.client_secret });
});

app.get("/sku/:sku", (req, res) => {
    let sku = req.params.sku.toString();

    res.send({
        item: item_sheet[parseInt(sku[0])],
        wood: wood_types[parseInt(sku[1])],
        modifier: parseInt(sku[2])
    })
});

app.get("/items/:item", (req, res) => {
    res.send({
        item: item_sheet[req.params.item],
        wood_types: wood_types_arr
    })
})

app.listen(9000, () => console.log("Listening on port 9000"));