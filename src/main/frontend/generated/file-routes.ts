import type { AgnosticRoute } from "@vaadin/hilla-file-router/types.js";
import { createRoute } from "@vaadin/hilla-file-router/runtime.js";
import * as Page0 from "../views/@index.js";
import * as Page1 from "../views/channel/{channelId}/@index.js";
import * as Layout4 from "../views/@layout.js";
const routes: readonly AgnosticRoute[] = [
    createRoute("", Layout4, [
        createRoute("", Page0),
        createRoute("channel", [
            createRoute(":channelId", [
                createRoute("", Page1)
            ])
        ])
    ])
];
export default routes;
