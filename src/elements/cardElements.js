import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../theme';

/* Styles */
const CardContainer = styled.article`
   position: relative;
   margin-bottom: 3.125rem;
   padding: 2.5rem;
   border-radius: 20px;
   background: #FFF;
   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.04);
   h3 {
      margin-bottom: 0.625rem;
      font-size: 1.875rem;
      font-weight: 700;
      color: ${theme.mainColor};
   }
   p {
      margin-bottom: 1.25rem;
      font-size: 1rem;
      font-weight: 600;
      line-height: 1.5625rem;
      color: rgba(60, 42, 115, .8);
   }
   .tag {
      padding: 0.625rem 1.25rem;
      font-size: 0.875rem;
      font-weight: 700;
      border-radius: 2.5rem;
      color: ${theme.mainColor};
      background: rgba(60, 42, 115, .2);
   }
   @media screen and (max-width: 500px) {
      h3 {
         font-size: 1.25rem;
         margin-bottom: 1.25rem;
      }
      p {
         font-size: 0.875rem;
         margin-bottom: 1.25rem;
      }
      .tag {
         display: inline-block;
         margin-bottom: 3.75rem;
      }
   }
`;

const LinkButton = styled(Link)`
   position: absolute;
   bottom: 0;
   right: 0;
   display: block;
   padding: 1.25rem 2.5rem;
   font-size: 1rem;
   font-weight: 700;
   text-decoration: none;
   border-radius: 20px 0 20px 0;
   color: #FFF;
   background: ${theme.mainColor};
   transition: all .3s ease;
   &:hover {
      opacity: 0.9;
   }
   @media screen and (max-width: 500px) {
      width: 100%;
      text-align: center;
      border-radius: 0 0 20px 20px;
   }
`;

export {CardContainer, LinkButton};