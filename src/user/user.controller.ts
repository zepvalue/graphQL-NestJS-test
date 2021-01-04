import { Controller, Get, Req, Param, Logger, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import Request from 'express';

@Controller('users')
export class UserController {
  private logger: Logger = new Logger('UserController');

  constructor(private readonly userService: UserService) {}

  @Get()
  findUsersInRange(@Query() query) {
    console.log('RANGE');
    const { timeIn, timeOut } = query;

    return this.userService.getUsersFromDates(timeIn, timeOut);
  }

  @Get()
  findAll(@Req() request: Request): Promise<User[]> {
    return this.userService.getUsers();
  }
}
