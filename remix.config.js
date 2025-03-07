const { createRoutesFromFolders } = require("@remix-run/v1-route-convention");

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  // When running locally in development mode, we use the built-in remix
  // server. This does not understand the vercel lambda module format,
  // so we default back to the standard build output.
  server: process.env.NODE_ENV === "development" ? undefined : "./server.ts",
  appDirectory: "app",
  serverModuleFormat: "cjs",
  serverDependenciesToBundle: [
    "axios",
    "@azure/msal-react",
    "Path2D",
    "chalk",
    "crypto",
    "@pdfme",
    "remix-auth-totp",
    "@epic-web/totp",
    "base32-encode",
    "to-data-view"
  ],
  browserNodeBuiltinsPolyfill: {
    modules: {
      punycode: true,
      buffer: true,
    },
  },
  tailwind: true,
  postcss: true,
  routes(defineRoutes) {
    return createRoutesFromFolders(defineRoutes);
  },
  future: {
    v2_dev: true,
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
};
exports.appDirectory = "./app";
