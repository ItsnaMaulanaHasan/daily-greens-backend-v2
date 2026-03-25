import {
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  HasOne,
  Model,
  Table,
} from "sequelize-typescript";
import { v4 as uuidv4 } from "uuid";
import { Profile } from "./profile.model";

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

  // relations
  @HasOne(() => Profile)
  declare profile: Profile;

  @BelongsTo(() => User)
  declare creator: User;

  @BelongsTo(() => User)
  declare updater: User;

  @BelongsTo(() => User)
  declare deleter: User;
}
