import { Document } from 'mongoose';

export interface User extends Document {
  readonly sessionID: string;
  readonly visits: number;
}
