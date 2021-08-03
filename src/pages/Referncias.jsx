import React from 'react';
import pdfReferencias from '../files/Bibliografia.pdf'


function Referencias() {

  return (
    <>  
      <div className="referencias-pdf">
        <object className="referencias-pdf__object" data={pdfReferencias} type="application/pdf">
          <embed src={pdfReferencias} type="application/pdf" />
        </object>
      </div>
    </>
  );
}

export default Referencias;