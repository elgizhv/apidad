import { Router } from "express";

import uploadMiddleware from "../middlewares/upload";

import { onUpload, onDelete } from "../controller/media.controller";

const router = Router();

router.post("/", uploadMiddleware, onUpload);
router.delete("/", onDelete);

export default router;
