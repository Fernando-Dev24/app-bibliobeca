import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import theme from '../theme';

const Error404 = () => {
   return (
      <MessageContainer className="container">
         <Message>
            <h2>Error 404</h2>
            <p>La página que buscabas no se encuentra...</p>
            <LinkButton to="/">Volver al inicio</LinkButton>
         </Message>
      </MessageContainer>
   );
}

const MessageContainer = styled.section`
   width: 100%;
   height: 100vh;
   display: grid;
   place-items: center;
`;

const Message = styled.article`
   width: 60%;
   padding: 3.75rem;
   border-radius: 20px;
   background: #FFF;
   box-shadow: 0px 24px 32px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);
   h2 {
      margin-bottom: 0.3125rem;
      font-size: 2.5rem;
      color: ${theme.mainColor};
   }
   p {
      margin-bottom: 1.875rem;
      font-size: 1.25rem;
      color: ${theme.secondaryColor};
   }
   @media screen and (max-width: 768px) {
      width: 90%;
      padding: 3.75rem 2.5rem;
      text-align: center;
      h2 {
         font-size: 1.875rem;
      }
      p {font-size: 1rem;}
   }
`;

const LinkButton = styled(Link)`
   display: inline-block;
   padding: 0.625rem 1.25rem;
   text-decoration: none;
   font-weight: 600;
   border: 1px solid ${theme.mainColor};
   border-radius: 5px;
   transition: all .3s ease;
   &:hover {
      color: #FFF;
      background: ${theme.mainColor};
   }
`;

export default React.memo(Error404);