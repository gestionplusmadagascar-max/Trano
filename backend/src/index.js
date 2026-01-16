import { createApp } from "./app.js";

const app = createApp();
const port = process.env.PORT ? Number(process.env.PORT) : 4000;

app.listen(port, "0.0.0.0", () => {
  console.log(`Trano API running on port ${port}`);
});
