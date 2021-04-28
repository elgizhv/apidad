import admin from "firebase-admin";
import { join } from "path";
import { firebase as firebaseConfig } from "../../config";
import { v4 as uuidv4 } from "uuid";
import mimeTypes from "mime-types";

export interface uploadFileInput {
  mime: string;
  buffer: string | Buffer;
  path?: string;
}

export const getBucket = () => {
  let bucketName = firebaseConfig.storage.bucket;
  if (bucketName?.length == 0) bucketName = undefined;
  return admin.storage().bucket(bucketName);
};

export const uploadFile = async ({ buffer, path, mime }: uploadFileInput) => {
  const ext = mimeTypes.extension(mime);
  let originName = `${uuidv4()}-${Date.now()}.${ext}`;
  if (path) originName = join(path, originName);

  const blob = getBucket().file(originName);

  await blob.save(buffer, {
    contentType: mime,
    gzip: true,
  });
  const [url] = await blob.getSignedUrl({
    action: "read",
    expires: "01-01-2100",
  });

  return { url, ref: originName };
};

export const deleteFile = async (ref: string) => {
  if (!ref || ref.length == 0) return;
  return getBucket().deleteFiles({
    prefix: ref,
  });
};
