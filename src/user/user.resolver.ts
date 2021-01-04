import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Resolver('users')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => String)
  hello() {
    return 'world';
  }

  @Query(() => [CreateUserDto])
  dates(@Args('timeIn') timeIn?: Date, @Args('timeOut') timeOut?: Date) {
    return this.userService.getUsersFromDates(timeIn, timeOut);
  }
}
