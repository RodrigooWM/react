import Item from './Item'
function List(){

    return(
        <>
            <h1>uma lista</h1>
            <ol>
                <Item marca="Ferrari" ano_lancamento={1995}></Item>
                <Item marca="Fiat" ano_lancamento={1966}></Item>
                <Item /*marca="Renault "*/ 
                //Propositalmente falta informação para buscar a mensagem de erro no Item.defaultProps (Item.js).
                ano_lancamento={1994}></Item>
                <Item marca="Peugeot " ano_lancamento={2017}></Item>
               
            </ol>
        </>
    )

    
}

export default List