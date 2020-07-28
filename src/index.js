import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home/App';
import CadastroVideo from './Pages/Cadastro/Video'
import CadastroCategoria from './Pages/Cadastro/Categoria'

import {
  BrowserRouter,
  Switch,
  Route
 } from 'react-router-dom'


const Pagina404 = () => (<div>Pagina 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/> {/* Router representa as rotas do navegador */}
      <Route path="/cadastro/video" component={CadastroVideo}/>
      <Route path="/cadastro/categoria" component={CadastroCategoria}/>
      <Route component={Pagina404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
