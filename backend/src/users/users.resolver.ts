import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UserType } from './dto/user.dto';
import { User } from './schema/user.schema';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation((returns) => UserType)
  async createUser(@Args('input') input: UserType): Promise<User> {
    return this.usersService.create(input);
  }
}
