import { Controller, Get, Req, Param, Logger } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import Request from 'express';

@Controller('users')
export class UserController {
  private logger: Logger = new Logger('UserController');

  constructor(private readonly userService: UserService) {}

  @Get()
  findUsersInRange(
    @Param('timeIn') timeIn: Date,
    @Param('timeOut') timeOut: Date,
  ) {
    this.logger.verbose('IN TIME RANGE');
    return this.userService.getUsersFromDates(timeIn, timeOut);
  }

  @Get()
  findAll(@Req() request: Request): Promise<User[]> {
    return this.userService.getUsers();
  }
}
