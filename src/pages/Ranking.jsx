import '../App.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Link} from 'react-router-dom';
import allProducts from '../data/Data';



function Ranking() {
  const datos=['Alienwear', 'Skynet', 'Jarvis']
    return (
      <div className="App-body tickett">
        <div className='fs-5'>Ranking</div>
      {
      datos.length > 0?
      datos.map((dat)=> 
      
      <Dropdown className='input'key={ dat}>
        <Dropdown.Toggle id=" dropdown-button-dark-example1" className='rank' variant="secondary">
         {dat}
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
       { allProducts.map((p) => dat===p.Pc? <Dropdown.Item key={p.id} className='rank' as={Link} to={`/${p.id}`} ><div>{p.title}</div><div>{p.price}$</div></Dropdown.Item>:null)
          }
          
          </Dropdown.Menu>
      </Dropdown>
      )
    :<div>no hay</div>}
      
      
      </div>
    )
  }
  
  export default Ranking