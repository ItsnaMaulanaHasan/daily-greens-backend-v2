import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "variants",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
})
export class Variant extends Model {
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

  @Column({
    type: DataType.DECIMAL(10, 2),
    field: "variant_cost",
    defaultValue: 0,
  })
  declare variantCost: number;

  // relations
}
