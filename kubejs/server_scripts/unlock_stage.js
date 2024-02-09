// priority: 0
/** @param { Stage } stage  */
function finished_stage_ID(stage) {
    return stage.ID + "$finished";
}

stageList.forEach((stage) => {
    PlayerEvents.inventoryChanged(stage.endItem.getItem(), (event) => {
        if (!event.hasGameStage(finished_stage_ID(stage))) {
            event.addGameStage(finished_stage_ID(stage))
            event.getPlayer().tell("You have finished stage " + stage.ID + "!");
            stage.parent.forEach((stage) => {
                if (stage.child.stream().allMatch((stage) => {
                    return event.hasGameStage(finished_stage_ID(stage));
                })) {
                    event.addGameStage(stage.ID);
                    event.getPlayer().tell("You have unlocked stage " + stage.ID + "!");
                }
            });
        }
    });
});

PlayerEvents.loggedIn((event) => {
    /** @param { Stage } stage  */
    function addInitialStage(stage) {
        console.info("Searching for " + stage.ID);
        if (stage.dependencies.isEmpty()) {
            if (stage.child.isEmpty()) {
                event.addGameStage(stage.ID);
                event.getPlayer().tell("You have unlocked stage " + stage.ID + "!");
            }
        }
        else {
            stage.dependencies.forEach(addInitialStage);
        }
    }

    if (!event.hasGameStage("$initial")) {
        stageList.forEach(addInitialStage, null);
        addInitialStage(stageFinal);
        event.addGameStage("$initial");
    }
});
