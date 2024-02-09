ServerEvents.recipes((event) => {
    const remove_items = [
        "twilightforest:uncrafting_table",
    ];
    remove_items.forEach((item) => event.remove({ output: item }));
});
