function Produto(attr){
    return(
        <div>
           
            <div style={{margin: 10, border: "3px solid red ", width: 100, padding: 10 }}>
                <h2> {attr.nome} </h2>

                
                {
                    attr.desconto !=null &&
                    <p> <strong> {attr.desconto} % off</strong></p>
                }
                
                <p> R$ {attr.preco} </p>
                <button>Comprar</button>
              <hr/>
              
              

            </div>
            

            

            
        </div>
    );
}
export default Produto;