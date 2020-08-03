import React, { useEffect, useState } from 'react'
import PageDefault from '../../../componentes/PageDefault'
import { Link, useHistory } from 'react-router-dom'
import FormField from '../../../componentes/FormField'
import Button from '../../../componentes/Button'
import useForm from '../../../hooks/useForms'
import videosRepository from  '../../../repositories/videos'
import categoriasRepository from  '../../../repositories/categorias'



function CadastroVideo () {
    const history = useHistory()
    const [categorias, setCategorias] = useState([])
    const { values, digitar } = useForm({
        titulo: 'Video Padrao',
        url: 'https://youtu.be/2-lya77FnAY',
        categoria: 'One piece'
    })

    useEffect (() => {
        categoriasRepository.getAll()
        .then((categoriasFromServer) => {
            setCategorias(categoriasFromServer);
        })
    }, [])

    console.log(categorias)

    return (
        <PageDefault>
            <h1>
                Cadastro de Video
            </h1>           

            <form onSubmit={(event) => {
                event.preventDefault()

                const categoriaEscolhida = categorias.find((categoria) => {
                    return categoria.titulo === values.categoria;
                });


                /* alert('Video cadastrado com sucesso') */
                videosRepository.create({
                    titulo: values.titulo,
                    url: values.url,
                    categoriaId: categoriaEscolhida.id,
                  })
                    .then(() => {
                      console.log('Cadastrou com sucesso!');
                      history.push('/');
                    });
                }}
                >

                <FormField
                    label={'titulo do Video'}
                    type={'text'}
                    name={'titulo'}              
                    value={values.titulo}
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
                    label={'Categoria'}
                    type={'text'}
                    name={'categoria'}              
                    value={values.categoria}
                    onChange={digitar}
                    suggestions={[
                        'teste'
                    ]}
                />

                <Button>
                    Cadastrar
                </Button>
            </form>

            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo;