// priority: 100
/** @type { Stage } */
const stageFinal = StageBuilder.create("final")
    .endItem("alltherandom:final_item")
    .defaultStartItems(
        "#forge:ingots/iron",
        "#forge:ingots/iron",
        "#forge:ingots/iron")
    .startWith((recipesEvent, items) => {
        recipesEvent.shaped(
            "alltherandom:final_item",
            ["ABA", "CDC", "ABA"],
            {
                A: "#forge:gems/diamond",
                B: items[0],
                C: items[1],
                D: items[2],
            });
    })
    .build();
