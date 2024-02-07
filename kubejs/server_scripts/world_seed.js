/**
 * world_seed.js - Save the world seed to randomprocess.
 */
ServerEvents.loaded((event) => {
    // Get the seed and set
    const { server } = event;
    const seed = server.worldData.worldGenOptions().seed();
    randomprocess.saveSeed(seed);

    // Reload to generate recipes
    server.scheduleInTicks(10, (schedule) => {
        server.runCommandSilent("reload");
    });
});
