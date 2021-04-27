import { Router } from "express";
import { Response } from "express";
import { storage } from "../../services/firebase";
import uploadMiddleware from "../middlewares/upload";

import { MediaModel } from "../../database/model/Media";
import { deleteFile } from "../../services/firebase/storage";

const router = Router();

router.post("/", uploadMiddleware, async (req: any, res: Response) => {
  if (!req.file) {
    res.status(400).send("No file uploaded.");
    return;
  }
  const { file } = req;
  let { url, ref } = await storage.uploadFile({
    name: file.originalname,
    buffer: file.buffer,
    path: "media",
    mime: file.mimetype,
  });

  let media = await MediaModel.create({
    data: {
      url,
      ref,
    },
    userId: req.user?.id,
  });
  return res.json(media);
});
router.delete("/", async (req: any, res: Response) => {
  if (!req.body) {
    res.status(400).send("No file uploaded.");
    return;
  }
  const { body } = req;
  let media = await MediaModel.findOne({ _id: body.id, userId: req.user?.id });
  if (!media) {
    return res.status(404).json({ error: "not found", key: "not_found" });
  }
  await deleteFile(media.data.ref);
  await media.remove();
  return res.json({ success: true });
});

export default router;
