import { Controller, Get, Req, Session } from '@nestjs/common';
import Request from 'express';

@Controller('users')
export class UserController {
  @Get()
  find(@Session() session: Record<string, any>, @Req() req: Request) {
    //gonna use the session.id to identify the user in the DB

    session.visits = session.visits ? session.visits + 1 : 1;
  }
}
