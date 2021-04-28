import Multer from "multer";

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

export default (req: any, res: any, next: any) => {
  multer.single("file")(req, res, (err: any) => {
    if (err) {
      res
        .status(400)
        .json({ error: "something went wrong", key: "unexpected_error" });
      return;
    }
    next();
  });
};
