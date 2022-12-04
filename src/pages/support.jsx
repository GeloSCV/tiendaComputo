import '../App.css';
import {Link} from 'react-router-dom';
import {  Ticket,Journal, QuestionLg} from 'react-bootstrap-icons';
function Support() {
    return (
      <div className="product_container App-body">

      <Link class="boxsup" to='/faq'><QuestionLg width='5em' height='5em'/><div >FAQ</div></Link>    
      <Link class="boxsup" to='/guide'><Journal  width='5em' height='5em'/><div >Guide</div></Link>     
      <Link class="boxsup" to='/ticketsumit'><Ticket  width='5em' height='5em'/><div >Ticket</div></Link>

      </div>
    )
  }
  
  export default Support