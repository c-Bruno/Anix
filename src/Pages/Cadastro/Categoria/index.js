import React, { useState, useEffect } from 'react'
import PageDefault from '../../../componentes/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../componentes/FormField'
import Button from '../../../componentes/Button'
import useForm from '../../../hooks/useForms'

function CadastroCategoria () {
    
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }

    const { digitar, values, clearForm } = useForm(valoresIniciais)
    const [categorias, setCategorias] = useState([])
    

    useEffect(() => {
        const URL = window.location.hostname.includes('localhost')
        ? 'http://localhost:8080/categorias'
        : 'https://devsoltinhoflix.herokuapp.com/categorias';

        fetch(URL)
        .then(async (respostaDoServidor) => {
            const resposta = await respostaDoServidor.json();
            setCategorias([
                ...resposta,
            ]);
        })
    },[])

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>
            
            <form onSubmit={function handleSubmit(info){
                info.preventDefault()
                
                setCategorias([
                    ...categorias, 
                    values,
                ])

                clearForm()
                }}>

                <FormField
                    label={'Nome categoria'}
                    type={'text'}
                    name={'nome'}              
                    value={values.nome}
                    onChange={digitar}
                />   

                <FormField
                    label={'Descrição'}
                    type={'textarea'}
                    name={'descricao'}              
                    value={values.descricao}
                    onChange={digitar}
                />   
                <FormField
                    label={'Cor'}
                    type={'color'}
                    name={'cor'}              
                    value={values.cor}
                    onChange={digitar}
                />              

                <Button>
                    Cadastrar
                </Button>
            </form>

            {categorias.length === 0 && (
                <div>
                    Loading...
                </div>
            )}

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.titulo}
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