import { useState } from "react";
import { GetTask } from "../../types/tasks";
import MySelect from "../ReactSelect/MySelect";
import { customSelectStyles } from "../TaskItem/selectStyles";
import {
  AddTaskBtn,
  AddTaskContainer,
  SelectBox,
  TaskInput,
  TaskText,
  TaskTextArea,
  TaskTextBox,
  TaskTitle,
} from "./Modal.styled";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { updateTask } from "../../redux/task/thunk";
import { closeModal } from "../../redux/modal/modalSlice";
import { selectListOfTasks } from "../../redux/selectors";

interface Task {
  task: GetTask;
}

function TaskEditModal({ task }: Task) {
  const dispatch = useAppDispatch();
  const lists = useAppSelector(selectListOfTasks);
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority);
  const [list, setList] = useState(task.taskList);

  const selectOptionsList = lists.map((item) => ({ value: item, label: item }));

  const selectOptions = [
    { label: "low", value: "low" },
    {
      label: "medium",
      value: "medium",
    },
    {
      label: "high",
      value: "high",
    },
  ];
  function sendTask() {
    if (name && description && priority && list) {
      dispatch(
        updateTask({
          id: task.id,
          name,
          description,
          priority,
          taskList: list,
        })
      );
      dispatch(closeModal());
    }
  }

  return (
    <AddTaskContainer>
      <TaskTitle>Edit Task</TaskTitle>
      <TaskTextBox>
        <TaskText>Task name:</TaskText>
        <TaskInput
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </TaskTextBox>
      <TaskTextBox>
        <TaskText>Description:</TaskText>
        <TaskTextArea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </TaskTextBox>
      <TaskTextBox>
        <TaskText>Priority:</TaskText>
        <SelectBox>
          <MySelect
            name="priority"
            defaultValue={selectOptions.filter(
              (item) => item.value === priority
            )}
            options={selectOptions}
            styles={customSelectStyles}
            onChange={(selectedOption) => {
              selectedOption && setPriority(selectedOption.value);
            }}
          />
        </SelectBox>
      </TaskTextBox>
      <TaskTextBox>
        <TaskText>List:</TaskText>
        <SelectBox>
          <MySelect
            name="list"
            defaultValue={selectOptionsList.filter(
              (item) => item.value === list
            )}
            options={selectOptionsList}
            styles={customSelectStyles}
            onChange={(selectedOption) => {
              selectedOption && setList(selectedOption.value);
            }}
          />
        </SelectBox>
      </TaskTextBox>
      <AddTaskBtn type="button" onClick={() => sendTask()}>
        Save
      </AddTaskBtn>
    </AddTaskContainer>
  );
}
export default TaskEditModal;
