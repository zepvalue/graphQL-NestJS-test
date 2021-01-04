import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class UserInput {
  @Field()
  readonly sessionID: string;
  @Field(() => Int)
  readonly visits: number;
}
