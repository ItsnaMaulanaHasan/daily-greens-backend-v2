import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Product } from "./product.model";
import { Size } from "./size.model";

@Table({
  tableName: "product_sizes",
  timestamps: false,
  indexes: [
    {
      name: "idx_ps_product_size_unique",
      unique: true,
      fields: ["product_id", "size_id"],
    },
  ],
})
export class ProductSize extends Model {
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

  @ForeignKey(() => Size)
  @Column({
    type: DataType.INTEGER,
    field: "size_id",
  })
  declare sizeId: number;

  // relations

  @BelongsTo(() => Product, {
    foreignKey: "product_id",
    onDelete: "CASCADE",
  })
  declare product: Product;

  @BelongsTo(() => Size, "size_id")
  declare size: Size;
}
