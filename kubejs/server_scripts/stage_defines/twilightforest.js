// priority: 100
/** @type { Stage } */
const stageTwilightForest = StageBuilder.create("twilightforest")
    .endItem("twilightforest:castle_brick")
    .defaultStartItems(
        "minecraft:air",
        "minecraft:air")
    .startWith((recipesEvent, items) => {

    })
    .build();
