"use strict"

const inventr = {
    items: ['nog', 'luk'],
    add(itemName) {
        console.log(`Накидываю тебе ${itemName} в инвентарь, бомж.`);
        this.items.push(itemName);
    }
};

console.log(inventr.items);

const invokeblabla = function (itemName, action) {
    console.log(`Что то там дейстие с ${itemName}`);
    action(itemName);
};

invokeblabla('Mech', .bind(inventr).add);
console.log(inventr.items);