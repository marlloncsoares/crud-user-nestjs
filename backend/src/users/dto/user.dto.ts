import { InputType, Field, ObjectType } from '@nestjs/graphql';

@ObjectType('UserType')
@InputType('UserInputType')
export class UserType {
  @Field()
  name: string;

  @Field()
  age: number;

  @Field()
  genre: string;

  @Field()
  cpf: string;
}
