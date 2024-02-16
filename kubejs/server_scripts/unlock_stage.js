// priority: 0
/** @param { Stage } stage  */
function finished_stage_ID(stage) {
    return stage.ID + "$finished";
}

stageList.forEach(stage => {
    PlayerEvents.inventoryChanged(stage.endItem.getItem(), event => {
        const player = event.getPlayer();
        if (!GamePhase.hasPhase(player, finished_stage_ID(stage))) {
            GamePhase.addPhase(player, finished_stage_ID(stage));
            player.tell("You have finished stage " + stage.ID + "!");
            stage.parent.forEach((stage) => {
                if (stage.child.stream().allMatch((stage) => {
                    return GamePhase.hasPhase(player, finished_stage_ID(stage));
                })) {
                    GamePhase.addPhase(player, stage.ID);
                    player.tell("You have unlocked stage " + stage.ID + "!");
                }
            });
        }
    });
});

PlayerEvents.loggedIn(event => {
    const player = event.getPlayer();
    /** @param { Stage } stage  */
    function addInitialStage(stage) {
        console.info("Searching for " + stage.ID);
        if (stage.dependencies.isEmpty()) {
            if (stage.child.isEmpty()) {
                GamePhase.addPhase(player, stage.ID);
                player.tell("You have unlocked stage " + stage.ID + "!");
            }
        }
        else {
            stage.dependencies.forEach(addInitialStage);
        }
    }

    if (!GamePhase.hasPhase(player, "$initial")) {
        stageList.forEach(addInitialStage);
        addInitialStage(stageFinal);
        GamePhase.addPhase(player, "$initial");
    }
});
