StartupEvents.postInit(event => {
    GamePhase.addItemModRestriction("industrialforegoing", "industrialforegoing");

    GamePhase.addItemModRestriction("ad_astra", "ad_astra");

    GamePhase.addItemModRestriction("mekanism", "mekanism");
    GamePhase.addItemModRestriction("mekanism", "mekanismadditions");

    GamePhase.addItemModRestriction("botania", "botania");

    GamePhase.addItemModRestriction("mysticalagriculture", "mysticalagriculture");

    GamePhase.addItemModRestriction("twilightforest", "twilightforest");
    GamePhase.addDimensionRestriction("twilightforest", "twilightforest:twilight_forest");

    GamePhase.addItemModRestriction("aether", "aether");
    GamePhase.addDimensionRestriction("aether", "aether:the_aether");

    GamePhase.addItemModRestriction("final", "avaritia");
});