import React, { Component } from 'react'
import "./pokedex.css"

export default class Leftside extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result : []
        }
    }
//  handleCard = (e) => {
//     console.log(this.props.pokemonObj);
//     let movedPokemon = [...this.state.result,this.props.pokemonObj]
//     console.log(movedPokemon);
//  }
  render() {
    const {id, name, base_experience, type} = this.props.pokemonObj
    return (
        <div className='pokemon-card col-lg-3 col-md-4 col-sm-3' onClick={(e,obj) => this.props.handleClick(e,obj)}>
        <p className='pokemon-id'>#00{id}</p>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="pokemon" className='pokemon-img' />
        <p className='pokemon-name'>{name}</p>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6"><p className='pokemon-type' id= {`${type}`}>{type}</p></div>
          <div className="col-lg-6 col-md-6 col-sm-6"> <p className='pokemon-exp'>{base_experience}</p></div>
        </div>
      </div>
    )
  }
}
