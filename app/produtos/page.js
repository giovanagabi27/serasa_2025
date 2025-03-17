import Menu from "./components/Menu";
import Produto from "./components/Produto";



function produtos(){
    return(
        <div>

            <div style={{background: "black" , padding: 20}}>
                <h1 style={{color: "white"}}>Site da Gigica</h1>

            </div>

            <Menu/>
            <Menu/>

            <h1>Produtos</h1>
            <p>Bem-vindo a página de produtos 😋</p>

            <hr/>

           <Produto/>
           <Produto/>
           <Produto/>
           <Produto/>
           
           <hr/>

           
           

           

            

            
        </div>
    );
}
export default produtos;