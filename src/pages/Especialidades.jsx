import {ReactComponent as EspSVG} from '../svgs/especialidades.svg';

import {ReactComponent as Psicologia} from '../svgs/psicologia.svg';
import {ReactComponent as Corazon} from '../svgs/corazon.svg';
import {ReactComponent as Pulmones} from '../svgs/pulmones.svg';
import {ReactComponent as Diente} from '../svgs/diente.svg';
import {ReactComponent as Lazo} from '../svgs/lazo.svg';
import {ReactComponent as Balon} from '../svgs/balon.svg';

function Especialidades() {
  return (
    <>
      <section className="esp">
        <article className="hero--esp">
          <EspSVG className="esp__svg" />
          <h1 className="esp__h1">Especialidades</h1>
        </article>

        <article className="info--esp">

          <div className="esp__area">
            <Psicologia className="area__svg"/>
            <div className="area__div">
              <h2 className="area__h2">Fisioterapia en salud mental</h2>
              <p>Mediante actividad física se mejora en el ánimo y autoestima</p>
              <a className="cita__a" href="https://www.ecr.edu.co/fisioterapia-en-salud-mental-puede-ayudar-a-controlar-algunos-trastornos/" target="_blank" rel="noreferrer">(Escuela Colombiana de Rehabilitación, s.f)</a>
            </div>
          </div>

          <div className="esp__area">
            <Corazon className="area__svg"/>
            <div className="area__div">
              <h2 className="area__h2">Fisioterapia cardiovascular</h2>
              <p>Busca restaurar, detectar y manejar enfermedades cardíacas.</p>
              <a className="cita__a" href="https://www.urosario.edu.co/Escuela-de-Medicina/Especializacion-en-Rehabilitacion-Cardiaca-y-Pulmonar/Inicio/" target="_blank" rel="noreferrer">(Universidad del Rosario, s.f)</a>
            </div>
          </div>

          <div className="esp__area">
            <Pulmones className="area__svg"/>
            <div className="area__div">
                <h2 className="area__h2">Fisioterapia Respiratoria</h2>
                <p>Previene y atiende enfermedades respiratorias.</p>
                <a className="cita__a" href="https://cemp.es/noticias/especialidades-en-fisioterapia/" target="_blank" rel="noreferrer">(Centro Europeo de Másteres y Postgrados, s.f)</a>
            </div>  
          </div>

          <div className="esp__area">
            <Diente className="area__svg"/>
            <div className="area__div">
                <h2 className="area__h2">Fisioterapia Odontológica</h2>
                <p>Trata problemas temporo- <br />mandibulares y orofaciales.</p>
                <a className="cita__a" href="https://www.colfisiocv.com/sites/default/files/archivo/Fisioterapeuta%20y%20Odontologo_tandem.pdf" target="_blank" rel="noreferrer">(Ilustre Colegio Oficial de Fisioterapeutas de la Comunidad Valenciana, 2017)</a>
            </div>
          </div>

          <div className="esp__area">
            <Lazo className="area__svg"/>
            <div className="area__div">
                <h2 className="area__h2">Fisioterapia Oncológica</h2>
                <p>Se mejora el bienestar psicológico y físico de pacientes oncológicos.</p>
                <a className="cita__a" href="https://cemp.es/noticias/especialidades-en-fisioterapia/" target="_blank" rel="noreferrer">(Centro Europeo de Másteres y Postgrados, s.f)</a>
            </div>  
          </div>

          <div className="esp__area">
            <Balon className="area__svg"/>
            <div className="area__div">
                <h2 className="area__h2">Fisioterapia Deportiva</h2>
                <p>Se desarrollan planes para la actividad deportiva recreativa y de alto rendimiento.</p>
                <a className="cita__a" href="https://www.marista.edu.mx/maestria/fisioterapia-deportiva" target="_blank" rel="noreferrer">(Universidad Marista, s.f)</a>
            </div>  
          </div>
        </article>

        <article className="mas--esp">
          <a href="https://cemp.es/noticias/especialidades-en-fisioterapia/" target="_blank" rel="noreferrer"><input className="mas__input" type="button" value="Ver más" /></a>
        </article>
      </section>
    </>
  );
}

export default Especialidades;

