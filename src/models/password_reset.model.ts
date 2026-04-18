import {
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  Sequelize,
  Table,
} from "sequelize-typescript";
import { v4 as uuidv4 } from "uuid";
import { User } from "./user.model";

@Table({
  tableName: "password_resets",
  timestamps: true,
  createdAt: "created_at",
})
export class PasswordReset extends Model {
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

  @Column({
    type: DataType.CHAR(12),
    field: "token_reset",
  })
  declare tokenReset: string;

  @Column({
    type: DataType.DATE,
    field: "expired_at",
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP + INTERVAL '1 hour'"),
  })
  declare expiredAt: Date;

  // relations

  @BelongsTo(() => User, "user_id")
  declare user: User;
}
