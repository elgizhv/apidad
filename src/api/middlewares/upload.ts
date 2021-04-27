import Multer from "multer";

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024,
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
