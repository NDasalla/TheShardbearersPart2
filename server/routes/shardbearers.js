import express from "express";
import path from "path";

import { fileURLToPath } from "url";

import shardbearerData from "../data/shardbearers.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(shardbearerData);
});

router.get("/:shardbearerId", (req, res) => {
  res
    .status(200)
    .sendFile(path.resolve(__dirname, "../../client/public/shardbearer.html"));
});

export default router;
