import { Controller, Get, Req, Session } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserType } from './dto/create-user.dto';

import Request from 'express';
import { UserService } from './user.service';
import { UserInput } from './inputs/user.input';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  totalSeconds = 0;
  timer = null;

  @Get()
  find(@Session() session: Record<string, any>, @Req() req: Request) {
    //gonna use the session.id to identify the user in the DB

    console.log('userID: ', session.id);

    session.visits = session.visits ? session.visits + 1 : 1;

    console.log('visits: ', session.visits);

    this.timer = setInterval(this.setTime, 1000);

    setTimeout(() => {
      console.log('time is up!');
      clearInterval(this.timer);
    }, 10000);
  }

  setTime() {
    this.totalSeconds++;
    console.log('seconds:', this.totalSeconds.toString());
  }

  @Query(() => [UserType])
  async users() {
    return this.userService.findAll();
  }

  @Mutation(() => UserType)
  async createUser(@Args('input') input: UserInput) {
    console.log({ input });
    return this.userService.create(input);
  }
}
