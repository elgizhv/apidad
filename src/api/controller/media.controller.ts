import { Response } from "express";
import sharp from "sharp";

import { storage } from "../../services/firebase";
import { deleteFile } from "../../services/firebase/storage";

import { MediaModel, MediaType } from "../../database/model/Media";

const onUpload = async (req: any, res: Response) => {
  if (!req.file) {
    res.status(400).send("No file uploaded.");
    return;
  }
  let { file } = req;
  file.buffer = await sharp(file.buffer)
    .toFormat("png")
    .resize(750)
    .png({ compressionLevel: 6, adaptiveFiltering: true, force: true })
    .toBuffer();
  let { url, ref } = await storage.uploadFile({
    buffer: file.buffer,
    path: "media",
    mime: "image/png",
  });

  let media = await MediaModel.create({
    data: {
      url,
      ref,
    },
    userId: req.user?.id,
    type: MediaType.PHOTO,
  });
  return res.json(media);
};

const onDelete = async (req: any, res: Response) => {
  if (!req.body) {
    res.status(400).send("No file uploaded.");
    return;
  }
  const { body } = req;
  let filter = { _id: body.id, userId: req.user?.id };
  let media = await MediaModel.deleteOneMedia(filter);
  if (!media) {
    return res.status(404).json({ error: "not found", key: "not_found" });
  }
  return res.json({ success: true });
};

export { onUpload, onDelete };
