import React from 'react';
import {
   HomeHeader,
   HomeHeaderContent,
   HomeSection,
   HomeTestimonial,
   LinkButton
} from '../elements/homeElements';
import Testimonial1 from '../images/testimonial_1.png';
import Testimonial2 from '../images/testimonial_2.png';
import Footer from '../components/Footer';

const Home = () => {
   return (
      <>
         <HomeHeader>
            <HomeHeaderContent>
               <h1>Bibliobeca {new Date().getFullYear()}</h1>
               <blockquote>
                  <p>“La educación es el arma más poderosa que puedes usar para cambiar el mundo” - <cite>Nelson Mandela</cite></p>
               </blockquote>
               <LinkButton to="/feed">Encuentra tu universidad</LinkButton>
            </HomeHeaderContent>
         </HomeHeader>

         <HomeSection className="container">
            <h2>¿Qué encontrarás?</h2>
            <section>
               <article>
                  <h3>05</h3>
                  <p>Universidades Nacionales para que puedas optar por la que más te combiene, que cumpla tus expectativas y alcanzes tu vida profesional de una manera sencilla y garantizada.</p>
               </article>

               <article>
                  <h3>04</h3>
                  <p>Organizaciones a nivel nacional que premian a los estudiantes con notas sobresalientes con becas a nivel nacional para seguir aprovechando tus habilidades en el mundo empresarial.</p>
               </article>
            </section>
         </HomeSection>
      
         <HomeTestimonial className="container">
            <h2>Testimonios</h2>
            <section>
               <article className="testimonial__card">
                  <article>
                     <img src={Testimonial1} loading="lazy" alt="testimonial-avatar" width="80" height="80" />
                     <div>
                        <h3>Mariano Rivas</h3>
                        <p>Fundación Frech - Abriendo Puertas</p>
                     </div>
                  </article>
                  <p className="testimonial__content">"Poder estudiar lo que te apasiona sin ningún inconveniente, es el regalo más gratificante en la vida, gracias a Fundación Frech conseguí este objetivo. Obtuve esta oportunidad gracias a mis excelentes resultados durante los 3 años en Supérate! Merlet, con relación al proceso no fue tan complicado, tenías que cumplir con ciertos requisitos y demostrar un practica de valores constante".</p>
                  <p className="testimonial__content">"Para poder conseguir este objetivo considero, que la constancia fue un factor importante, debido a que era la única manera en que podía llevar los 3 años, a su vez tratando de dar lo mejor de mí, aprovechando cada oportunidad".</p>
               </article>

               <article className="testimonial__card">
                  <article>
                     <img src={Testimonial2} loading="lazy" alt="testimonial-avatar" width="80" height="80" />
                     <div>
                        <h3>Kevin Durán</h3>
                        <p>Becas Fantel</p>
                     </div>
                  </article>
                  <p className="testimonial__content">"Mi primer consejo es que no olviden cuál es su meta y el motivo de su esfuerzo. Al entrar a la universidad van a venir momentos difíciles, horas de trabajo junto con el cansancio, y con ello, el pensamiento de querer rendirse; Pero, si ustedes tienen en mente el objetivo de todo su trabajo van a desarrollar sus evaluaciones, tareas, o proyectos de una manera diferente porque tienen ese motivo que los impulsa a dar más de lo que les exigen".</p>
                  <p className="testimonial__content">"Otro consejo es pedir ayuda. A veces nos resulta muy difícil pedir ayuda a los demás por miedo a qué dirán, pero estoy seguro que siempre habrá alguien dispuesto a darles la mano y ayudarlos a mejorar. Si bien es cierto que individualmente cada persona tiene sus propias habilidades, ayudarse entre sí les permitirá llegar mucho mas lejos , aprendiendo el uno del otro y haciendo la carga universitaria mas fácil".</p>
               </article>
            </section>
         </HomeTestimonial>
      
         <Footer />
      </>
   );
}
 
export default React.memo(Home);