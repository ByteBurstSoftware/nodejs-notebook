import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NoteWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
