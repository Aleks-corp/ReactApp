import {
  HeaderContainer,
  HeaderName,
  HeaderButton,
  ButtonContainer,
  HeaderButtonText,
} from "./Header.styled";
import { FiPlus } from "react-icons/fi";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { openModal } from "../../redux/modal/modalSlice";
import AddListModal from "../Modal/AddListModal";
import { useAppDispatch } from "../../redux/hooks";

function Header() {
  const dispatch = useAppDispatch();
  return (
    <HeaderContainer>
      <HeaderName>My Task Board</HeaderName>
      <ButtonContainer>
        <HeaderButton type="button">
          <FaArrowRotateLeft width={24} />

          <HeaderButtonText>History</HeaderButtonText>
        </HeaderButton>
        <HeaderButton
          color="dark"
          type="button"
          onClick={() => dispatch(openModal(<AddListModal />))}
        >
          <FiPlus width={24} />

          <HeaderButtonText>Create new list</HeaderButtonText>
        </HeaderButton>
      </ButtonContainer>
    </HeaderContainer>
  );
}
export default Header;
