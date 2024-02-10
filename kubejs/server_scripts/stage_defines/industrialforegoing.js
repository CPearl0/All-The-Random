// priority: 100
/** @type { Stage } */
const stageIndustrialForegoing = StageBuilder.create("industrialforegoing")
    .endItem("industrialforegoing:pink_slime_ingot")
    .defaultStartItems(
        "#forge:ingots/iron",
        "#forge:ingots/iron",
        "#forge:storage_blocks/redstone")
    .defaultStartItemReplaces(-1, 0, -1)
    .startWith((recipesEvent, items) => {
        recipesEvent.remove({ output: "industrialforegoing:machine_frame_pity" });
        recipesEvent.shaped(
            "industrialforegoing:machine_frame_pity",
            ["ABA", "CDC", "ABA"],
            {
                A: "#minecraft:logs",
                B: items[0],
                C: items[1],
                D: items[2],
            }
        );
    })
    .build();
