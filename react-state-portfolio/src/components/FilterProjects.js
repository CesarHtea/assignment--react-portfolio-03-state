import React, { Component } from 'react';
import { projectData } from '../data/datasource'

/*  Advice:
   (1) Create the component's JSX by using .map() on `projectData`

       <div className="project project--«...PROJECT-TYPE...»">
         <span className="project__title">«...PROJECT-NAME...»</span>
       </div>

       -- substitute values for PROJECT-TYPE and PROJECT-NAME


   (2) add an onClick event listener to the  <span> elements in .project-types-list
        that calls a method to change the FilterProjects component state

        Hint: you will want to set the component's initial state in the
              constructor() function

   (3) Use .filter() in the render() method `projectData` based on FilterProjects
       component state

       Hint: you may want to use .filter() then .map()
 */

class FilterProjects extends Component {

  constructor() {
    super();

    this.state = {
      data: projectData,
      filter: 'All'
    };
  }

  botonAll = () => {
    this.setState({ 
        filter: 'All' 
      }) 
  }

  botonSolo = () => {
    this.setState({ 
        filter: 'Solo' 
      }) 
  }

  botonTeam = () => {
    this.setState({ 
        filter: 'Team' 
      }) 
  } 

  createList = () => {
    let filter = this.state.filter
    console.log("#######")
    console.log(filter)
    console.log("#######")
    if ( filter === 'All' ) {
      return this.state.data
    } 
    else if ( filter === 'Solo' ) {
      return this.state.data.filter( project => project.solo === true );
    } 
    else if ( filter === 'Team' ) {
      return this.state.data.filter( project => project.solo === false );
    } 
  }

  render() {
    console.log(this.state.data)
    const newList = this.createList()
    console.log(newList)
    return (
      <section>
          <h4>Projects</h4>

          <div className="project-types-list">
            <span data-ptype="all" className="project-type project-type--all project-type--selected" onClick={ () => { this.botonAll() } }>
              All
            </span>

            <span data-ptype="solo" className="project-type project-type--solo" onClick={ () => { this.botonSolo() } }>
              <i className="ion-person"></i>Solo
            </span>

            <span data-ptype="team" className="project-type project-type--team" onClick={ () => { this.botonTeam() } }>
              <i className="ion-person-stalker"></i>Team
            </span>
          </div>

          <div className='projects-list'>

            {newList.map(function(project){
              return (
                <div className={`project project--${project.solo === true ? 'solo' : 'team'}`}>
                  <span className="project__title">{project.projectName}</span>
                </div>
              );
            })}

          </div>
        </section>

    );
  }
}

export default FilterProjects ;