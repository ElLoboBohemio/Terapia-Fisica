import {ReactComponent as Radio404} from '../svgs/404-radio.svg';
import {ReactComponent as Pregunta404} from '../svgs/404-pregunta.svg';

function Error404() {
  return (
    <>
      <section className="error">
        <article className="imagen">
          <Radio404 />
          <Pregunta404 />
        </article>

        <article className="texto">
          <h1>Error 404</h1>
          <p>Creo que no tenemos el "radio" que buscas.
            Está dirección URL no existe.</p>
          <p>Por favor, seleccione una opción del menú.</p>
        </article>

      </section>
    </>
  );
}

export default Error404;

