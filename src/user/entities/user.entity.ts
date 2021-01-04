import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  sessionID: string;

  @Column()
  totalTime: number;

  @Column()
  timeIn: Date;

  @Column()
  timeOut: Date;
}
