import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteUsers } from "../store/slieces/UserSlice";

export const DeleteAllUser = () => {
  const dispatch = useDispatch()
  const deleteClerUsers = () => {
    dispatch(deleteUsers())
  }

  return <Wrapper>
    <button onClick={deleteClerUsers} className="btn clear-btn">Clear All Button</button>
  </Wrapper>
};

const Wrapper = styled.section`
.clear-btn{
  text-transform: capitalize;
  background-color: #db338a;
}
`