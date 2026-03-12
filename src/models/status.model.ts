import { Model } from "sequelize";
import { Column, DataType, Table } from "sequelize-typescript";

@Table({
  tableName: "status",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
})
export class Status extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  declare id: number;

  @Column({
    type: DataType.STRING(50),
    unique: true,
  })
  declare name: string;

  // relations
}
