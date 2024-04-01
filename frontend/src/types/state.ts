import { GetTask } from "./tasks";

export interface State {
  tasks: {
    isLoading: boolean;
    error: Error | null;
    taskList: GetTask[];
    listOfTasks: string[];
    task: GetTask | null;
  };
  modal: {
    taskComponent: React.ReactNode | null;
    isOpen: boolean;
    error: Error | null;
  };
}

export interface TasksState {
  isLoading: boolean;
  error: Error | null;
  taskList: GetTask[];
  listOfTasks: string[];
  task: GetTask | null;
}

export interface ModalState {
  taskComponent: React.ReactNode | null;
  isOpen: boolean;
  error: Error | null;
}
