import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NoteUpdateInput = {
  content?: string | null;
  user?: UserWhereUniqueInput | null;
};
