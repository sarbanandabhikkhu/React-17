builder.config({
  map: {
    "systemjs-babel-build":
      "systemjs-plugin-babel@0.0.25/systemjs-babel-node.js",
  },
});
builder.bundle("./src/app.js", "bundle.js"); // create a named bundle
builder.buildStatic("./src/app.js", "buildStatic.js", { format: "cjs" }); // create a static optimized build
