import { useSelector } from "react-redux";
import styled from "styled-components";



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
  }
`;


export default DisplayUsers;