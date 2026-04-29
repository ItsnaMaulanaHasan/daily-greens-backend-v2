import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Product } from "./product.model";
import { Variant } from "./variant.model";

@Table({
  tableName: "product_variants",
  timestamps: false,
  indexes: [
    {
      name: "idx_pv_product_variant_unique",
      unique: true,
      fields: ["product_id", "variant_id"],
    },
  ],
})
export class ProductVariant extends Model {
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    autoIncrement: true,
  })
  declare id: number;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.UUID,
    field: "product_id",
  })
  declare productId: string;

  @ForeignKey(() => Variant)
  @Column({
    type: DataType.INTEGER,
    field: "variant_id",
  })
  declare variantId: number;

  // relations

  @BelongsTo(() => Product, {
    foreignKey: "product_id",
    onDelete: "CASCADE",
  })
  declare product: Product;

  @BelongsTo(() => Variant, "variant_id")
  declare variant: Variant;
}
