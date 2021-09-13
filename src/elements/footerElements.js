import styled from "styled-components";
import theme from '../theme';

const FooterContainer = styled.footer`
   background: ${theme.mainColor};
`;

const FooterGrid = styled.section`
   display: grid;
   grid-template-columns: 40% 60%;
   article {padding: 60px;}
   .copyright__section {
      display: grid;
      align-content: center;
      color: #FFF;
      background: ${theme.secondaryColor};
      span {
         font-size: 1.875rem;
         font-weight: 500;
      }
      h2 {
         font-size: 3.75rem;
      }
      p {font-size: 1rem;}
   }
   .footer__info {
      display: grid;
      grid-template-columns: 60% 40%;
      gap: 1.875rem;
      color: #FFF;
      h3 {
         font-size: 1.25rem;
         font-weight: 700;
         margin-bottom: 0.625rem;
      }
      p {
         font-size: 1rem;
         font-weight: 300;
         line-height: 27px;
         margin-bottom: 1.25rem;
      }
      a {
         text-decoration: none;
         color: #FFF;
         font-weight: 500;
         &:hover {text-decoration: underline;}
      }
   }
   @media screen and (max-width: 768px) {
      grid-template-columns: 100%;
      .copyright__section {
         order: 1;
         place-items: center;
      }
   }
   
   @media screen and (max-width: 500px) {
      article {padding: 3.75rem 2.5rem;}
      .footer__info {
         grid-template-columns: 100%;
         p {font-size: 0.875rem;}
         a {font-size: 0.875rem;}
      }
      .copyright__section {
         text-align: center;
         span {
            font-size: 1.25rem;
         }
         h2 {
            font-size: 2.5rem;
         }
         p {margin-top: 0.625rem;}
      }
   }
`;

export {FooterContainer, FooterGrid};