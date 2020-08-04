import React, { useEffect, useState } from 'react';
/* import dadosIniciais from '../../data/dados_iniciais.json' */
import { Container } from './styles';
import BannerMain from '../../componentes/BannerMain'
import Carousel from '../../componentes/Carousel'
import categoriasRepository from '../../repositories/categorias'
import PageDefault from '../../componentes/PageDefault'
import Loading from '../../componentes/Loading';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    // http://localhost:8080/categorias?_embed=videos
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos[0].videos[0]);
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      <Container>
        {dadosIniciais.map((categoria, indice) => {
          if (indice === 0) {
            return (
              <div key={categoria.id}>
                <BannerMain
                  videoTitle={dadosIniciais[0].videos[0].titulo}
                  url={dadosIniciais[0].videos[0].url}
                  videoDescription={dadosIniciais[0].videos[0].description}
                />
                <Carousel
                  ignoreFirstVideo
                  category={dadosIniciais[0]}
                />
              </div>
            );
          }

          return (
            <Carousel
              key={categoria.id}
              category={categoria}
            />
          );
        })}

        {window.scrollTo({ top: 0, left: 0 })}
        {dadosIniciais.length === 0 && (
          <Loading type="spin" color="#44259a"/>
        )}

      </Container>
    </PageDefault>
  );
}

export default Home;
