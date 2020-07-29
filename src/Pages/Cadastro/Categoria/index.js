import React, { useState } from 'react'
import PageDefault from '../../../componentes/PageDefault'
import { Link } from 'react-router-dom';
import FormField from '../../../componentes/FormField';


function CadastroCategoria () {
    
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }

    const [categorias, setCategorias] = useState([])
    const [values, setValues] = useState(valoresIniciais)

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        })
    }

    function digitar(info) {
        /* const { getAttribute, value } = info.target; */
        setValue(
            info.target.getAttribute('name'), 
            info.target.value
        )}

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>
            
            <form onSubmit={function handleSubmit(info){
                info.preventDefault()
                
                setCategorias([
                    ...categorias, 
                    values
                ])

                setValues(valoresIniciais)
            }}>

            <FormField
                value={values.nome}
                onChange={digitar}
            />   

            <div>
            <label>
                    Descrição:
                <textarea
                    type="text"
                    name="descricao"
                    value = {values.descricao}
                    onChange={digitar} 
                />
                </label>
            </div>

            <div>
            <label>
                    Cor:
                <input
                    type="color"
                    name="cor"
                    value = {values.cor}
                    onChange = {digitar} 
                />
                </label>
            </div>

                <button>
                Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria} ${indice}`}>
                            {categoria.nome}
                        </li>

                        
                    )
                })}
            </ul>

            <Link to="/">
                Ir para a home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;