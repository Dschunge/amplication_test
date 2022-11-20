import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectUpdateInput = {
  description?: string;
  name?: string;
  owner?: UserWhereUniqueInput | null;
  startDate?: Date;
};
