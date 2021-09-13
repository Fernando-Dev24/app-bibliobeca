import styled from "styled-components";
import theme from '../theme';

const Warning = styled.div`
   padding: 1.25rem;
   border-radius: 10px;
   background: ${theme.mainColor};
   p {
      padding-bottom: 0 !important;
      color: #FFF !important;
      font-weight: 500 !important;
      font-size: 1rem;
      a {
         color: #FFF;
      }
   }
`;

export default Warning;