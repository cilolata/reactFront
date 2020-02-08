import React from 'react';
import './styles.css';


function DevItem({ dev }){

return (
  <li key={dev._id} className="dev-item">
  <header>
    <img src={dev.avatar_url} alt={dev.name} />
    <div className="user-info">
      <p className="user-name">{dev.name}</p>
      <p className="tecnologias">{dev.techs.join(', ')}</p>
    </div>
  </header>
  <p className="bio">{dev.bio}</p>
  <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no GitHub</a>
  </li>


)}

export default DevItem;