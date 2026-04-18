import {
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Transaction } from "./transaction.model";
import { Product } from "./product.model";
import { User } from "./user.model";

@Table({
  tableName: "transaction_items",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
  paranoid: true,
  deletedAt: "deleted_at",
})
export class TransactionItem extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  declare id: number;

  @ForeignKey(() => Transaction)
  @Column({
    type: DataType.UUID,
    field: "transaction_id",
  })
  declare transactionId: string;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.UUID,
    field: "product_id",
  })
  declare productId: string;

  @Column({
    type: DataType.STRING(255),
    field: "product_name",
  })
  declare productName: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    field: "product_price",
  })
  declare productPrice: number;

  @Column({
    type: DataType.STRING(10),
    allowNull: true,
  })
  declare size: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    field: "size_cost",
  })
  @Default(0)
  declare sizeCost: number;

  @Column({
    type: DataType.STRING(50),
    allowNull: true,
  })
  declare variant: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    field: "variant_cost",
  })
  @Default(0)
  declare variantCost: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare amount: number;

  @Column({
    type: DataType.DECIMAL(10, 2),
  })
  @Default(0)
  declare subtotal: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: true,
    field: "created_by",
  })
  declare createdBy: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: true,
    field: "updated_by",
  })
  declare updatedBy: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: true,
    field: "deleted_by",
  })
  declare deletedBy: string;
}
