import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class CreateUserDto {
  @Field()
  readonly id?: string;
  @Field()
  readonly sessionID: string;
  @Field()
  readonly seconds: number;
  @Field()
  readonly timeIn: Date;
  @Field()
  readonly timeOut: Date;
}
