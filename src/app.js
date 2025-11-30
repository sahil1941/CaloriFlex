import express from "express";
import routes from "./routes.js";

const app = express();
app.use(express.json());

app.use("/", routes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`CaloriFlex running on port ${PORT}`);
});

export default app;