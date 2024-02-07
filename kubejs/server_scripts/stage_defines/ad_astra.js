// priority: 100
/** @type { Stage } */
const stageAd_astra = StageBuilder.create("ad_astra")
    .endItem("ad_astra:glacio_stone")
    .defaultStartItems(
        "minecraft:redstone_torch",
        "minecraft:redstone_torch")
    .startWith((recipesEvent, items) => {
        recipesEvent.remove({ output: "ad_astra:nasa_workbench" });
        recipesEvent.shaped(
            "ad_astra:nasa_workbench",
            ["ABA", "CDE", "BFB"],
            {
                A: "#forge:rods/iron",
                B: "#forge:plates/steel",
                C: items[0],
                D: "minecraft:crafting_table",
                E: items[1],
                F: "#forge:storage_blocks/steel"
            });
    })
    .build();
