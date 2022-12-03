import '../App.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Link} from 'react-router-dom';



function Ranking() {
  const datos=['Alienwear', 'Skynet', 'Jarvis','Supercomputer']
    return (
      <div className="App-body tickett">
        <div className='fs-5'>Ranking</div>
      {
      datos.length > 0?
      datos.map((dat)=> 
      
      <Dropdown className='input' key={dat}>
        <Dropdown.Toggle id=" dropdown-button-dark-example1" className='rank' variant="secondary">
         {dat}
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          
          <Dropdown.Item className='rank' as={Link} to="/3"><div>Mother board</div><div>12500$</div></Dropdown.Item>
          <Dropdown.Item  className='rank' as={Link} to="/2"><div>SSD 500 GB</div><div>100$</div></Dropdown.Item>
          
          <Dropdown.Item className='rank' as={Link}  to="/1"><div>RTX 3080</div><div>700$</div></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      )
    :<div>no hay</div>}
      
      
      </div>
    )
  }
  
  export default Ranking