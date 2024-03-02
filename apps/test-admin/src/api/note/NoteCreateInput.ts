import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NoteCreateInput = {
  content?: string | null;
  user?: UserWhereUniqueInput | null;
};
