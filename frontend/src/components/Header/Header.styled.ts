import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 28px;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderName = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

export const HeaderButton = styled.button`
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #21212170;
  padding: 8px 16px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ color }) => (color === "dark" ? `#e1e1e1` : `#242424`)};
  background-color: ${({ color }) =>
    color === "dark" ? `#3b4756` : `#e1e1e1`};
`;
export const HeaderButtonText = styled.p`
  margin-left: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;
