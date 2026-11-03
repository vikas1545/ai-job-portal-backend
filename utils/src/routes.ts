import express from "express";
import cloudinary from "cloudinary";

const router = express.Router();

router.post("/upload", async (req, res) => {
  try {
    const { buffer, public_id } = req.body;

    if (public_id) {
      await cloudinary.v2.uploader.destroy(public_id);
    }

    const cloud = await cloudinary.v2.uploader.upload(buffer);

    res.json({
      url: cloud.secure_url,
      public_id: cloud.public_id,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/deleteFile/:public_id", async (req, res) => {
  try {
    const { public_id } = req.params;

    const result = await cloudinary.v2.uploader.destroy(public_id);

    if (result.result === "ok") {
      return res.status(200).json({
        success: true,
        message: "File deleted successfully",
      });
    }

    if (result.result === "not found") {
      return res.status(404).json({
        success: false,
        message: "File not found",
      });
    }

    return res.status(400).json(result);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;
