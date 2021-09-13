import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import {FeedHeader, FeedContent, FeedNav, FeedIcon, FeedCards} from '../elements/feedElements.js';
import {CardContainer, LinkButton} from '../elements/cardElements';
import Footer from './Footer';
import theme from '../theme';
import { useGetData } from '../contexts/GetDataContext.js';

const Feed = () => {
   const {universities, fundations} = useGetData();
   const [showData, setShowData] = useState(true);
   const [uniSelected, setUniSelected] = useState(true);
   const [fundSelected, setFundSelect] = useState(false);

   /* Handle State function */
   const handleState = (e) => {
      if(e.target.innerText === 'Universidades') {
         setFundSelect(false);
         setUniSelected(true);
         setShowData(true);
      } else {
         setUniSelected(false);
         setFundSelect(true);
         setShowData(false);
      }
   }

   const handleClick = (e) => {
      const storage = window.localStorage;
      storage.setItem('showData', JSON.stringify(showData));
   }

   return (
      <FeedBody>
         <Helmet>
            <title>Bibliobeca | Feed</title>
         </Helmet>

         <FeedHeader>
            <section className="container">
               <BackButton to="/">Volver</BackButton>
               <h2>Bibliobeca {new Date().getFullYear()}</h2>
               <p>
                  Recuerda que, las siguientes universidades, fundaciones, son sólo con fines a ayudarte a encontrar la universidad que mejor se adapte a tus necesidades. Estas sólo son las universidades más destacadas del país.
               </p>
            </section>
         </FeedHeader>

         <FeedContent>
            <section className="container">
               <FeedNav>
                  <h4>Filtrar por:</h4>
                  <nav>
                     <button onClick={handleState}>
                        {uniSelected ? 
                           <FeedIcon selected icon={faCheck}/>
                           :
                           <FeedIcon icon={faCheck}/>
                        }
                        Universidades
                     </button>
                     <button onClick={handleState}>
                        {fundSelected ? 
                           <FeedIcon selected icon={faCheck}/>
                           :
                           <FeedIcon icon={faCheck}/>
                        }
                        Fundaciones
                     </button>
                  </nav>
               </FeedNav>
               <FeedCards>
                  {showData ? 
                     universities.map((university) => {
                        return (
                           <CardContainer key={university.id}>
                              <h3>{university.name}</h3>
                              <p>{university.contact[0]}</p>
                              <span className="tag">{university.tag}</span>
                              <LinkButton onClick={handleClick} to={`/info/${university.index}`}>Ver más</LinkButton>
                           </CardContainer>
                        )
                     })
                     :
                     fundations.map((fundation) => {
                        return (
                           <CardContainer key={fundation.id}>
                              <h3>{fundation.name}</h3>
                              <p>{fundation.contact[0]}</p>
                              <span className="tag">{fundation.tag}</span>
                              <LinkButton onClick={handleClick} to={`/info/${fundation.index}`}>Ver más</LinkButton>
                           </CardContainer>
                        )
                     })
                  }
               </FeedCards>
            </section>
         </FeedContent>

         <Footer />
      </FeedBody>
   );
}

const FeedBody = styled.section`
   background: #F2F2F2;
`;

const BackButton = styled(Link)`
   display: inline-block;
   margin-bottom: 1.25rem;
   padding: 0.625rem 1.25rem;
   font-size: 1rem;
   font-weight: 600;
   text-decoration: none;
   border: 1px solid #FFF;
   border-radius: 5px;
   color: #FFF;
   transition: all .3s ease;
   &:hover {
      color: ${theme.mainColor};
      background: #FFF;
   }
   @media screen and (max-width: 768px) {
      color: ${theme.mainColor};
      background: #FFF;
   }
`;
 
export default React.memo(Feed);