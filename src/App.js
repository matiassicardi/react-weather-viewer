import React, {Fragment} from 'react';
import Header from './components/Header'


function App() {
  return (
    <Fragment>
      <Header 
        title = 'React Weather Viewer'
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 sm12">
              1
            </div>
            <div className="col m6 sm12">
              2
            </div>
          </div>
        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
