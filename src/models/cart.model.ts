import {
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { v4 as uuidv4 } from "uuid";
import { Product } from "./product.model";
import { Size } from "./size.model";
import { User } from "./user.model";
import { Variant } from "./variant.model";

@Table({
  tableName: "carts",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
  paranoid: true,
  deletedAt: "deleted_at",
})
export class Cart extends Model {
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

  @ForeignKey(() => Product)
  @Column({
    type: DataType.UUID,
    field: "product_id",
  })
  declare productId: string;

  @ForeignKey(() => Size)
  @Column({
    type: DataType.INTEGER,
    field: "size_id",
  })
  declare sizeId: number;

  @ForeignKey(() => Variant)
  @Column({
    type: DataType.INTEGER,
    field: "variant_id",
  })
  declare variantId: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare amount: number;

  @Column({
    type: DataType.DECIMAL(10, 2),
  })
  @Default(0)
  declare subtotal: number;
}
