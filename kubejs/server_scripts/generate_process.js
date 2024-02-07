// priority: 0
/**
 * process.js - Generate the process randomly.
 */
ServerEvents.recipes((event) => {
    // First time - do nothing
    if (!Utils.server) return;

    // Reload

    // Set the seed
    randomprocess.setSeedToSaved();

    // Set the stages
    randomprocess.addFinalStage(stageFinal);
    randomprocess.addStage(stageList);
    randomprocess.generateRandomProcess(event);
});
