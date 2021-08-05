import { Link } from 'react-router-dom';

//SVG
import {ReactComponent as ReactHero} from '../svgs/hero.svg';

import {ReactComponent as Pesa} from '../svgs/pesa.svg';
import {ReactComponent as Hielo} from '../svgs/hielo.svg';
import {ReactComponent as Pregunta} from '../svgs/pregunta.svg';

//React AOS 
import AOS from "aos";
AOS.init({duration: 1000, easing: "ease-in-out"});

function Inicio() {

  return (
    <>
      <section>
        <article className="inicio-hero" data-aos="fade-up" data-aos-duration="1250">
          <ReactHero className="inicio-hero__svg" /> 
          <h1 className="inicio-hero__h1">Terapia Física</h1>
        </article>
      </section>

      <section className="inicio-infos">

        <article className="inicio-info inicio-info--mobile" data-aos="fade-left">
          <div className="inicio-info__desc">
            <h2>¿Qué es Terapia Física?</h2>
            <p className="inicio-info__p">Es un servicio que busca desarrollar, mantener y restaurar al máximo la movilidad y capacidad 
            funcional de la vida del paciente.
            <br />
            <br /> 
            Se abarca el bienestar físico, psicológico, emocional y social</p>
            <a className="cita__a" href="https://world.physio/sites/default/files/2021-05/PS-2019-Description-of-PT-Spanish_0.pdf" target="_blank" rel="noreferrer">(World Physiotherapy, 2019)</a>
          </div>

          <div className="inicio-info__img">
            <Pesa className="inicio-info__svg" />
          </div>
        </article>

        <article className="inicio-info inicio-info--mobile" data-aos="fade-right">
          <div className="inicio-info__img">
            <Hielo className="inicio-info__svg" />
          </div>

          <div className="inicio-info__desc">
            <h2>¿Cómo se realiza la Terapia Física?</h2>
            <p className="inicio-info__p">Desde la Terapia Física se promueve un estilo de vida saludable mediante el ejercicio.</p>
            <a className="cita__a" href="https://world.physio/es/what-we-do/advocacy/physical-activity" target="_blank" rel="noreferrer">(World Physiotherapy, s.f)</a> 
            <p className="inicio-info__p--esp">Pero además se realizan intervenciones de rehabilitación utilizando los siguientes métodos físicos:</p>
            <div className="inicio-info__div">
              <ul className="inicio-info__ul">
                <li>Tracción</li>
                <li>Compresión</li>
                <li>Hidroterapia</li>
                <li>Electroestimulación</li>
              </ul>
              <ul className="inicio-info__ul">
                <li>Crioterapia (Frío)</li>
                <li>Termoterapia (Calor)</li>
                <li>Ultrasonido</li>
                <li>Radiación IR</li>
              </ul>
            </div>
            <p className="inicio-info__p--esp">(Cameron, M., 2014, pp. 1-3) 
            <Link className="cita__a" to="/referencias">(Ver Referencias)</Link></p> 
          </div>
        </article>

        <article className="inicio-info inicio-info--mobile" data-aos="fade-left">
        <div className="inicio-info__desc">
            <h2>¿Por qué Terapia Física?</h2>
            <p className="inicio-info__p">La Terapia Física es una carrera que une el estudio de las ciencias de la salud con 
            la ayuda a la comunidad para generar un cambio significativo en la calidad de vida de las personas. 
            Para esta carrera es fundamental la investigación científica, habilidad motora, trabajo en equipo y sensibilidad social.
            </p>
            <a className="cita__a" href="http://orientacion.ucr.ac.cr/wp-content/uploads/2018/07/TerapiaFisica.pdf" target="_blank" rel="noreferrer">(Universidad de Costa Rica, 2018)</a>
          </div>

          <div className="inicio-info__img">
            <Pregunta className="inicio-info__svg" />
          </div>
        </article>
      </section>
    </>
  );
}

export default Inicio;

