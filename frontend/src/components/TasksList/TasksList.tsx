import { useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import { fetchTasks } from "../../redux/task/thunk";
import { selectListOfTasks, selectTasks } from "../../redux/selectors";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import TaskItem from "../TaskItem/TaskItem";
import { GetTask } from "../../types/tasks";
import {
  TasksLists,
  TasksListContainer,
  TasksListsItem,
  TasksListsItemText,
  TasksListsAddButton,
  TasksListsIconWrapper,
  TaskList,
  TaskListItem,
} from "./TasksList.styled";
import { openModal } from "../../redux/modal/modalSlice";
import AddNewCardModal from "../Modal/AddNewCardModal";

function TasksList() {
  const filterTaskByList = (tasks: GetTask[], listName: string): GetTask[] => {
    return tasks.filter((item) => item.taskList === listName);
  };
  const tasks = useAppSelector(selectTasks);
  const list = useAppSelector(selectListOfTasks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      {list.length !== 0 && (
        <TasksListContainer>
          <TasksLists>
            {list.map((item, index) => (
              <TasksListsItem key={index}>
                <TasksListsItemText>{item}</TasksListsItemText>
                <TasksListsAddButton
                  type="button"
                  onClick={() =>
                    dispatch(openModal(<AddNewCardModal list={item} />))
                  }
                >
                  <TasksListsIconWrapper>
                    <FiPlus width={24} />
                  </TasksListsIconWrapper>
                  Add new card
                </TasksListsAddButton>
                <TaskList>
                  {filterTaskByList(tasks, item).map((task) => (
                    <TaskListItem key={task.id}>
                      <TaskItem item={task} list={list} />
                    </TaskListItem>
                  ))}
                </TaskList>
              </TasksListsItem>
            ))}
          </TasksLists>
        </TasksListContainer>
      )}
    </>
  );
}
export default TasksList;
