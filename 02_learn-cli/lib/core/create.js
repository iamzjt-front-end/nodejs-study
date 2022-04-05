const program = require("commander");

const { createProjectAction, addComponentAction, addPageAndRouteAction } = require("./actions");

const createCommands = () => {
  program
    .command("create <project> [others...]")
    .description("clone repository into a folder")
    .action(createProjectAction);

  program
    .command("addcpn <name>")
    .description("add vue component, 例如: zjt addcpn HelloWorld [-d src/components]")
    .action((name) => {
      addComponentAction(name, program._optionValues.dest || "src/components");
    });

  program
    .command("addpage <page>")
    .description("add vue page and router config, 例如: zjt addpage Home [-d src/pages]")
    .action((page) => {
      addPageAndRouteAction(page, program._optionValues.dest || "src/pages");
    })
};

module.exports = createCommands;
