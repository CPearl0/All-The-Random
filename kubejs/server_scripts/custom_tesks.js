// priority: 0
/** @param { Stage } stage  */
function finished_stage_ID(stage) {
    return stage.ID + "$finished";
}

/**
 * @param { Internal.CustomTask } task 
 * @param { string } phase 
 */
function set_phase_task(task, phase) {
    task.setCheck((data, player) => {
        if (data.getProgress() == 0 && GamePhase.hasPhase(player, phase))
            data.setProgress(1);
    });
}

FTBQuestsEvents.customTask(event => {
    const task = event.getTask();
    stageList.forEach(stage => {
        if (task.hasTag(stage.ID)) {
            if (task.hasTag("finished"))
                set_phase_task(task, finished_stage_ID(stage));
            else
                set_phase_task(task, stage.ID);
        }
    });
    if (task.hasTag(stageFinal.ID))
        set_phase_task(task, stageFinal.ID);
});
