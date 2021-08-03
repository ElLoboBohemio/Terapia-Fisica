//Hero
import {ReactComponent as PerfilSVG} from '../svgs/perfil.svg';

//SVG
import {ReactComponent as Munyeco} from '../svgs/munyeco.svg';

function Perfil() {
  return (
    <>
      <section className="perfil">
        <article className="perfil-hero">
          <PerfilSVG className="perfil__svg" />
          <h1 className="perfil__h1">Perfil</h1>
        </article>

        <article className="perfil-info">

          <div className="perfil-header">
            <div className="perfil-header__div">
              <Munyeco className="munyeco" />
            </div>
            <h2>Características de la carrera.</h2>
            <ul className="perfil-header__ul perfil__ul">
              <li>4-5 años de duración.</li>
              <li>Intervenciones Comunitarias.</li>
              <li>Prácticas Comunitarias y Hospitalarias.</li>
              <li>Análisis crítico de artículos científicos.</li>
              <li>Labores de Investigación científica.</li>
            </ul>

            <br />

            <h2>Notas Personales del autor</h2>
            <ul className="perfil-header__ul perfil__ul">
              <li>El idioma inglés facilita la atención de pacientes y 
                la obtención de información.</li>
              <li>Es altamente sugerible la empatía y creatividad.</li>
              <li>Contacta a personal vocacional.</li>


            </ul>

          </div>

          <div className="perfil-cursos">
            <h2>Cursos</h2>
            <p>Generalmente se pueden encontrar los siguientes cursos en la carrera
              de Terapia Física.
              
              <br />
              <a href="#disclaimer"><span className="perfil__span">*Ver Disclaimer</span></a>
            </p>

            <div className="perfil-cursos__div">
              <ul className="perfil-cursos__ul perfil__ul">
                <li>Atención Comunitaria</li>
                <li>Inglés</li>
                <li>Psicología</li>
                <li>Física</li>
                <li>Fisiología</li>
              </ul>

              <ul className="perfil-cursos__ul">
                <li>Anatomía Humana</li>
                <li>Epidemiología</li>
                <li>Biomecánica</li>
                <li>Química</li>
                <li>Biología</li>
              </ul>
            </div>

            <p>Información tomada de las siguientes Universidades Latinoamericanas:</p>

            <div className="perfil-citas__div">
              <a className="cita__a" href="https://www.uchile.cl/carreras/5012/kinesiologia" target="_blank" rel="noreferrer">(UC, 2014)</a>
              <a className="cita__a" href="http://orientacion.ucr.ac.cr/wp-content/uploads/2018/07/TerapiaFisica.pdf" target="_blank" rel="noreferrer">(UCR, 2018)</a>
              <a className="cita__a" href="https://www.dgire.unam.mx/contenido_wp/licenciatura-en-fisioterapia-ano-plan-2012/" target="_blank" rel="noreferrer">(UNAM, 2012)</a>
            </div>
            
          </div>

          <div className="perfil-laboral">
            <h2>Salida Laboral</h2>
            <p>Generalmente el Terapeuta Físico puede desarrollar su trabajo en las siguientes
              áreas:<a href="#disclaimer"><span className="perfil__span">*Ver Disclaimer</span></a></p>

            <div className="perfil-laboral__div">
              <ul className="perfil-laboral__ul perfil__ul">
                <li>Centros de educación especial</li>
                <li>Hogares de adultos mayores</li>
                <li>Centros de Salud</li>
                <li>SPA y Balnearios</li>
              </ul>

              <ul className="perfil-laboral__ul perfil__ul">
                <li>Centros deportivos y de actividad física</li>
                <li>Centros de Investigación</li>
                <li>Empresas e industrias</li>
                <li>Docencia</li>
              </ul>
            </div>
              

            <p>Información tomada de las siguientes Universidades Latinoamericanas:</p>

            <div className="perfil-citas__div"> 
              <a className="cita__a" href="http://orientacion.ucr.ac.cr/wp-content/uploads/2018/07/TerapiaFisica.pdf" target="_blank" rel="noreferrer">(UCR, 2018)</a>
              <a className="cita__a" href="http://oferta.unam.mx/fisioterapia.html" target="_blank" rel="noreferrer">(UNAM, s.f)</a>
            </div>
            
          </div>

        </article>
      </section>
    </>
  );
}

export default Perfil;

