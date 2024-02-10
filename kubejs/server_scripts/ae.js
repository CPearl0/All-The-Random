ServerEvents.recipes((event) => {
    event.replaceInput({ mod: "ae2" }, "#forge:ingots/iron", "#forge:plates/iron");
    event.replaceInput({ mod: "ae2" }, "#forge:ingots/copper", "#forge:plates/copper");
    event.replaceInput({ mod: "ae2" }, "#forge:ingots/gold", "#forge:plates/gold");
    event.replaceInput({ mod: "expatternprovider" }, "#forge:ingots/iron", "#forge:plates/iron");
    event.replaceInput({ mod: "expatternprovider" }, "#forge:ingots/copper", "#forge:plates/copper");
    event.replaceInput({ mod: "expatternprovider" }, "#forge:ingots/gold", "#forge:plates/gold");
});
