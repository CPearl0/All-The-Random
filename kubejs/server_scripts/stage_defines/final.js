// priority: 100
/** @type { Stage } */
const stageFinal = StageBuilder.create("final")
    .endItem("storagedrawers:creative_vending_upgrade")
    .defaultStartItems(
        "minecraft:air",
        "minecraft:air")
    .startWith((recipesEvent, items) => {

    })
    .build();
