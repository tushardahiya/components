import React, { Component } from 'react';
import classes from  './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state ={
    persons:[
      {id:'1',name:'max',age:28},
      {id:'2',name:'tushar',age:21},
      {id:'3',name:'mayank',age:24}
    ],
    otherState:'some other value',
    showPersons:false
  };

  nameChangedHandler=(event,id) => {

    const personIndex= this.state.persons.findIndex(p=>{
      return p.id===id;
    })
    const person = {...this.state.persons[personIndex]};
    person.name=event.target.value;
    const persons=[...this.state.persons];
    persons[personIndex]=person;
    this.setState({
      persons:persons
    })
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({
        showPersons:!doesShow
      })
  }

  deleteNameHandler = (personIndex) => {
      // const persons = this.state.persons.slice(); //first way of getting a new array and not overridding the OG array
      const persons = [...this.state.persons]; // the more modern way of getting a new array and not overridding the OG array
      persons.splice(personIndex,1);
      this.setState({persons:persons})
  }


  render() {

    let persons = null;
    let btnClass='';

    if (this.state.showPersons) {
      persons = (    
              <Persons
              persons={this.state.persons}
              clicked={this.deleteNameHandler}
              changed={this.nameChangedHandler}  />
        );
 
}
 
    return (
      <div className={classes.App}>
        <Cockpit 
        persons={this.state.persons}
        showPersons={this.state.showPersons}
        clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
