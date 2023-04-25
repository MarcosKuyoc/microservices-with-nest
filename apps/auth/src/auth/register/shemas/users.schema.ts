import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type UsersDocument = Users & Document;

@Schema()
export class Users {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({
    enum: {
      values: ['admin', 'user', 'client'],
      message: '{VALUE} no es un rol válido',
      default: 'user',
      required: true,
    },
  })
  role: string;

  @Prop({ type: Date, default: new Date() })
  createdAt: Date;

  @Prop({ type: Date })
  updatedAt: Date;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
