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

  @Query(() => String)
  hello() {
    return 'world';
  }
}
