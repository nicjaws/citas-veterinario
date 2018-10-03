import React, { Component } from 'react';
import Header from './Header'; 
import AgregarCita from './AgregarCita';
import ListaCitas from './ListaCitas';

class App extends Component {

  state = {
    citas: {}
  }

crearCita = infoCita => {
  // tomar copia del state
  const citas = {...this.state.citas};
  // agregarlo al state actual
  citas[`citas${Date.now()}`] = infoCita;
  // Set al state
  this.setState({
    citas
  })
}
  render() {
    return (
      <div className="container">
        <Header titulo='Administrador de Pacientes de Veterinaria'/>
        <div className="row">
          <div className="col-md-6">
            <AgregarCita 
              crearCita={this.crearCita}
            />
          </div>
          <div className="col-md-6">
            <ListaCitas 
              citas={this.state.citas}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
