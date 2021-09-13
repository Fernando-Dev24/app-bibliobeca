import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from '../theme';

const FeedHeader = styled.header`
   padding: 2.5rem 0;
   background: ${theme.mainColor};
   section {
      color: #FFF;
      h2 {
         font-size: 3.75rem;
         font-weight: 700;
         margin-bottom: 0.625rem;
      }
      p {
         font-size: 1rem;
         font-weight: 400;
         line-height: 1.6875rem;
      }
   }
   @media screen and (max-width: 500px) {
      section {
         h2 {font-size: 1.875rem;}
         p {font-size: 0.875rem;}
      }
   }
`;

const FeedContent = styled.section`
   padding: 3.75rem 0;
   section {
      display: grid;
      grid-template-columns: 30% 70%;
   }
   @media screen and (max-width: 768px) {
      section {
         grid-template-columns: 100%;
      }
   }
`;

/* Feed Nav styles */
const FeedNav = styled.article`
   h4 {
      margin-bottom: 2.5rem;
      font-size: 1.875rem;
      font-weight: 700;
      color: ${theme.secondaryColor};
   }
   nav {
      button {
         display: flex;
         align-items: center;
         margin-bottom: 1.875rem;
         font-size: 1rem;
         font-weight: 600;
         color: ${theme.mainColor};
         background: transparent;
         border: none;
         cursor: pointer;
         transition: all .3s ease;
      }
   }
   @media screen and (max-width: 500px) {
      margin-bottom: 1.875rem;
      h4 {
         font-size: 1.875rem;
         margin-bottom: 1.25rem;
      }
      nav {
         button {
            margin-bottom: 1.875rem;
            font-size: 0.875rem;
         }
      }
   }
`;

const FeedIcon = styled(FontAwesomeIcon)`
   margin-right: 0.625rem;
   padding: 0.625rem;
   font-size: 2.5rem;
   border: 1px solid ${theme.mainColor};
   border-radius: 50%;
   color: ${props => props.selected ? '#FFF' : '#3C2A73'};
   background: ${props => props.selected ? '#3C2A73' : 'transparent'};
   @media screen and (max-width: 500px) {
      padding: 0.5rem;
      font-size: 1.875rem;
   }
`;

/* Feed Cards styles */
const FeedCards = styled.article`
   width: 100%;
`;

export {FeedHeader, FeedContent, FeedNav, FeedIcon, FeedCards};