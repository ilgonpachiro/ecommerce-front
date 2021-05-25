import React from 'react';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {
 
 
  render() {
  
     
    return (
    
      <div className="maincontainer">
       
        <div class="container">
          <div class="py-5 text-center">
            
            <h3>FORMULARIO DE COMPRA</h3>
            
          </div>
          <div class="row">
            
            <div class="col-md-12 order-md-1">
             
              <form class="needs-validation" novalidate>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="firstName">Nombre</label>
                    <input type="text" class="form-control" id="firstName" placeholder="" value="" required />
                    <div class="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="lastName">Apellido</label>
                    <input type="text" class="form-control" id="lastName" placeholder="" value="" required />
                    <div class="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                </div>
                
                <div class="mb-3">
                  <label for="email">Email <span class="text-muted"></span></label>
                  <input type="email" class="form-control" id="email" placeholder="" />
                  <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
                <hr class="mb-4" />
                <button class="btn btn-primary btn-lg btn-block" type="button">Confirmar</button>
              </form>
            </div>
          </div>
          
        </div>
     
      </div>
      
)
};
}
export default App;