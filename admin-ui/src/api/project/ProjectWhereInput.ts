import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type ProjectWhereInput = {
  description?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  owner?: UserWhereUniqueInput;
  startDate?: DateTimeFilter;
};
