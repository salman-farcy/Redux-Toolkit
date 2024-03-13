import { useSelector } from "react-redux";
import styled from "styled-components";
import { MdDeleteForever } from "react-icons/md";



const DisplayUsers = () => {
     const data = useSelector((state) => {
          return state.users;
     })
     console.log(data);

     return (
          <Wrapper>
               {
                    data.map((user, id) => (
                         <li key={id}>
                              {user}
                              <button className="btn btn-delete">
                                   <MdDeleteForever />
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