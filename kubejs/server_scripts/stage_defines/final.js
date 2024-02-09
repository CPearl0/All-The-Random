// priority: 100
/** @type { Stage } */
const stageFinal = StageBuilder.create("final")
    .endItem("minecraft:air")
    .defaultStartItems(
        "minecraft:air",
        "minecraft:air")
    .startWith((recipesEvent, items) => {

    })
    .build();
