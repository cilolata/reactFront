import React, {useState} from 'react';
import './styles.css';


function DevItem({ dev }){

  async function DeleteDev({e}){

    await onClick(
      id
    )
      setDevs(devs.filter(dev => dev._id !== id))
    }
  }
   
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
    <button className="button btn">Edit</button>
    <button className="button" onClick={DeleteDev}>Delete</button>
  </li>


)}

export default DevItem;