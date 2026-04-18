import {
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { v4 as uuidv4 } from "uuid";
import { OrderMethod } from "./order_method.model";
import { PaymentMethod } from "./payment_method.model";
import { Status } from "./status.model";
import { User } from "./user.model";
import { TransactionItem } from "./transaction_item.model";

@Table({
  tableName: "transactions",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
  paranoid: true,
  deletedAt: "deleted_at",
})
export class Transaction extends Model {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
  })
  @Default(uuidv4)
  declare id: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    field: "user_id",
  })
  declare userId: string;

  @Column({
    type: DataType.STRING(255),
    field: "no_invoice",
    unique: true,
  })
  declare noInvoice: string;

  @Column({
    type: DataType.DATE,
    field: "date_transaction",
  })
  @Default(DataType.NOW)
  declare dateTransaction: Date;

  @Column({
    type: DataType.STRING(255),
    field: "full_name",
  })
  declare fullName: string;

  @Column({
    type: DataType.STRING(255),
  })
  declare email: string;

  @Column({
    type: DataType.STRING(255),
  })
  declare address: string;

  @Column({
    type: DataType.STRING(20),
    field: "phone_number",
  })
  declare phoneNumber: string;

  @ForeignKey(() => PaymentMethod)
  @Column({
    type: DataType.INTEGER,
    field: "payment_method_id",
    allowNull: true,
  })
  declare paymentMethodId: number;

  @ForeignKey(() => OrderMethod)
  @Column({
    type: DataType.INTEGER,
    field: "order_method_id",
    allowNull: true,
  })
  declare orderMethodId: number;

  @ForeignKey(() => Status)
  @Column({
    type: DataType.INTEGER,
    field: "status_id",
    allowNull: true,
  })
  @Default(1)
  declare statusId: number;

  @Column({
    type: DataType.DECIMAL(10, 2),
    field: "delivery_fee",
  })
  @Default(0)
  declare deliveryFee: number;

  @Column({
    type: DataType.DECIMAL(10, 2),
    field: "admin_fee",
  })
  @Default(0)
  declare adminFee: number;

  @Column({
    type: DataType.DECIMAL(10, 2),
  })
  @Default(0)
  declare tax: number;

  @Column({
    type: DataType.DECIMAL(10, 2),
    field: "total_transaction",
  })
  @Default(0)
  declare totalTransaction: number;

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

  // relations

  @BelongsTo(() => User, "user_id")
  declare user: User;

  @BelongsTo(() => Status, "status_id")
  declare status: Status;

  @BelongsTo(() => User, "created_by")
  declare creator: User;

  @BelongsTo(() => User, "updated_by")
  declare updater: User;

  @BelongsTo(() => User, "deleted_by")
  declare deleter: User;

  // Payment Method

  @BelongsTo(() => PaymentMethod, "payment_method_id")
  declare paymentMethod: PaymentMethod;

  // Order Method

  @BelongsTo(() => OrderMethod, "order_method_id")
  declare orderMethod: OrderMethod;

  // Transaction Item

  @HasMany(() => TransactionItem)
  declare transactionItem: TransactionItem[];
}
