const program = require("commander");

const { createProjectAction, addCpnAction } = require("./actions");

const createCommands = () => {
  program
    .command("create <project> [others...]")
    .description("clone repository into a folder")
    .action(createProjectAction);

  program
    .command("addcpn <name>s")
    .description(
      "add vue component, 例如: zjt addcpn HelloWorld -d src/components"
    )
    .action(addCpnAction);
};

module.exports = createCommands;
