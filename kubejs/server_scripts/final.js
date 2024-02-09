ServerEvents.recipes((event) => {
    event.custom({
        type: "avaritia:shaped_extreme_craft",
        pattern: [
            "IIIIIIIII",
            "IUUUUUUUI",
            "IU  H  UI",
            "IU BHB UI",
            "IUHHCHHUI",
            "IU BHB UI",
            "IU  H  UI",
            "IUUUUUUUI",
            "IIIIIIIII",
        ],
        key: {
            I: Ingredient.of("avaritia:infinity_ingot"),
            U: Ingredient.of("storagedrawers:emerald_storage_upgrade"),
            H: Ingredient.of("industrialforegoing:supreme_black_hole_unit"),
            B: Ingredient.of("mekanism:ultimate_bin"),
            C: Ingredient.of("avaritia:infinity_catalyst"),
        },
        result: Ingredient.of("storagedrawers:creative_storage_upgrade")
    });
    event.custom({
        type: "avaritia:shaped_extreme_craft",
        pattern: [
            "IIIIIIIII",
            "IUUUUUUUI",
            "IUP S PUI",
            "IU     UI",
            "IUS C SUI",
            "IU     UI",
            "IUP S PUI",
            "IUUUUUUUI",
            "IIIIIIIII",
        ],
        key: {
            I: Ingredient.of("avaritia:infinity_ingot"),
            U: Ingredient.of("storagedrawers:creative_storage_upgrade"),
            P: Ingredient.of("mekanism:pellet_antimatter"),
            S: Ingredient.of("ae2:singularity"),
            C: Ingredient.of("avaritia:infinity_catalyst"),
        },
        result: Ingredient.of("storagedrawers:creative_vending_upgrade")
    });
});
