import Menu from "./components/Menu";
import Produto from "./components/Produto";



function produtos(){
    return(
        <div>

            <div style={{background: "black" , padding: 20}}>
                <h1 style={{color: "white"}}>Site da Gigica</h1>

            </div>

            <Menu/>
            

            <h1>Produtos</h1>
            <p>Bem-vindo a página de produtos 😋</p>

            <hr/>

           <Produto nome="Maçã" preco="6,50" desconto="20"/>
           <Produto nome="Uva" preco="7,90" />
           <Produto nome="Pera" preco="6,90" />
           
           
           <hr/>

           
           

           

            

            
        </div>
    );
}
export default produtos;