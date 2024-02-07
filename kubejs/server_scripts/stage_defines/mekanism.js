// priority: 100
/** @type { Stage } */
const stageMekanism = StageBuilder.create("mekanism")
    .endItem("mekanism:alloy_atomic")
    .defaultStartItems(
        "#forge:glass/silica",
        "#forge:glass/silica",
        "#forge:ingots/osmium")
    .startWith((recipesEvent, items) => {
        recipesEvent.remove({ output: "mekanism:steel_casing" });
        recipesEvent.shaped(
            "mekanism:steel_casing",
            ["ABA", "CDC", "ABA"],
            {
                A: "#forge:ingots/steel",
                B: items[0],
                C: items[1],
                D: items[2],
            });
    })
    .build();
