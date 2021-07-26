import * as AiIcons from 'react-icons/ai';

import { IconContext } from 'react-icons'

function Footer() {
  return (
    <footer className="footer">
      <div className="disclaimer">
        <h3>Disclaimer</h3>
        <p className="disclaimer__p">Este proyecto solo busca informar sobre la carrera de Terapia Física. 
          La información mostrada puede variar entre universidades o países.
        </p>
      </div>
      <div className="links">
        <h3>Links</h3>
        <div className="links__div">
          <IconContext.Provider value={{ color: '#ebb204', size: '1.5rem' }}>
            <a href="https://twitter.com/BohemioLobo"><AiIcons.AiOutlineTwitter /></a>
            <a href=""><AiIcons.AiFillGithub /></a>
          </IconContext.Provider>
        </div>
        <h3>Referencias</h3>
        <a className="info__a" href="">Ver referncias</a>
      </div>
      <h3 className="footer__h3">Creado por <a className="footer__a" href="https://github.com/ElLoboBohemio/ElLoboBohemio" target="_blank" rel="noreferrer">Josué L.</a></h3>
    </footer>
      
  );
}

export default Footer;
