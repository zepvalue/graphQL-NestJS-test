import { Controller, Get, Req } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all users';
  }
}
