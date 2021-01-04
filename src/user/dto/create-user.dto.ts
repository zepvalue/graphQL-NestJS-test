import { ObjectType, Field, Int, ID } from 'type-graphql';

@ObjectType()
export class UserType {
  @Field(() => ID)
  id: string;
  @Field()
  readonly sessionID: string;
  @Field(() => Int)
  readonly visits: number;
}
