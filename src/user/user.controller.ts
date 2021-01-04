import { Controller, Get, Req, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import Request from 'express';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(@Req() request: Request): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Get()
  findUsersDateRange(
    @Param('timeIn') timeIn: Date,
    @Param('timeOut') timeOut: Date,
  ) {
    return this.userService.getUsersFromDates(timeIn, timeOut);
  }
}
