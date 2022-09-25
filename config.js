SystemJS.config({
  baseURL: "https://unpkg.com/", // unpkg/
  defaultExtension: true,
  packages: {
    "./src/": {
      main: "app.js",
      defaultExtension: "js",
    },
  },
  meta: {
    "*.js": {
      babelOptions: {
        react: true,
      },
    },
    "*.css": {
      loader: "systemjs-plugin-css",
    },
    "*.json": {
      loader: "systemjs-plugin-json",
    },
  },
  map: {
    "plugin-babel": "systemjs-plugin-babel@0.0.25/plugin-babel.js",
    "systemjs-babel-build":
      "systemjs-plugin-babel@0.0.25/systemjs-babel-browser.js",
    "systemjs-plugin-css": "systemjs-plugin-css@0.1.37/css.js",
    "systemjs-plugin-json": "systemjs-plugin-json@0.3.0/json.js",
    react: "react@17.0.2/umd/react.production.min.js",
    "react-dom": "react-dom@17.0.2/umd/react-dom.production.min.js",
    "react-router-dom":
      "react-dom@17.0.2/umd/react-router-dom.production.min.js",
  },
  transpiler: "plugin-babel",
});

SystemJS.import("./src/app").catch(console.error.bind(console));
