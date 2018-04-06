import React, { Component } from 'react';


/*  Note:
   if you find a add/remove 'techlist--hidden' from the div element's class,
   the techlist box will appear/disappear
 
*/

class ShowHideTech extends Component {

  constructor() {
    super();

    this.state = {
      techlistStatus: 'techlist--hidden',
      buttonText: '+ Show Tech'
    };
  }

  stateToShow = () => {
    this.setState({
      techlistStatus: '',
      buttonText: '- Hide Tech'
    });
  }

  stateToHide = () => {
    this.setState({
      techlistStatus: 'techlist--hidden',
      buttonText: '+ Show Tech' 
    });
  }



  render() {
    console.log(this.state.techlistStatus)
    return (
      <section>
        <h4>Technologies</h4>
        <button className="toggle-techlist" onClick={ () => { this.state.techlistStatus === '' ?  this.stateToHide() : this.stateToShow() } }>{this.state.buttonText}</button>

        <div className={`techlist ${this.state.techlistStatus}`}>
          <span className="techlist__icon devicons devicons-github_badge"/>
          <span className="techlist__icon devicons devicons-git"/>
          <span className="techlist__icon devicons devicons-html5"/>
          <span className="techlist__icon devicons devicons devicons-css3"/>
          <span className="techlist__icon devicons devicons-sass"/>
          <span className="techlist__icon devicons devicons-linux"/>
          <span className="techlist__icon devicons devicons devicons-nodejs"/>
          <span className="techlist__icon devicons devicons devicons-react"/>
          <span className="techlist__icon devicons devicons devicons-illustrator"/>
        </div>
      </section>
    );
  }
}

export default ShowHideTech ;
