// priority: 100
/** @type { Stage } */
const stageMysticalAgriculture = StageBuilder.create("mysticalagriculture")
    .endItem("mysticalagriculture:imperium_ingot")
    .defaultStartItems(
        "minecraft:stone",
        "minecraft:stone")
    .defaultStartItemReplaces(-1, 0)
    .startWith((recipesEvent, items) => {
        recipesEvent.remove({ output: "mysticalagriculture:infusion_altar" });
        recipesEvent.shaped(
            "mysticalagriculture:infusion_altar",
            ["ABA", " C ", "DCE"],
            {
                A: "#forge:plates/gold",
                B: "minecraft:red_wool",
                C: "minecraft:stone",
                D: items[0],
                E: items[1],
            });
        recipesEvent.remove({ output: "mysticalagriculture:infusion_pedestal" });
        recipesEvent.shaped(
            "mysticalagriculture:infusion_pedestal",
            ["ABA", " C ", " C "],
            {
                A: "#forge:plates/gold",
                B: "minecraft:red_wool",
                C: "minecraft:stone",
            });
    })
    .build();
