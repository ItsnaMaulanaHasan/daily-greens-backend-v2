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
  tableName: "profiles",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
  paranoid: true,
  deletedAt: "deleted_at",
})
export class Profile extends Model {
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
    unique: true,
  })
  declare userId: string;

  @Column({
    type: DataType.STRING(255),
    field: "full_name",
  })
  declare fullName: string;

  @Column({
    type: DataType.TEXT,
    field: "profile_photo",
  })
  declare profilePhoto: string;

  @Column({
    type: DataType.STRING(255),
  })
  declare address: string;

  @Column({
    type: DataType.STRING(20),
    field: "phone_number",
  })
  declare phoneNumber: string;

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

  // relations
  @BelongsTo(() => User)
  declare user: User;

  @BelongsTo(() => User)
  declare creator: User;

  @BelongsTo(() => User)
  declare updater: User;

  @BelongsTo(() => User)
  declare deleter: User;
}
