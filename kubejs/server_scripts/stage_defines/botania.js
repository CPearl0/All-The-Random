// priority: 100
/** @type { Stage } */
const stageBotania = StageBuilder.create("botania")
    .endItem("botania:elementium_ingot")
    .defaultStartItems(
        "minecraft:air",
        "minecraft:air")
    .defaultStartItemReplaces(-1, 0)
    .startWith((recipesEvent, items) => {
        const apothecarys = [
            ["default", "minecraft:cobblestone"],
            ["forest", "botania:metamorphic_forest_cobblestone"],
            ["plains", "botania:metamorphic_plains_cobblestone"],
            ["mountain", "botania:metamorphic_mountain_cobblestone"],
            ["fungal", "botania:metamorphic_fungal_cobblestone"],
            ["swamp", "botania:metamorphic_swamp_cobblestone"],
            ["desert", "botania:metamorphic_desert_cobblestone"],
            ["taiga", "botania:metamorphic_taiga_cobblestone"],
            ["mesa", "botania:metamorphic_forest_cobblestone"],
            ["mossy", "minecraft:mossy_cobblestone"],
            ["livingrock", "botania:livingrock"],
            ["deepslate", "minecraft:cobbled_deepslate"],
        ];
        apothecarys.forEach((apothecary) => {
            recipesEvent.remove({ output: "botania:apothecary_" + apothecary[0] });
            recipesEvent.shaped(
                "botania:apothecary_" + apothecary[0],
                ["ABA", "CBD", "BBB"],
                {
                    A: "#botania:petals",
                    B: apothecary[1],
                    C: items[0],
                    D: items[1],
                });
        });
    })
    .build();
