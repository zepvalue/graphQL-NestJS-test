import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Session,
} from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Controller('users')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  totalSeconds = 0;
  timer = null;

  setTime() {
    this.totalSeconds++;
    console.log('seconds:', this.totalSeconds.toString());
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.userService.remove(id);
  }

  @Get()
  find(@Session() session: Record<string, any>) {
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

  @Query(() => String)
  hello() {
    return 'world';
  }
}
