import { Note } from "../note/Note";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  notes?: Note | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
