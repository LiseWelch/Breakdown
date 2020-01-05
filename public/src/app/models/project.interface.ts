export interface Project {
  _id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  projectName: string;
  adminID: string;
  projectUsers?: string[];
}
