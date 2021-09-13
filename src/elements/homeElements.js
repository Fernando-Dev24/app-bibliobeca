import styled from 'styled-components';
import {Link} from 'react-router-dom';
import background from '../images/bibliobeca_bg.jpg';
import theme from '../theme';

/* Header Styles */
const HomeHeader = styled.header`
   width: 100%;
   height: 100vh;
   display: grid;
   place-items: center;
   background: url('${background}') no-repeat top;
   background-size: cover;
   background-attachment: fixed;
`;

const HomeHeaderContent = styled.section`
   color: #FFF;
   h1 {
      font-size: 5rem;
      font-weight: 0.625rem;
   }
   p {
      font-size: 1.25rem;
      font-weight: 400;
      font-style: italic;
      margin-bottom: 3.75rem;
      cite {
         font-weight: 500;
         font-style: normal;
      }
   }
   @media screen and (max-width: 768px) {
      width: 90%;
      max-width: 90%;
      margin: 0 auto;
      text-align: center;
   }

   @media screen and (max-width: 500px) {
      h1 {font-size: 2.5rem;}
      p {
         font-size: 1rem;
         margin-top: 0.625rem;
      }
   }
`;

const LinkButton = styled(Link)`
   padding: 1.5rem 2rem;
   text-decoration: none;
   font-weight: 700;
   border: 2px solid #FFF;
   border-radius: 10px;
   color: #FFF;
   transition: all .3s ease;
   &:hover {
      border-color: ${theme.mainColor};
      background: ${theme.mainColor};
   }
   @media screen and (max-width: 768px) {
      border: none;
      color: #FFF;
      background: ${theme.mainColor};
   }
`;

/* Content Styles */
const HomeSection = styled.section`
   margin: 8.75rem auto;
   h2 {
      margin-bottom: 1.875rem;
      text-align: left;
      font-size: 2.5rem;
      font-weight: 700;
      color: ${theme.mainColor};
   }
   section {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.25rem;
      article {
         padding: 2.5rem;
         border-radius: 20px;
         color: #FFF;
         background: ${theme.mainColor};
         transition: all .3s ease;
         &:hover {
            box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);
         }
         h3 {
            font-size: 5rem;
            font-weight: 700;
            margin-bottom: 1.25rem;
         }
         p {
            font-size: 1rem;
            font-weight: 300;
            line-height: 1.6875rem;
         }
      }
   }
   @media screen and (max-width: 768px) {
      section {grid-template-columns: 1fr;}
   }

   @media screen and (max-width: 500px) {
      h2 {
         text-align: center;
         font-size: 1.875rem;
      }
      section {
         article {
            h3 {
               font-size: 3.125rem;
               margin-bottom: 1.25rem;
            }
            p {
               font-size: 0.875rem;
            }
         }
      }
   }
`;

/* Testimonials Section */
const HomeTestimonial = styled.section`
   margin-bottom: 8.75rem;
   h2 {
      margin-bottom: 1.875rem;
      text-align: left;
      font-size: 2.5rem;
      font-weight: 700;
      color: ${theme.mainColor};
   }
   section {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.25rem;
      .testimonial__card {
         padding: 2.5rem;
         border-radius: 20px;
         background: ${theme.grayColor};
         article {
            margin-bottom: 2.5rem;
            display: flex;
            align-items: center;
            img {
               margin-right: 1.25rem;
               width: auto;
               height: auto;
               border: 2px solid ${theme.mainColor};
               border-radius: 50%;
            }
            h3 {
               margin-bottom: 0.3125rem;
               font-size: 1.25rem;
               font-weight: 700;
               color: ${theme.mainColor};
            }
         }
         .testimonial__content {
            margin-bottom: 1.25rem;
            font-size: 1rem;
            font-weight: 300;
            line-height: 1.6875rem;
         }
      }
   }
   @media screen and (max-width: 768px) {
      section {grid-template-columns: 1fr;}
   }

   @media screen and (max-width: 500px) {
      h2 {
         text-align: center;
         font-size: 1.875rem;
      }
      section {
         .testimonial__card {
            article {
               flex-direction: column;
               justify-content: flex-start;
               align-items: flex-start;
               img {
                  margin-right: 0;
                  margin-bottom: 0.625rem;
                  width: 30%;
                  max-width: 30%;
               }
               p {
                  font-size: 0.875rem;
               }
            }
            .testimonial__content {
               font-size: 0.875rem;
            }
         }
      }
   }
`;

export {HomeHeader, HomeHeaderContent, HomeSection, HomeTestimonial, LinkButton};