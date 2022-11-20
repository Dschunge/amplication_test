import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectCreateInput = {
  description: string;
  name: string;
  owner?: UserWhereUniqueInput | null;
  startDate: Date;
};
