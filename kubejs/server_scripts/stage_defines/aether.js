// priority: 100
/** @type { Stage } */
const stageAether = StageBuilder.create("aether")
    .endItem("aether:enchanted_gravitite")
    .defaultStartItems(
        "minecraft:air",
        "minecraft:air")
    .startWith((recipesEvent, items) => {

    })
    .build();
