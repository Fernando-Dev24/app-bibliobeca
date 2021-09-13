import React from 'react'
import {FooterContainer, FooterGrid} from '../elements/footerElements';

const Footer = () => {
   return (
      <FooterContainer>
         <FooterGrid>
            <article className="copyright__section">
               <div>
                  <span>{new Date().getFullYear()}</span>
                  <h2>Bibliobeca</h2>
                  <p>Todos los derechos reservados</p>
               </div>
            </article>
            <article className="footer__info">
               <div>
                  <h3>Recuerda:</h3>
                  <p>Este sitio web ha  investigado e intentado recabar toda la información de las universidad aquí presentadas. Toda la información ha sido obtenida de medio oficiales de las universidades. Si alguna institución considera pertinente remover información o cambio de la misma comunicarse al correo electronico: <a href="mailto:fernandodev.ortiz@gmail.com">fernandodev.ortiz@gmail.com</a>.</p>
                  
                  <p>De igual manera, este proyecto es abierto a colaborar en la busqueda de dicha información. Por favor, en caso de nuevos recursos contactarse al correo antes mencionado.</p>
               </div>
               <nav>
                  <h3>Enlaces</h3>
                  <a href="https://fernandoortiz.netlify.app">Fernando Ortiz</a>
               </nav>
            </article>
         </FooterGrid>
      </FooterContainer>
   );
}
 
export default React.memo(Footer);