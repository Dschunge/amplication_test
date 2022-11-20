import { User } from "../user/User";

export type Project = {
  createdAt: Date;
  description: string;
  id: string;
  name: string;
  owner?: User | null;
  startDate: Date;
  updatedAt: Date;
};
