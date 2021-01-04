import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.sessionID = createUserDto.sessionID;
    user.totalTime = createUserDto.totalTime;
    user.timeIn = createUserDto.timeIn;
    user.timeOut = createUserDto.timeOut;

    return this.usersRepository.save(user);
  }

  async getUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async getUsersFromDates(timeIn: Date, timeOut: Date): Promise<User[]> {
    return this.usersRepository.query(
      `SELECT * FROM public."user" where timeIn='${timeIn}' and timeOut='${timeOut}'`,
    );
  }
}
