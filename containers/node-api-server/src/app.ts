import * as bodyParser from "body-parser";
import * as compression from "compression";
import * as express from "express";

import * as foxController from "./controllers/fox";

const app: express.Express = express();

app.set("port", process.env.PORT || 9000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Primary app routes.
 */
app.get("/api/foxes", foxController.getFoxes);

export { app };
