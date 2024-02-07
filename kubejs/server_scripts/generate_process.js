// priority: 0
/**
 * process.js - Generate the process randomly.
 */

// Generate the process
ServerEvents.recipes((event) => {
    // Get the world seed and set it
    const { server } = Utils;
    if (!server) return;
    const seed = server.persistentData.getLong("seed");
    randomprocess.setSeed(seed);

    // Set the stages
    randomprocess.addFinalStage(stageFinal);
    randomprocess.addStage(stageList);

    // Generate random process
    randomprocess.generateRandomProcess(event);
})