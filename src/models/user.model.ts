import { Column, DataType, Default, Model, Table } from "sequelize-typescript";
import { v4 as uuidv4 } from "uuid";

@Table({
  tableName: "users",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
})
export class User extends Model {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
  })
  @Default(uuidv4)
  declare id: string;

  @Column({
    type: DataType.STRING(255),
    unique: true,
  })
  declare email: string;

  @Column({
    type: DataType.STRING(255),
    defaultValue: "customer",
  })
  declare role: string;

  @Column({
    type: DataType.TEXT,
  })
  declare password: string;

  @Column({
    type: DataType.UUID,
    field: "created_by",
  })
  declare createdBy: string;

  @Column({
    type: DataType.UUID,
    field: "Updated_by",
  })
  declare updatedBy: string;
}
