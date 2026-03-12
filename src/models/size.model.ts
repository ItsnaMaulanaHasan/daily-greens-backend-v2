import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "sizes",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
})
export class Size extends Model {
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    autoIncrement: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING(20),
    unique: true,
  })
  declare name: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    defaultValue: 0,
    field: "size_cost",
  })
  declare sizeCost: number;

  // relations
}
