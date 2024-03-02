import { NoteWhereUniqueInput } from "../note/NoteWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  notes?: NoteWhereUniqueInput | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
