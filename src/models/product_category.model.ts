import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Product } from "./product.model";
import { Category } from "./category.model";

@Table({
  tableName: "product_categories",
})
export class ProductCategory extends Model {
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

  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
    field: "category_id",
  })
  declare categoryId: number;

  // relations

  @BelongsTo(() => Product, "product_id")
  declare product: Product;

  @BelongsTo(() => Category, "category_id")
  declare category: Category;
}
