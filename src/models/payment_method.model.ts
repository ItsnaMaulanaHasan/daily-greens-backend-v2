import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "./user.model";

@Table({
  tableName: "payment_methods",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
  paranoid: true,
  deletedAt: "deleted_at",
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

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: true,
    field: "created_by",
  })
  declare createdBy: User;

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

  @BelongsTo(() => User, "created_by")
  declare creator: User;

  @BelongsTo(() => User, "updated_by")
  declare updater: User;

  @BelongsTo(() => User, "deleted_by")
  declare deleter: User;
}
