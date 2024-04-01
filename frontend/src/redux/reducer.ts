import { modalReducer } from "./modal/modalSlice";
import { taskReducer } from "./task/taskSlice";

export const reducer = {
  tasks: taskReducer,
  modal: modalReducer,
};
