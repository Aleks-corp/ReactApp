import styled from "styled-components";

export const TasksListContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 28px;
  align-items: center;
  overflow-x: hidden;
`;

export const TasksLists = styled.ul`
  display: flex;
  overflow-x: auto;
  gap: 24px;
`;

export const TasksListsItem = styled.li`
  width: 240px;
`;

export const TasksListsItemText = styled.p`
  padding: 6px 0;
  border-top: 2px solid #99999990;
  border-bottom: 2px solid #99999990;
  border-radius: 2px;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const TasksListsAddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 0;
  border: 1px dashed #80808080;
  border-radius: 5px;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const TasksListsIconWrapper = styled.span`
  margin-right: 5px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const TaskList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const TaskListItem = styled.li`
  border: 1px solid #80808080;
  border-radius: 5px;
  width: 100%;
  padding: 12px 8px;
`;
