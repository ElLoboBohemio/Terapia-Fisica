import React from 'react'

import {ReactComponent as ReactLogo} from '../svgs/logo.svg';

export default function Loader() {
  return (
    <div className="loader">
      <ReactLogo className="loader__svg" />
      <h1>Cargando...</h1>
    </div>
  )
}
