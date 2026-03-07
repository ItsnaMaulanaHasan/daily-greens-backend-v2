import "reflect-metadata";
import app from "./app";
import { sequelize } from "./config/database";

const PORT = 3000;

async function start() {
  await sequelize.authenticate();
  await sequelize.sync();

  console.log("Database connected!");

  app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
  });
}

start();
