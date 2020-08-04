import React, { useState, useEffect } from 'react'
import PageDefault from '../../../componentes/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../componentes/FormField'
import Button from '../../../componentes/Button'
import useForm from '../../../hooks/useForms'
import categoriaRepository from '../../../repositories/categorias';

function CadastroCategoria () {
    
    const valoresIniciais = {
        nome: '',
        descricao: '',
        url: '',
        cor: '',
    }

    const [categorias, setCategorias] = useState([])  
    
    useEffect(() => {
        categoriaRepository
        .getAll()
        .then((categoriasFromDB) => setCategorias(categoriasFromDB));
    },[])
    
    const { values, digitar, clearForm } = useForm(valoresIniciais)

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>
            
            <form onSubmit={(e) => {
                e.preventDefault();
        
                categoriaRepository.create({
                    titulo: values.nome,
                    cor: values.cor,
                    link_extra: {
                    text: values.descricao,
                    url: values.url,
                    },
                }).then(() => categoriaRepository
                    .getAll()
                    .then((categoriasFromDB) => setCategorias(categoriasFromDB)));
        

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
                    label={'URL'}
                    type={'text'}
                    name={'url'}              
                    value={values.url}
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