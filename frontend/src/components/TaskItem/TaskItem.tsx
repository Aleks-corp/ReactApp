import { FiMoreVertical } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { format } from "date-fns";
import {
  TaskNameContainer,
  TaskName,
  TaskDesc,
  TaskDate,
  TaskDateWrapper,
  TaskPriority,
  TaskPriorityWrapper,
  TaskContainer,
} from "./TaskItem.styled";
import { OptionType, TaskItemProps } from "../../types/task-item";
import { PriorityColor } from "../../constants/constants";
import { customSelectStyles } from "./selectStyles";
import { updateTask } from "../../redux/task/thunk";
import { useAppDispatch } from "../../redux/hooks";
import { useState } from "react";
import MySelect from "../ReactSelect/MySelect";
import TaskEditContainer from "../TaskEditContainer/TaskEditContainer";

function TaskItem({ item, list }: TaskItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const selectOptions: OptionType[] = list.map((item: string) => ({
    value: item,
    label: item,
  }));

  return (
    <TaskContainer>
      {isOpen && (
        <TaskEditContainer task={item} close={() => setIsOpen(false)} />
      )}
      <TaskNameContainer>
        <TaskName>{item.name}</TaskName>
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          <FiMoreVertical />
        </button>
      </TaskNameContainer>
      <TaskDesc>{item.description}</TaskDesc>
      <TaskDateWrapper>
        <FiCalendar size={18} />
        <TaskDate>{format(new Date(item.created_at), "EEE, dd MMM")}</TaskDate>
      </TaskDateWrapper>
      <TaskPriorityWrapper>
        <GoDotFill
          color={
            item.priority === "low"
              ? PriorityColor.low
              : item.priority === "high"
                ? PriorityColor.high
                : PriorityColor.medium
          }
        />
        <TaskPriority>{item.priority}</TaskPriority>
      </TaskPriorityWrapper>
      <MySelect
        name="taskList"
        placeholder="Move to:"
        options={selectOptions}
        styles={customSelectStyles}
        menuPosition={"absolute"}
        menuPlacement={"top"}
        onChange={(selectedOption) => {
          if (selectedOption && item.taskList !== selectedOption.value) {
            const taskIdToUpdate = {
              id: item.id,
              taskList: selectedOption.value,
            };
            dispatch(updateTask(taskIdToUpdate));
          }
        }}
      />
    </TaskContainer>
  );
}
export default TaskItem;
