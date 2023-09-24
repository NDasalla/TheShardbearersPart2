import express from "express";
import path from "path";

import { fileURLToPath } from "url";

// import shardbearerData from "../data/shardbearers.js";
import ShardbearersController from "../controllers/shardbearers.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/", ShardbearersController.getShardbearers);

router.get("/:shardbearerId", (req, res) => {
  res
    .status(200)
    .sendFile(path.resolve(__dirname, "../../client/public/shardbearer.html"));
});

export default router;
