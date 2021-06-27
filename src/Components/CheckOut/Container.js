import React from 'react';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { buildHostUrl } from "../../api/helpers";



class App extends React.Component {

  userData;

  constructor(props) {
      super(props);

      this.onChangeName = this.onChangeName.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangePhone = this.onChangePhone.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
			this.items = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []

      this.state = {
          name: '',
          email: '',
          phone: ''
      }
  }

  // Form Events
  onChangeName(e) {
      this.setState({ name: e.target.value })
  }

  onChangeEmail(e) {
      this.setState({ email: e.target.value })
  }

  onChangePhone(e) {
      this.setState({ phone: e.target.value })
  }

  async onSubmit(e) {
      e.preventDefault()
      localStorage.setItem('items', '');

      //enviar el modelo por aca al backend.
      //enviar en forma de { user: {}, products: []}
      await axios.post(buildHostUrl('checkout'), {});
  }

  // React Life Cycle
  componentDidMount() {
      this.userData = JSON.parse(localStorage.getItem('user'));

      if (localStorage.getItem('user')) {
          this.setState({
              name: this.userData.name,
              email: this.userData.email,
              phone: this.userData.phone,
              items: this.items
          })
      } else {
          this.setState({
              name: '',
              email: '',
              phone: ''
          })
      }
  }

  componentWillUpdate(nextProps, nextState) {
      localStorage.setItem('user', JSON.stringify(nextState));
  }

  render() {

    return (
    
      <div className="maincontainer">
       
        <div class="container">
          <div class="py-5 text-center">
            
            <h3>FORMULARIO DE COMPRA</h3>
            
          </div>

          <div class="row">

            {/* <!-- Contact Form --> */}
            <div className="col-md-12">

              <section id="contact">

                <div id="contact-message"></div>

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="tel" className="form-control" value={this.state.phone} onChange={this.onChangePhone} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
              </section>
            </div>

          </div>
          
        </div>
     
      </div>
      
)
};
}
export default App;