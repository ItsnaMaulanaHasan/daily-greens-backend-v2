import "dotenv/config";
import process from "process";
import { Sequelize } from "sequelize-typescript";
import { User } from "../models/user.model";

export const sequelize = new Sequelize({
  database: process.env.DB_NAME || "your_db",
  dialect: (process.env.DB_DIALECT as any) || "postgres",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "5432", 10),
  username: process.env.DB_USER || "your_user",
  password: process.env.DB_PASSWORD || "your_password",
  models: [User],
  logging: process.env.DB_LOGGING === "true",
});
