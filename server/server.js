const app = require('express')();
const cors = require('cors');

const sku_reference_sheet = require('./sku_reference_sheet');
const secrets = require('./secrets');
const prints = require('./prints');
var stripe_sk = secrets.secrets().stripe_sk;
var item_sheet = sku_reference_sheet.item_sheet();
var wood_types = sku_reference_sheet.wood_types();
var prints_arr = prints.prints();

const stripe = require('stripe')(stripe_sk);

var wood_types_arr = [];
for (wood in wood_types) {
    wood_types_arr.push(wood_types[wood]);
}

app.use(require('body-parser').text());
app.use(cors());

app.post('/checkout', async (req, res) => {
    // https://github.com/stripe/stripe-payments-demo/blob/master/public/javascripts/payments.js

    let body = JSON.parse(req.body);

    let total = 0;

    for (item of body.items) {
        let mod_idx = 2;
        if (parseInt(item.sku[0]) === 9) {
            mod_idx = 1;
        }
        total +=
            (item_sheet[parseInt(item.sku[0])].base_price +
                item_sheet[parseInt(item.sku[0])].
                    modifiers[parseInt(item.sku[mod_idx])].price) * item.qty;
    }

    let desc = '';
    for (item of body.items) {
        if (parseInt(item.sku[0]) === 9) {
            desc += item.qty + 'x ' +
                prints_arr[parseInt(item.sku.substr(2))].name +
                ' (' + item_sheet[9].modifiers[parseInt(item.sku[1])].name +
                ')' + ', ';
        } else {
            desc += item.qty + 'x ' + wood_types[parseInt(item.sku[1])] + ' ' +
                item_sheet[parseInt(item.sku[0])].name + ' (' +
                item_sheet[parseInt(item.sku[0])].modifiers[parseInt(item.sku[2])].name +
                '), ';
        }
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

app.get('/sku/:sku', (req, res) => {
    let sku = req.params.sku.toString();

    if (parseInt(sku[0]) === 9) {
        let printId = sku.substr(2);
        res.send({
            item: item_sheet[parseInt(sku[0])],
            printName: prints_arr[printId].name,
            modifier: parseInt(sku[1])
        });
    } else {
        res.send({
            item: item_sheet[parseInt(sku[0])],
            wood: wood_types[parseInt(sku[1])],
            modifier: parseInt(sku[2])
        });
    }
});

app.get('/items/:item', (req, res) => {
    if (req.params.item < 9) {
        res.send({
            item: item_sheet[req.params.item],
            types: wood_types_arr,
            typeName: 'Wood'
        });
    } else {
        let itemId = Number(req.params.item.toString().substr(1));
        res.send({
            item: prints_arr[itemId],
            types: ['Borderless', 'With Border'],
            typeName: 'Style'
        })
    }

});

app.get('/prints', (req, res) => {
    res.send({
        prints: prints_arr
    });
});

app.listen(9000, () => console.log('Listening on port 9000'));