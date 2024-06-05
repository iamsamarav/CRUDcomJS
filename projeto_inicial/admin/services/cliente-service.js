const listaClientes = () => {
    return fetch(`http://localhost:3005/profile`)
    .then( resposta => {
        if(resposta.ok){
        return resposta.json()
        } 
        throw new Error('Não foi possível listar os clientes')
    })
}

const criaCliente = (nome, email) => {
    return fetch(`http://localhost:3005/profile`,{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.body
        }
        throw new Error('Não foi possível listar os clientes')
    })
}

const removeCliente = (id) =>{
    return fetch(`http://localhost:3005/profile/${id}`,{
        method: 'DELETE'})
        .then(resposta =>{
            if(!resposta.ok){
                throw new Error('Não foi possível remover os clientes')
            }
        })
}

const detalhaCliente = (id) => {
    return fetch(`http://localhost:3005/profile/${id}`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível listar os clientes')

    })
}

const atualizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3005/profile/${id}`,{
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body:JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then( resposta =>{
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível atualizar os clientes')
    })
}

export const clienteService = {
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}
