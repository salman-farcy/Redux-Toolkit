import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { MdDeleteForever } from "react-icons/md";
import { removeUser } from "../store/slieces/UserSlice";



const DisplayUsers = () => {
     const dispatch = useDispatch();

     const data = useSelector((state) => {
          return state.users;
     })

     const deleteUser = (id) => {
          dispatch(removeUser(id))
     }
 
     return (
          <Wrapper>
               {
                    data.map((user, id) => (
                         <li key={id}>
                              {user}
                              <button onClick={() => deleteUser(id)}>
                                   <MdDeleteForever className="delete-icon"/>
                              </button>
                         </li>
                    ))
               }
          </Wrapper>
     );
};

const Wrapper = styled.section`
//   margin: 1rem 0 1rem  0;

  li {
     text-align: left;
     margin: 2rem 0 2rem  0;
     display: flex;
     justify-content:space-between;
     align-items: center;
  }
`;


export default DisplayUsers;