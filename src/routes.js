import express from "express";
import { calculate } from "./controllers/calculatorController.js";

const router = express.Router();

router.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy", service: "CaloriFlex API" });
});

router.post("/calculate", calculate);

export default router;