import React from 'react';
import classes from './cockpit.css'
const cockpit = (props) => {
    const assignedClasses=[];
    let btnClass='';
    if(props.showPersons){
        btnClass=classes.Red;
    }

    const assignedClasses = [];
    if(props.persons.length<=2) {
      assignedClasses.push(classes.red);
    }
    if(props.persons.length<=1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.cockpit}>
            <h1>hi i'm a react App</h1>
            <p className={assignedClasses.join(' ')} >wow this is really working !</p>
            <button
            className={btnClass}
            onClick={props.clicked} >Toggle Persons</button>
        </div>
    )
}
export default cockpit;