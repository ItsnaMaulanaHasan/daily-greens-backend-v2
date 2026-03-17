import {
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { v4 as uuidv4 } from "uuid";
import { User } from "./user.model";

@Table({
  tableName: "products",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updatedAt",
})
export class Product extends Model {
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
  declare name: string;

  @Column({
    type: DataType.TEXT,
  })
  declare description: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
  })
  declare price: number;

  @Column({
    type: DataType.DECIMAL(5, 2),
    field: "discount_percent",
    defaultValue: 0,
  })
  declare discountPercent: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare stock: number;

  @Column({
    type: DataType.DECIMAL(2, 1),
    defaultValue: 5,
  })
  declare rating: number;

  @Column({
    type: DataType.BOOLEAN,
    field: "is_flash_sale",
    defaultValue: false,
  })
  declare isFlashSale: boolean;

  @Column({
    type: DataType.BOOLEAN,
    field: "is_active",
  })
  declare isActive: boolean;

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

  @BelongsTo(() => User, "created_by")
  declare creator: User;

  @BelongsTo(() => User, "updated_by")
  declare updater: User;

  @BelongsTo(() => User, "deleted_by")
  declare deleter: User;
}
