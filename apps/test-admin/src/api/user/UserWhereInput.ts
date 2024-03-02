import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NoteWhereUniqueInput } from "../note/NoteWhereUniqueInput";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  notes?: NoteWhereUniqueInput;
  username?: StringFilter;
};
