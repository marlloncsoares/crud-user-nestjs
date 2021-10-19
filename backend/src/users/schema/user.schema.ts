import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'users' })
export class User {
  @Prop({ type: String })
  name: string;

  @Prop({ type: Number })
  age: number;

  @Prop({ type: String })
  genre: string;

  @Prop({ type: String })
  cpf: string;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
