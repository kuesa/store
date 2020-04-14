/* Price Sheet + SKU Reference
 * Legend:
 * <Item Type>-<Wood Type>-<Modifier>
 * 
 * Item Type:
 * 0: Fountain Pen
 * 1: Rollerball Pen
 * 2: Slimline Pen
 * 3: Safari Pen
 * 4: Fiberglass Baton
 * 5: Wood Baton
 * 6: Basic Baroque Oboe
 * 7: Professional Baroque Oboe
 * 8: Baroque Oboe D'Amore
 * 
 * Wood Type (Mostly for Pens, Oboes will only feature a couple of wood types):
 * 0: Hinoki
 * 1: Maple
 * 2: Boxwood
 * 3: Camphor (Ho)
 * 4: Ebony
 * 5: Grenadilla
 * 6: Cocobolo
 * 7: Sapele
 * 8: Walnut
 * 9: Mahogany
 * 
 * Modifier:
 * 0: Nothing
 * 1: Gunmetal
 * 2: Gold
 * 3: Antique Brass
 * 4: Satin/Titanium
 * 5: 10" Baton
 * 6: 12" Baton
 * 7: 14" Baton
 * 8: Custom Order
 * 
*/



const item_sheet = {
    1: {
        name: "Fountain Pen",
        description: "Made to order. Screw-cap style, with an ornamental center band. Uses a Fine Iridium nib, and comes with a blue cartridge and a converter.",
        base_price: 40,
        modifiers: [
            { name: "Chrome", price: 0 },
            { name: "Gold", price: 5 }
        ],
        photos: [
            "https://i.imgur.com/zQ0XWu3.jpg",
            "https://i.imgur.com/6iO9706.jpg"
        ]
    },
    2: {
        name: "Rollerball Pen",
        description: "Made to order. Screw-cap style, with an ornamental center band. Uses Schmidt refills.",
        base_price: 35,
        modifiers: [
            { name: "Chrome", price: 0 },
            { name: "Gold", price: 5 }
        ],
        photos: [
            "https://i.imgur.com/mB0jJyq.jpg",

        ]
    },
    3: {
        name: "Signature Pen",
        description: "Emulating the style of a well-known German designer, this pen will deliver amazing ergonomics and will truly stand out among your collection.",
        base_price: 75
    },
    4: {
        name: "Fiberglass Baton",
        description: "This baton is designed to be as light-weight as possible, and will truly please even the most agile of maestros.",
        base_price: 10,
        wood_prices: [0, 0, 0, 0, 5, 5, 5, 0, 0, 0]
    },
    5: {
        name: "Wood Baton",
        description: "This baton features a birchwood staff and a pear-shaped bulb, but can be customized to your liking.",
        base_price: 20,
        wood_prices: [0, 0, 0, 0, 5, 5, 5, 0, 0, 0]
    },
    6: {
        name: "Basic Baroque Oboe",
        description: "Modeled after Makhlkah, this oboe is designed to act as a gateway to baroque oboe playing. Despite the low cost, this oboe will produce a beautiful tone.",
        base_price: 300,
        wood_prices: [0, 0, 0, 0, 100, 100, 100, 0, 0, 0]
    },
    7: {
        name: "Professional Baroque Oboe",
        description: "Modeled after J. Eichentopf, available in A=415 by default, but on request can be tuned to A=440.",
        base_price: 1500,
        wood_prices: [0, 0, 0, 0, 100, 100, 100, 0, 0, 0]
    },
    8: {
        name: "Baroque Oboe D'Amore",
        description: "Modeled after J. Eichentopf, available in A=415 by default, but on request can be tuned to A=440.",
        base_price: 1750,
        wood_prices: [0, 0, 0, 0, 125, 125, 125, 0, 0, 0]
    },
    9: {
        name: "Photo Print",
        description: "8x10 print on Fujifilm Crystal Archive Paper.",
        base_price: 20,
        modifiers: [
            { name: 'Borderless', price: 0 },
            { name: 'Bordered', price: 0 }
        ]
    }
};

const wood_types = {
    0: "Hinoki",
    1: "Maple",
    2: "Grenadilla",
    3: "Cocobolo",
    4: "Walnut",
    5: "Mahogany"
};

module.exports = {
    item_sheet: function () {
        return item_sheet;
    },
    wood_types: function () {
        return wood_types;
    }
}