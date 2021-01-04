import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  sessionID: string;

  @Column()
  seconds: number;

  @Column({ type: 'date' })
  timeIn: Date;

  @Column({ type: 'date' })
  timeOut: Date;
}
