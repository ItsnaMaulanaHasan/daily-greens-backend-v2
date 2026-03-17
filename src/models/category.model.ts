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
  tableName: "categories",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
  paranoid: true,
  deletedAt: "deleted_at",
})
export class Category extends Model {
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    autoIncrement: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING(50),
    unique: true,
  })
  declare name: string;

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
