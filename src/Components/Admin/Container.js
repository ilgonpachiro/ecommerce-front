

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
    }, {
      id: 2,
      name: 'Muñeca Heroina',
      img: '../../images/muñeca1.jpg',
      price: 5980,
      category: 'Niña',
      brand: 'Super Baby',
      origin: 'USA',
      cantidadAux: 0
    }, {
      id: 3,
      name: 'Bebe Unicornio',
      img: '../../images/bebe1.webp',
      price: 7200,
      category: 'Niña',
      brand: 'Cry Babies',
      origin: 'USA',
      cantidadAux: 0
    
    }, {
      id: 4,
      name: 'Fluffly',
      img: '../../images/fur1.webp',
      price: 4998,
      category: 'Niño',
      brand: 'Scruff',
      origin: 'USA',
      cantidadAux: 0
    }, {
      id: 5,
      name: 'Llama Interactiva',
      img: '../../images/llama1.webp',
      price: 4590,
      category: 'Niño',
      brand: 'Zuru',
      origin: 'USA',
      cantidadAux: 0
    }, {
      id: 6,
      name: 'Barbie',
      img: '../../images/barbie1.webp',
      price: 1090,
      category: 'Niña',
      brand: 'Barbie',
      origin: 'USA',
      cantidadAux: 0
    }, {
      id: 7,
      name: 'Pokebola',
      img: '../../images/pokemon1.webp',
      price: 399,
      category: 'Pokemon',
      brand: 'Pokemon',
      origin: 'USA',
      cantidadAux: 0
    }, {
      id: 8,
      name: 'Pelotero Bebe',
      img: '../../images/pelotero1.webp',
      price: 2100,
      category: 'Bebe',
      brand: 'Toy World',
      origin: 'USA',
      cantidadAux: 0
    }, {
      id: 9,
      name: 'Camioneta Bateria',
      img: '../../images/camioneta1.webp',
      price: 84999,
      category: 'Niño',
      brand: 'Toy World',
      origin: 'USA',
      cantidadAux: 0
    }, {
      id: 10,
      name: 'Baby Yoda',
      img: '../../images/yoda1.webp',
      price: 7200,
      category: 'Niño',
      brand: 'Star Wars',
      origin: 'USA',
      cantidadAux: 0
    }, {
      id: 11,
      name: 'Critter',
      img: '../../images/glitter1.webp',
      price: 7200,
      category: 'Niña',
      brand: 'Cry Babies',
      origin: 'USA',
      cantidadAux: 0
    }, {
      id: 12,
      name: 'Heladera Barbie',
      img: '../../images/heladra1.webp',
      price: 7969,
      category: 'Niña',
      brand: 'Barbie',
      origin: 'USA',
      cantidadAux: 0
    }, {
      id: 13,
      name: 'Fingerlings',
      img: '../../images/dragon1.webp',
      price: 5091,
      category: 'Niño',
      brand: 'Fingerlings',
      origin: 'USA',
      cantidadAux: 0
    }, {
      id: 14,
      name: 'Fisher Interactivo',
      img: '../../images/fisher1.webp',
      price: 18500,
      category: 'Niño',
      brand: 'Fisher Price',
      origin: 'USA',
      cantidadAux: 0
    }, {
      id: 15,
      name: 'Muñeca Pinypon',
      img: '../../images/nena1.webp',
      price: 1400,
      category: 'Niña',
      brand: 'Pinypon',
      origin: 'USA',
      cantidadAux: 0
    }
  ];

  const [data, setData] = useState(dataJuguetes);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);

  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [];



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
    console.log(this.user);
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
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Brand</th>
            <th>Buyer</th>
            <th>Contact</th>

          </tr>
        </thead>
        <tbody>
        {user.items.map(product=>(
            <tr>
              <td>{product.info.name}</td>
              <td>{product.cantidad}</td>
              <td>{product.info.price}</td>
              <td>{product.info.brand}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
          
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
              name="name"
              value={jugueteSeleccionado && jugueteSeleccionado.name}
              onChange={handleChange}
            />
            <br />

            <label>Precio</label>
            <input
              className="form-control"
              type="text"
              name="price"
              value={jugueteSeleccionado && jugueteSeleccionado.price}
              onChange={handleChange}
            />

            <label>Categoria</label>
            <input
              className="form-control"
              type="text"
              name="category"
              value={jugueteSeleccionado && jugueteSeleccionado.category}
              onChange={handleChange}
            />

            <label>Marca</label>
            <input
              className="form-control"
              type="text"
              name="brand"
              value={jugueteSeleccionado && jugueteSeleccionado.brand}
              onChange={handleChange}
            />

            <label>Origin</label>
            <input
              className="form-control"
              type="text"
              name="origin"
              value={jugueteSeleccionado && jugueteSeleccionado.origin}
              onChange={handleChange}
            />

            <label>Stock</label>
            <input
              className="form-control"
              type="text"
              name="cantidadAux"
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
              name="name"
              value={jugueteSeleccionado ? jugueteSeleccionado.name: ''}
              onChange={handleChange}
            />
            <br />

            <label>Precio</label>
            <input
              className="form-control"
              type="text"
              name="price"
              value={jugueteSeleccionado ? jugueteSeleccionado.price: ''}
              onChange={handleChange}
            />
            <br />

            <label>Categoria</label>
            <input
              className="form-control"
              type="text"
              name="category"
              value={jugueteSeleccionado ? jugueteSeleccionado.category: ''}
              onChange={handleChange}
            />
            <br />

            <label>Marca</label>
            <input
              className="form-control"
              type="text"
              name="brand"
              value={jugueteSeleccionado ? jugueteSeleccionado.brand: ''}
              onChange={handleChange}
            />
            <br />

            <label>Origen</label>
            <input
              className="form-control"
              type="text"
              name="origin"
              value={jugueteSeleccionado ? jugueteSeleccionado.origin: ''}
              onChange={handleChange}
            />
            <br />

            <label>Stock</label>
            <input
              className="form-control"
              type="text"
              name="cantidadAux"
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
