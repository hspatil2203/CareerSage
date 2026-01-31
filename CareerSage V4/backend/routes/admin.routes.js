import express from "express";
import {
  requireAuth,
  requireAdmin
} from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/admin", requireAuth, requireAdmin, (req, res) => {
  res.json({
    message: "Admin route accessed successfully",
    admin: req.user
  });
});

export default router;
