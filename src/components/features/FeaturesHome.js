import React, { Component } from 'react'


import './FeaturesHome.css'

import caracteristicaEmpresa from '../../pages/json/caracteristicaEmpresa'

class FeaturesHome extends Component {
  state = {
    caracteristicaEmpresa: caracteristicaEmpresa
  }

  render() {
    function handleTarget(){
     
    }

   return (
      <>
      
        <h1 className="title-1">O que <span>fazemos</span></h1>

        <article className="wrapper-content">
          <section className="grid-container container">
            {this.state.caracteristicaEmpresa.map(e => (
              <div key={e.id} className="features">
                <div className="title">{e.name}</div>
                <div className="box-icon">
                  <img src={e.icon} alt={e.alt}/>
                </div>
                <div className="description">{e.title}</div>
                 { <a onClick={handleTarget} className="btn-acess" href={e.url} ></a>?
                  <a onClick={handleTarget} className="btn-acess" href={e.url} target={e.target}>[ver mais...]</a>:
                  <a onClick={handleTarget} className="btn-acess" target='_blank' href={e.url} ></a>
                }
                 </div>
            ))}
           
          </section>
        </article>
      </>
    );
  }
}
export default FeaturesHome;
  