import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  addTask,
  deleteTask,
  fetchTasks,
  fetchTaskById,
  updateTask,
} from "./thunk";
import { GetTask } from "../../types/tasks";
import { TasksState } from "../../types/state";
import { defaultListOfTasks } from "../../constants/constants";

const initialState: TasksState = {
  taskList: [],
  listOfTasks: [],
  task: null,
  isLoading: false,
  error: null,
};

const handlePending = (state: TasksState) => {
  state.isLoading = true;
};
const handleRejected = (state: TasksState, action: PayloadAction<Error>) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handleFulfilled = (state: TasksState) => {
  state.error = null;
  state.isLoading = false;
};

const handleFulfilledTasks = (
  state: TasksState,
  action: PayloadAction<GetTask[]>
): void => {
  state.taskList = action.payload;
  state.listOfTasks = [
    ...new Set([
      ...defaultListOfTasks,
      ...action.payload.map((item) => item.taskList),
    ]),
  ];
};

const handleFulfilledTaskById = (
  state: TasksState,
  action: PayloadAction<GetTask>
) => {
  state.task = action.payload;
};

const handleFulfilledAddTasks = (
  state: TasksState,
  action: PayloadAction<GetTask>
) => {
  state.taskList.push(action.payload);
};

const handleFulfilledUpdateTasks = (
  state: TasksState,
  action: PayloadAction<GetTask>
) => {
  const updatedTask = action.payload;
  const index = state.taskList.findIndex((task) => task.id === updatedTask.id);
  if (index !== -1) {
    state.taskList.splice(index, 1, updatedTask);
  }
};

const handleFulfilledDeleteTasks = (
  state: TasksState,
  action: PayloadAction<GetTask[]>
) => {
  state.taskList = action.payload;
};

const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addNewList: (state: TasksState, action: PayloadAction<string>) => {
      state.listOfTasks.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, handleFulfilledTasks)
      .addCase(addTask.fulfilled, handleFulfilledAddTasks)
      .addCase(fetchTaskById.fulfilled, handleFulfilledTaskById)
      .addCase(updateTask.fulfilled, handleFulfilledUpdateTasks)
      .addCase(deleteTask.fulfilled, handleFulfilledDeleteTasks)
      .addMatcher((action) => action.type.endsWith("pending"), handlePending)
      .addMatcher((action) => action.type.endsWith("rejected"), handleRejected)
      .addMatcher(
        (action) => action.type.endsWith("fulfilled"),
        handleFulfilled
      );
  },
});
export const { addNewList } = taskSlice.actions;
export const taskReducer = taskSlice.reducer;
