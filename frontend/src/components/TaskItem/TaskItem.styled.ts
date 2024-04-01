import styled from "styled-components";

export const TaskContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const TaskNameContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 6px 0;
  justify-content: space-between;
  align-items: center;
`;

export const TaskName = styled.p`
  font-weight: 600;
`;

export const TaskDesc = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: #909090;
  margin-bottom: 12px;
`;

export const TaskDateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const TaskDate = styled.p`
  font-weight: 500;
  color: #909090;
  margin-left: 6px;
`;

export const TaskPriorityWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 25px;
  background-color: #516a7a30;
  margin-bottom: 12px;
`;

export const TaskPriority = styled.p`
  display: inline-block;
  margin-left: 4px;
  font-weight: 500;
  color: #606060;
`;
