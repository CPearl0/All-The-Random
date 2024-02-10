ServerEvents.recipes((event) => {
    const remove_items = [
        "integrateddynamics:coal_generator",
    ];
    remove_items.forEach((item) => event.remove({ output: item }));
});
