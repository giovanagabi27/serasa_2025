import Produto from "./Produto";
import produtos from "../page";


function Menu(){
    return(
        <div>
            <Menu/>

            <h1>Produtos</h1>
            <p>Bem-vindo a página de produtos 🥰</p>
            <hr/>

            <Produto/>
            <Produto/>
            <Produto/>
            <Produto/>
            
        </div>
    );
}
export default Menu;