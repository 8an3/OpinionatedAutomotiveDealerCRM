import * as build from "@remix-run/dev/server-build";
import { installGlobals } from "@remix-run/node";
import { createRequestHandler } from "@remix-run/vercel";
import { broadcastDevReady } from "@remix-run/node";

installGlobals();

export default createRequestHandler({ build, mode: process.env.NODE_ENV });
