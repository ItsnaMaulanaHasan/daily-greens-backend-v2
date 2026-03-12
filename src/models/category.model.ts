import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "categories",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
})
export class Category extends Model {
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    autoIncrement: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING(255),
    unique: true,
  })
  declare name: string;

  // relations
}
