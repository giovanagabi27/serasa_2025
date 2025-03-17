import Menu from "./components/Menu";
import Produto from "./components/Produto";



function produtos(){
    return(
        <div>

            <div style={{background: "black" , padding: 20, textAlign: "center"  }}>
                <h1 style={{color: "white"}}>Site Giovana Gabriele</h1>

            </div>

            <Menu/>
            

            

           <Produto nome="Maçã" preco="6,50" desconto="20" comprar/>
           <Produto nome="Uva" preco="7,90" comprar />
           <Produto nome="Pera" preco="6,90" />
           
           
           <hr/>

           
           

           

            

            
        </div>
    );
}
export default produtos;