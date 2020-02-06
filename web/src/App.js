import React from 'react';
import './Style.css';
import './App.css';
import './SideBar.css';
import './Main.css';


function App() {
  return (
    <div id= 'app'>
    <aside>
      <form>
      <h1 className>Cadastrar</h1>
        <div className="input-block">
        <label htmlFor="github_username">Usuário do GitHub</label>
        <input name="github_username" id="github_username" requires />
        <label htmlFor='techs'>Tecnologias</label>
        <input name="techs" id="techs" requires />
        <label htmlFor='github_url'>GitHub url</label>
        <input name="github_url" id="github_url" requires />
        </div>
        <button type="submit" className="submit">Salvar</button>
      </form>
    </aside>
    <main>
      <ul>
        <li className="dev-item">
          <header>
            <img src="https://avatars1.githubusercontent.com/u/48863588?s=460&v=4" alt="" srcset=""/>
            <div className="user-info">
            <p className="user-name">Ciça Lolata</p>
            <p>Html, Css, JavaScript</p>
            </div>
          </header>
          <p className="bio">Estudante bla bla bla bla bla bla bla bla bla bla</p>
          <a href="https://github.com/cilolata">Acessar perfil no GitHub</a>
        </li>
        <li className="dev-item">
          <header>
            <img src="https://avatars1.githubusercontent.com/u/48863588?s=460&v=4" alt="" srcset=""/>
            <div className="user-info">
            <p className="user-name">Ciça Lolata</p>
            <p>Html, Css, JavaScript</p>
            </div>
          </header>
          <p  className="bio">Estudante bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>
          <a href="https://github.com/cilolata">Acessar perfil no GitHub</a>
        </li>
        <li className="dev-item">
          <header>
            <img src="https://avatars1.githubusercontent.com/u/48863588?s=460&v=4" alt="" srcset=""/>
            <div className="user-info">
            <p className="user-name">Ciça Lolata</p>
            <p>Html, Css, JavaScript</p>
            </div>
          </header>
          <p  className="bio">Estudante bla bla bla bla bla bla bla bla bla bla</p>
          <a href="https://github.com/cilolata">Acessar perfil no GitHub</a>
        </li>
        <li className="dev-item">
          <header>
            <img src="https://avatars1.githubusercontent.com/u/48863588?s=460&v=4" alt="" srcset=""/>
            <div className="user-info">
            <p className="user-name">Ciça Lolata</p>
            <p>Html, Css, JavaScript</p>
            </div>
          </header>
          <p  className="bio">Estudante bla bla bla bla bla bla bla bla bla bla</p>
          <a href="https://github.com/cilolata">Acessar perfil no GitHub</a>
        </li>
        <li className="dev-item">
          <header>
            <img src="https://avatars1.githubusercontent.com/u/48863588?s=460&v=4" alt="" srcset=""/>
            <div className="user-info">
            <p className="user-name">Ciça Lolata</p>
            <p>Html, Css, JavaScript</p>
            </div>
          </header>
          <p  className="bio">Estudante bla bla bla bla bla bla bla bla bla bla</p>
          <a href="https://github.com/cilolata">Acessar perfil no GitHub</a>
        </li>
      </ul>

    </main>
    </div>
  );
}

export default App;
