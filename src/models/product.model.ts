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
import { User } from "./user.model";
import { Cart } from "./cart.model";
import { ProductCategory } from "./product_category.model";
import { ProductImage } from "./product_image.model";
import { ProductVariant } from "./product_variant.model";
import { ProductSize } from "./product_size.model";
import { TransactionItem } from "./transaction_item.model";

@Table({
  tableName: "products",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updatedAt",
  paranoid: true,
  deletedAt: "deleted_at",
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

  // Cart

  @HasMany(() => Cart)
  declare cart: Cart;

  // Product Category

  @HasMany(() => ProductCategory)
  declare productCategory: ProductCategory[];

  // Product Image

  @HasMany(() => ProductImage)
  declare productImage: ProductImage[];

  // Product Variant

  @HasMany(() => ProductVariant)
  declare productVariant: ProductVariant[];

  // Product Size

  @HasMany(() => ProductSize)
  declare productSize: ProductSize[];

  // TransactionItem

  @HasMany(() => TransactionItem)
  declare transactionItem: TransactionItem[];
}
