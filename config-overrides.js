const { addLessLoader, override } = require("customize-cra");

module.export = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#1111",
      "@secondary-color": "#F58A20",
      "@title-color": "#022334",
      "@text-color": "#000",
    },
  })
);
