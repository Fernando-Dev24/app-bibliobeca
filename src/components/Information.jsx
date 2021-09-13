import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router';
import { InformationGrid, InformationContact, InformationContent, LinkButton} from '../elements/InformationElements';
import Footer from './Footer';
import Warning from '../elements/warningElements';

const Information = ({universities, fundations}) => {
   window.scroll(0, 0);
   const {id} = useParams();
   const showDataValue = JSON.parse(window.localStorage.getItem('showData'));

   return (
      <>
         <Helmet>
            <title>Bibliobeca | Información</title>
         </Helmet>

         {showDataValue ? 
            <>
               <InformationGrid className="container">
                  <InformationContact>
                     <article className="contact__header">
                        <h4>Bibliobeca {new Date().getFullYear()}</h4>
                        <LinkButton to="/feed">Volver</LinkButton>
                     </article>
                     <article className="contact__info">
                        <h4>¿Cómo aplicar?</h4>
                        <p>Para aplicar a <strong>{universities[id].name}</strong> contactaté con ellos, escribiendolés al correo <a href={`mailto:${universities[id].contact[1]}`}>{universities[id].contact[1]}</a>, o llamando al <strong>{universities[id].contact[2]}</strong>.</p>
                     </article>
                  </InformationContact>
                  <InformationContent>
                     <article className="content__header">
                        <h2>{universities[id].name}</h2>
                        <p>{universities[id].contact[0]}</p>
                        <span className="tag">{universities[id].tag}</span>
                     </article>
                     <article className="content__body">
                        <div>
                           <h3>Más información</h3>
                           <p>{universities[id].general}</p>
                        </div>
                        <div>
                           <h3>Carreras</h3>
                           <ul>
                              {universities[id].careers.map((career, index) => {
                                 return <li key={index}>{career}</li>
                              })}
                           </ul>
                        </div>
                        <div>
                           <h3>Misión y Visión</h3>
                           <p>{universities[id].mission}</p>
                           <p>{universities[id].vission}</p>
                        </div>
                        <div>
                           <h3>Más allá de la Universidad</h3>
                           <ul>
                              {universities[id].activities.map((activity, index) => {
                                 return <li key={index}>{activity}</li>
                              })}
                           </ul>
                        </div>
                        <div>
                           <h3>Ubicación</h3>
                           <p>{universities[id].contact[0]}</p>
                        </div>
                     </article>
                  </InformationContent>
               </InformationGrid>
            </>
            :
            <>
               <InformationGrid className="container">
                  <InformationContact>
                     <article className="contact__header">
                        <h4>Bibliobeca {new Date().getFullYear()}</h4>
                        <LinkButton to="/feed">Volver</LinkButton>
                     </article>
                     <article className="contact__info">
                        <h4>¿Cómo aplicar?</h4>
                        <p>Para aplicar a <strong>{fundations[id].name}</strong> contactaté con ellos, escribiendolés al correo <a href={`mailto:${fundations[id].contact[2]}`}>{fundations[id].contact[2]}</a>, o llamando al <strong>{fundations[id].contact[1]}</strong>.</p>
                     </article>
                  </InformationContact>
                  <InformationContent>
                     <article className="content__header">
                        <h2>{fundations[id].name}</h2>
                        <p>{fundations[id].contact[0]}</p>
                        <span className="tag">{fundations[id].tag}</span>
                     </article>
                     <article className="content__body">
                        {id === '0' &&
                           <Warning>
                              <p>El programa de becas {fundations[id].name} únicamente se encuentra disponible para aquellos estudiantes pertenecientes al <a href="https://www.superate.org.sv/centro-superate-merlet-2/">Centro ¡Supérate! Merlet</a>.</p>
                           </Warning>
                        }
                        <div>
                           <h3>Más información</h3>
                           <p>{fundations[id].general}</p>
                        </div>
                        <div>
                           <h3>Misión y Visión</h3>
                           <p>{fundations[id].mission}</p>
                           <p>{fundations[id].vission}</p>
                        </div>
                        <div>
                           <h3>Cobertura:</h3>
                           <p className="region">{fundations[id].region}</p>
                        </div>
                        <div>
                           <h3>Ubicación</h3>
                           <p>{fundations[id].contact[0]}</p>
                        </div>
                     </article>
                  </InformationContent>
               </InformationGrid>
            </>
         }
         <Footer/>
      </>
   );
}
 
export default React.memo(Information);