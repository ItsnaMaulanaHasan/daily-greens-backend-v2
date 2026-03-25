import {
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  HasMany,
  HasOne,
  Model,
  Table,
} from "sequelize-typescript";
import { v4 as uuidv4 } from "uuid";
import { Category } from "./category.model";
import { OrderMethod } from "./order_method.model";
import { PaymentMethod } from "./payment_method.model";
import { Product } from "./product.model";
import { Profile } from "./profile.model";
import { Size } from "./size.model";
import { Status } from "./status.model";
import { Variant } from "./variant.model";

@Table({
  tableName: "users",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
  paranoid: true,
  deletedAt: "deleted_at",
})
export class User extends Model {
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
  declare email: string;

  @Column({
    type: DataType.STRING(255),
    defaultValue: "customer",
  })
  declare role: string;

  @Column({
    type: DataType.TEXT,
  })
  declare password: string;

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
    field: "Updated_by",
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
  @HasOne(() => Profile)
  declare profile: Profile;

  @BelongsTo(() => User, "created_by")
  declare creator: User;

  @BelongsTo(() => User, "updated_by")
  declare updater: User;

  @BelongsTo(() => User, "deleted_by")
  declare deleter: User;

  // Category
  @HasMany(() => Category, {
    foreignKey: "created_by",
    as: "categoriesCreated",
  })
  declare categoriesCreated: Category[];

  @HasMany(() => Category, {
    foreignKey: "updated_by",
    as: "categoriesUpdated",
  })
  declare categoriesUpdated: Category[];

  @HasMany(() => Category, {
    foreignKey: "deleted_by",
    as: "categoriesDeleted",
  })
  declare categoriesDeleted: Category[];

  // Product
  @HasMany(() => Product, { foreignKey: "created_by", as: "productsCreated" })
  declare productsCreated: Product[];

  @HasMany(() => Product, { foreignKey: "updated_by", as: "productsUpdated" })
  declare productsUpdated: Product[];

  @HasMany(() => Product, { foreignKey: "deleted_by", as: "productsDeleted" })
  declare productsDeleted: Product[];

  // Variant
  @HasMany(() => Variant, { foreignKey: "created_by", as: "variantsCreated" })
  declare variantsCreated: Variant[];

  @HasMany(() => Variant, { foreignKey: "updated_by", as: "variantsUpdated" })
  declare variantsUpdated: Variant[];

  @HasMany(() => Variant, { foreignKey: "deleted_by", as: "variantsDeleted" })
  declare variantsDeleted: Variant[];

  // Size
  @HasMany(() => Size, { foreignKey: "created_by", as: "sizesCreated" })
  declare sizesCreated: Size[];

  @HasMany(() => Size, { foreignKey: "updated_by", as: "sizesUpdated" })
  declare sizesUpdated: Size[];

  @HasMany(() => Size, { foreignKey: "deleted_by", as: "sizesDeleted" })
  declare sizesDeleted: Size[];

  // PaymentMethod
  @HasMany(() => PaymentMethod, {
    foreignKey: "created_by",
    as: "paymentMethodsCreated",
  })
  declare paymentMethodsCreated: PaymentMethod[];

  @HasMany(() => PaymentMethod, {
    foreignKey: "updated_by",
    as: "paymentMethodsUpdated",
  })
  declare paymentMethodsUpdated: PaymentMethod[];

  @HasMany(() => PaymentMethod, {
    foreignKey: "deleted_by",
    as: "paymentMethodsDeleted",
  })
  declare paymentMethodsDeleted: PaymentMethod[];

  // OrderMethod
  @HasMany(() => OrderMethod, {
    foreignKey: "created_by",
    as: "orderMethodsCreated",
  })
  declare orderMethodsCreated: OrderMethod[];

  @HasMany(() => OrderMethod, {
    foreignKey: "updated_by",
    as: "orderMethodsUpdated",
  })
  declare orderMethodsUpdated: OrderMethod[];

  @HasMany(() => OrderMethod, {
    foreignKey: "deleted_by",
    as: "orderMethodsDeleted",
  })
  declare orderMethodsDeleted: OrderMethod[];

  // Profile
  @HasMany(() => Profile, { foreignKey: "created_by", as: "profilesCreated" })
  declare profilesCreated: Profile[];

  @HasMany(() => Profile, { foreignKey: "updated_by", as: "profilesUpdated" })
  declare profilesUpdated: Profile[];

  @HasMany(() => Profile, { foreignKey: "deleted_by", as: "profilesDeleted" })
  declare profilesDeleted: Profile[];

  // Status
  @HasMany(() => Status, { foreignKey: "created_by", as: "statusesCreated" })
  declare statusesCreated: Status[];

  @HasMany(() => Status, { foreignKey: "updated_by", as: "statusesUpdated" })
  declare statusesUpdated: Status[];

  @HasMany(() => Status, { foreignKey: "deleted_by", as: "statusesDeleted" })
  declare statusesDeleted: Status[];

  // Self User (Users created/updated/deleted by this User)
  @HasMany(() => User, { foreignKey: "created_by", as: "usersCreated" })
  declare usersCreated: User[];

  @HasMany(() => User, { foreignKey: "updated_by", as: "usersUpdated" })
  declare usersUpdated: User[];

  @HasMany(() => User, { foreignKey: "deleted_by", as: "usersDeleted" })
  declare usersDeleted: User[];
}
