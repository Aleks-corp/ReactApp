export interface GetTask {
  id: string;
  name: string;
  description: string;
  priority: string;
  taskList: string;
  created_at: string;
  updated_at: string;
}

export interface AddTask {
  name: string;
  description: string;
  priority: string;
  taskList: string;
}

export interface UpdateTask {
  id: string;
  name?: string;
  description?: string;
  priority?: string;
  taskList?: string;
}
