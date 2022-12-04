import '../App.css';
import { useContext } from "react";
import { FilterContext } from "../components/Context/ContextFilter";
import Card from "./Products/Card/Card";
import {  WindowX} from 'react-bootstrap-icons';



function Home() {
            const { state } = useContext(FilterContext);

            
          
            const productsList = state.filteredItems.filter((product) => {
              return product.title.includes(state.searchKey) || !state.searchKey;
            });
    return (
       
              <>
               
            
                <div className="product_container App-body">
                  {productsList.length > 0 ? (
                    productsList.map((product) => <Card key={product.id} {...product} />)
                  ) : (
                    <div className="not_products">
                      <WindowX width='5em' height='5em' />
                      <span className="products_empty_title">
                       Oops!
                      </span>
                      <span className="products_empty_guide">
                        Search not found
                      </span>
                    </div>
                  )}
                </div>
               
              </>
            );
          }
      
   
  export default Home