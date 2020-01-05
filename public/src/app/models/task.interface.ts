export interface Task {
  _id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  taskName: string;
  description?: string;
  completed: boolean;
  completedBy?: string;
  createdBy: string;
  listID: string;
  dueDate?: Date;
  assignedUser?: string;
  estimatedTimeNum?: number;
  estimatedTimeString?: string;
}
