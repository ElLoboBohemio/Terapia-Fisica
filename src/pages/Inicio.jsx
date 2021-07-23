//SVG
import {ReactComponent as ReactHero} from '../svgs/hero.svg';

import {ReactComponent as Pesa} from '../svgs/pesa.svg';
import {ReactComponent as Hielo} from '../svgs/hielo.svg';
import {ReactComponent as Pregunta} from '../svgs/pregunta.svg';


function Inicio() {

  return (
    <>
      <section>
        <article className="hero">
          <ReactHero className="hero__svg" /> 
          <h1 className="hero__h1">Terapia Física</h1>
        </article>
      </section>

      <section className="infos">
        <article className="info info--mobile">
          <div className="info__desc">
            <h2>¿Qué es Terapia Física?</h2>
            <p className="info__p">Es un servicio que busca desarrollar, mantener y restaurar al máximo la movilidad y capacidad 
            funcional de la vida del paciente.<br /> <br /> Se abarca el bienestar físico, psicológico, emocional y social</p>
            <a className="info__a" href="https://world.physio/sites/default/files/2021-05/PS-2019-Description-of-PT-Spanish_0.pdf" target="_blank" rel="noreferrer">(World Physiotherapy, 2019)</a>
          </div>

          <div className="info__img">
            <Pesa className="info__svg" />
          </div>
        </article>

        <article className="info info--mobile">
          <div className="info__img">
            <Hielo className="info__svg" />
          </div>

          <div className="info__desc">
            <h2>¿Cómo se realiza la Terapia Física?</h2>
            <p className="info__p">Desde la Terapia Física se promueve un estilo de vida saludable meduante el ejercicio.</p>
            <a className="info__a" href="https://world.physio/es/what-we-do/advocacy/physical-activity" target="_blank" rel="noreferrer">(World Physiotherapy, s.f)</a> 
            <p className="info__p--esp">Pero además se realizan intervenciones de rehabilitación utilizando los siguientes métodos físicos:</p>
            <div className="info__div">
              <ul className="info__ul">
                <li>Tracción</li>
                <li>Compresión</li>
                <li>Hidroterapia</li>
                <li>Electroestimulación</li>
              </ul>
              <ul className="info__ul">
                <li>Crioterapia (Frío)</li>
                <li>Termoterapia (Calor)</li>
                <li>Ultrasonido</li>
                <li>Radiación IR</li>
              </ul>
            </div>
            <p className="info__p--esp">(Cameron, M., 2014, pp. 1-3) <a className="info__a" href="">(Ver Referencias)</a></p> 
          </div>
        </article>

        <article className="info info--mobile">
        <div className="info__desc">
            <h2>¿Por qué Terapia Física?</h2>
            <p className="info__p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Consequuntur optio quaerat culpa laudantium? Perspiciatis provident aut dolorum officiis a facere.</p>
          </div>

          <div className="info__img">
            <Pregunta className="info__svg" />
          </div>
        </article>
      </section>
    </>
  );
}

export default Inicio;

