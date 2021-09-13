import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from '../theme';

const InformationGrid = styled.section`
   display: grid;
   grid-template-columns: auto 80%;
   @media screen and (max-width: 768px) {
      grid-template-columns: 100%;
   }
`;

const InformationContact = styled.section`
   padding-top: 3.75rem;
   .contact__header {
      margin-bottom: 2.5rem;
      h4 {
         margin-bottom: 0.625rem;
         font-size: 1.5625rem;
         font-weight: 700;
         color: ${theme.mainColor};
      }
   }
   .contact__info {
      h4 {
         margin-bottom: 0.625rem;
         text-transform: uppercase;
         letter-spacing: .5px;
         font-size: 1rem;
         font-weight: 700;
         color: ${theme.mainColor};
         opacity: .8;
      }
      p {
         text-align: left;
         font-size: 1rem;
         font-weight: 400;
         line-height: 1.6875rem;
         color: ${theme.secondaryColor};
         strong, a {
            color: ${theme.mainColor};
         }
      }
   }
   @media screen and (max-width: 500px) {
      .contact__info {
         p {font-size: 14px;}
      }
   }
`;

const LinkButton = styled(Link)`
   display: inline-block;
   padding: 0.625rem 1.25rem;
   font-size: 1rem;
   font-weight: 600;
   border: 1px solid ${theme.mainColor};
   border-radius: 0.3125rem;
   text-decoration: none;
   color: ${theme.mainColor};
   transition: all .3s ease;
   &:hover {
      color: #FFF;
      background: ${theme.mainColor};
   }
   @media screen and (max-width: 768px) {
      color: #FFF;
      background: ${theme.mainColor};
   }
`;

const InformationContent = styled.section`
   padding: 3.75rem 4.375rem;
   .content__header {
      padding-bottom: 1.875rem;
      border-bottom: 1px solid rgba(60, 42, 115, .1);
      h2 {
         margin-bottom: 0.625rem;
         font-size: 2.5rem;
         font-weight: 700;
         color: ${theme.mainColor};
      }
      p {
         margin-bottom: 1.25rem;
         font-size: 1rem;
         font-weight: 600;
         color: ${theme.mainColor};
         opacity: .8;
         line-height: 1.6875rem;
      }
      .tag {
         padding: 0.625rem 1.25rem;
         font-size: 0.875rem;
         font-weight: 700;
         border-radius: 2.5rem;
         color: ${theme.mainColor};
         background: rgba(60, 42, 115, .2);
      }
   }
   .content__body {
      margin-top: 2.5rem;
      div {
         margin-bottom: 1.25rem;
         h3 {
            margin-bottom: 0.625rem;
            font-size: 1.25rem;
            font-weight: 600;
            color: ${theme.mainColor};
         }
         p {
            padding-bottom: 1.25rem;
            font-size: 1rem;
            font-weight: 300;
            line-height: 27px;
            color: ${theme.secondaryColor};
            &.region {
               position: relative;
               padding-bottom: 0;
               padding: 0.625rem 1.25rem;
               font-weight: 700;
               border-radius: 5px;
               color: ${theme.mainColor};
               background: ${theme.grayColor};
               &:after {
                  content: '';
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  width: 100%;
                  height: 5%;
                  max-height: 5%;
                  min-height: 5%;
                  background: ${theme.mainColor};
               }
            }
         }
         ul {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.875rem;
            list-style: none;
            margin-bottom: 2.5rem;
            li {
               position: relative;
               padding: 1.25rem;
               font-size: 1rem;
               font-weight: 700;
               border-radius: 5px;
               color: ${theme.mainColor};
               background: #F2F2F2;
               transition: all .3s ease;
               &:after {
                  content: "";
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  width: 100%;
                  height: 5%;
                  max-height: 5%;
                  min-height: 5%;
                  background: ${theme.mainColor};
               }
            }
         }
      }
   }
   @media screen and (max-width: 768px) {
      padding: 3.75rem 0;
      .content__body {
         div {
            ul {
               grid-template-columns: repeat(2, 1fr);
            }
         }
      }
   }
   @media screen and (max-width: 500px) {
      .content__header {
         padding-bottom: 2.5rem;
         h2 {font-size: 1.875rem; margin-bottom: 1.25rem;}
         p {font-size: 0.875rem;}
         .tag {display: inline-block;}
      }
      .content__body {
         div {
            p {font-size: 0.875rem;}
            ul {
               grid-template-columns: 1fr;
               li {font-size: 0.875rem;}
            }
         }
      }
   }
`;

export {InformationGrid, InformationContact, InformationContent, LinkButton};