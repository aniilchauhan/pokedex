import React, { Component } from 'react';
import "./bootstrap.min.css"
import Leftside from './Leftside';
import Rightside from './Rightside';
// import PokemonCard from './PokemonCard';
// import Rightside from './Rightside';



export class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonInfo: [
        { id: 1, name: "Bulbasaur", type: "Grass", base_experience: 12 },
        { id: 2, name: "Ivysaur", type: "Grass", base_experience: 458 },
        { id: 3, name: "Venusaur", type: "Grass", base_experience: 85 },
        { id: 4, name: "Charmander", type: "Fire", base_experience: 4 },
        { id: 5, name: "Charmeleon", type: "Fire", base_experience: 25 },
        { id: 6, name: "Charizard", type: "Fire", base_experience: 852 },
        { id: 7, name: "Squirtle", type: "Water", base_experience: 452 },
        { id: 8, name: "aWartortal", type: "Water", base_experience: 6 }
      ],
      isclicked : false,
      result : [],
      totalExperienceLeft : 1994,
      totalExperienceRight : 0
    };
  }
  handleClick = (e,obj) => {
    console.log(obj)
    let experienceLeft = 0;
    let experienceRight = 0;
  let leftCards = this.state.pokemonInfo.filter((element) => {
    return element.id !== obj.id;
  })
  let rightCards = this.state.pokemonInfo.filter((element) => {
    // console.log(element.id);
    if(element.id === obj.id){
      experienceRight = this.state.totalExperienceRight + element.base_experience;
      experienceLeft = this.state.totalExperienceLeft - element.base_experience;
    }
    return element.id === obj.id;
  })
  this.setState(
    {
      pokemonInfo : leftCards,
      result : [...this.state.result, ...rightCards],
      totalExperienceRight: experienceRight,
      totalExperienceLeft: experienceLeft
    }
    )
    console.log(leftCards);
  }
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 border border-left"  style={{
          backgroundColor: this.state.totalExperienceLeft>this.state.totalExperienceRight ? 'green' : 'red',
        }}>
              <div className="row"><div className="col-lg-12 col-md-12 col-sm-12"><h1>Pokemon Info</h1></div></div>
              <div className="row">
                {this.state.pokemonInfo.map((obj, i) => (
                  <Leftside key={i} pokemonObj={obj} handleClick={(e) =>this.handleClick(e,obj)}/>))}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6" style={{
          backgroundColor: this.state.totalExperienceLeft<this.state.totalExperienceRight ? 'green' : 'red',
        }} >
            <div className="row">
                {this.state.result.map((obj, i) => (
                  <Rightside key={i} pokemonObj={obj}/>))}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 text-right"><p>{this.state.totalExperienceLeft}</p></div>
            <div className="col-lg-6 col-md-6 col-sm-6"><p>{this.state.totalExperienceRight}</p></div>
        </div>
        </div>
      </>

    )
  }
}

export default Pokedex
