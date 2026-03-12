import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "payment_methods",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
})
export class PaymentMethod extends Model {
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
    defaultValue: 0,
    field: "admin_fee",
  })
  declare adminFee: number;

  // relations
}
