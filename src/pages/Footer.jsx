import { Link } from 'react-router-dom';

//SVGS Library
import { IconContext } from 'react-icons'
import { AiOutlineTwitter, AiFillGithub } from 'react-icons/ai';

function Footer() {
  return (
    <>
      <footer className="footer">
        <div id="disclaimer" className="disclaimer">
          <h3>Disclaimer</h3>
          <p className="disclaimer__p">Este proyecto solo busca informar sobre la carrera de Terapia Física. 
            La información mostrada puede variar entre universidades o países.
          </p>
        </div>
        <div className="links">
          <h3>Links</h3>
          <div className="links__div">
            <IconContext.Provider value={{ size: '1.5rem' }}>
              <a href="https://twitter.com/BohemioLobo"><AiOutlineTwitter className="links__svg" /></a>
              <a href="https://github.com/ElLoboBohemio/Terapia-Fisica"><AiFillGithub className="links__svg" /></a>
            </IconContext.Provider>
          </div>
          <h3>Referencias</h3>
          <Link className="links__a" to="/referencias">Ver referencias</Link>
        </div>
      </footer>
      <h4 className="footer__h4">Creado por <a className="footer__a" href="https://github.com/ElLoboBohemio/ElLoboBohemio" target="_blank" rel="noreferrer">Josué L.</a></h4>
    </>      
  );
}

export default Footer;

