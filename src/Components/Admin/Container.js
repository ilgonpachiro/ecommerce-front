import React, {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';

function App() {

  const dataJuguetes = [
    {
      id: 1,
      name: 'Among Us',
      img: '/images/among1.webp',
      price: 1872,
      category: 'Funko',
      brand: 'Fun',
      origin: 'USA',
      cantidadAux: 0
    },

    {
      id: 2,
      name: 'Test',
      img: '/images/among1.webp',
      price: 999,
      category: 'Funko',
      brand: 'Fun',
      origin: 'USA',
      cantidadAux: 0
    }
  
  ];

  const [data, setData] = useState(dataJuguetes);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);


 

  const [jugueteSeleccionado, setJuguetesSeleccionado] = useState({
    id: '',
    name: '',
    img: '',
    price: '',
    category: '',
    brand: '',
    origin: '',
    cantidadAux: 0,
  });

  const seleccionarJuguetes=(elemento, caso)=>{
setJuguetesSeleccionado(elemento);
(caso==='Editar')?setModalEditar(true):setModalEliminar(true)
  }

  const handleChange=e=>{
    const {name, value}=e.target;
    setJuguetesSeleccionado((prevState)=>({
      ...prevState,
      [name]: value
    }));
  }

  const editar=()=>{
    var dataNueva=data;
    dataNueva.map(juguete=>{
      if(juguete.id===jugueteSeleccionado.id){
        juguete.name=jugueteSeleccionado.name;
        juguete.img=jugueteSeleccionado.img;
        juguete.price=jugueteSeleccionado.price;
        juguete.category=jugueteSeleccionado.category;
        juguete.brand=jugueteSeleccionado.brand;
        juguete.origin=jugueteSeleccionado.origin;
        juguete.cantidadAux=jugueteSeleccionado.cantidadAux;
      }
    });
    setData(dataNueva);
    setModalEditar(false);
  }

  const eliminar =()=>{
    setData(data.filter(juguete=>juguete.id!==jugueteSeleccionado.id));
    setModalEliminar(false);
  }

  const abrirModalInsertar=()=>{
    setJuguetesSeleccionado(null);
    setModalInsertar(true);
  }

  const insertar =()=>{
    var valorInsertar=jugueteSeleccionado;
    valorInsertar.id=data[data.length-1].id+1;
    var dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertar(false);
  }

  return (
    <div className="App">
      
      <br />
     
      
    <button className="submit button" onClick={()=>abrirModalInsertar()}>Insertar nuevo producto</button>
    
    <br /><br />
      <table className="table table-bordered">


        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Origin</th>
            <th>cantidadAux</th>
          </tr>
        </thead>
        <tbody>
          {data.map(elemento=>(
            <tr>
              <td>{elemento.id}</td>
              <td>{elemento.name}</td>
              <td>{elemento.price}</td>
              <td>{elemento.category}</td>
              <td>{elemento.brand}</td>
              <td>{elemento.origin}</td>
              <td>{elemento.cantidadAux}</td>
              <td><button className="btn btn-primary" onClick={()=>seleccionarJuguetes(elemento, 'Editar')}>Editar</button> {"   "} 
              <button className="btn btn-danger" onClick={()=>seleccionarJuguetes(elemento, 'Eliminar')}>Eliminar</button></td>
            </tr>
          ))
          }
        </tbody>
      </table>

      <h3>Listado de pedidos</h3>



      <table className="table table-bordered">


        <thead>
          <tr>
            <th>Apellido</th>
            <th>Nombre</th>
            <th>Total</th>
          
          </tr>
        </thead>
        <tbody>
          {data.map(elemento=>(
            <tr>
              <td>{elemento.lastname}</td>
              <td>{elemento.surname}</td>
              <td>{elemento.total}</td>
            </tr>
          ))
          }
        </tbody>
      </table>


      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar Juguetes</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={jugueteSeleccionado && jugueteSeleccionado.id}
            />
            <br />

            <label>Juguetes</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              value={jugueteSeleccionado && jugueteSeleccionado.name}
              onChange={handleChange}
            />
            <br />

            <label>Precio</label>
            <input
              className="form-control"
              type="text"
              name="minutos"
              value={jugueteSeleccionado && jugueteSeleccionado.price}
              onChange={handleChange}
            />

            <label>Categoria</label>
            <input
              className="form-control"
              type="text"
              name="minutos"
              value={jugueteSeleccionado && jugueteSeleccionado.category}
              onChange={handleChange}
            />

            <label>Marca</label>
            <input
              className="form-control"
              type="text"
              name="minutos"
              value={jugueteSeleccionado && jugueteSeleccionado.brand}
              onChange={handleChange}
            />

            <label>Origin</label>
            <input
              className="form-control"
              type="text"
              name="minutos"
              value={jugueteSeleccionado && jugueteSeleccionado.origin}
              onChange={handleChange}
            />

            <label>Stock</label>
            <input
              className="form-control"
              type="text"
              name="minutos"
              value={jugueteSeleccionado && jugueteSeleccionado.cantidadAux}
              onChange={handleChange}
            />


            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={()=>editar()}>
            Actualizar
          </button>
          <button
            className="btn btn-danger"
            onClick={()=>setModalEditar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>


      <Modal isOpen={modalEliminar}>
        <ModalBody>
          Estás seguro que deseas eliminar el juguete {jugueteSeleccionado && jugueteSeleccionado.name}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={()=>eliminar()}>
            Sí
          </button>
          <button
            className="btn btn-secondary"
            onClick={()=>setModalEliminar(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>


        <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Insertar Juguetes</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={data[data.length-1].id+1}
            />
            <br />

            <label>Juguete</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              value={jugueteSeleccionado ? jugueteSeleccionado.name: ''}
              onChange={handleChange}
            />
            <br />

            <label>Precio</label>
            <input
              className="form-control"
              type="text"
              name="minutos"
              value={jugueteSeleccionado ? jugueteSeleccionado.price: ''}
              onChange={handleChange}
            />
            <br />

            <label>Categoria</label>
            <input
              className="form-control"
              type="text"
              name="minutos"
              value={jugueteSeleccionado ? jugueteSeleccionado.category: ''}
              onChange={handleChange}
            />
            <br />

            <label>Marca</label>
            <input
              className="form-control"
              type="text"
              name="minutos"
              value={jugueteSeleccionado ? jugueteSeleccionado.brand: ''}
              onChange={handleChange}
            />
            <br />

            <label>Origen</label>
            <input
              className="form-control"
              type="text"
              name="minutos"
              value={jugueteSeleccionado ? jugueteSeleccionado.origin: ''}
              onChange={handleChange}
            />
            <br />

            <label>Stock</label>
            <input
              className="form-control"
              type="text"
              name="minutos"
              value={jugueteSeleccionado ? jugueteSeleccionado.cantidadAux: ''}
              onChange={handleChange}
            />
            <br />


          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary"
          onClick={()=>insertar()}>
            Insertar
          </button>
          <button
            className="btn btn-danger"
            onClick={()=>setModalInsertar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default App;
