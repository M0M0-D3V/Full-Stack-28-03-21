import React, { Component } from "react";
import styles from "./NewStyle.module.css";
class LightSwitch extends Component {
  constructor(props) {
    super(props);
    // state and setState -> state is the working value of the object and setState is a method that can change the value of state
    this.state = {
      position: "On",
    };
  }

  render() {
    const flipSwitch = () => {
      if (this.state.position === "On") {
        this.setState({ position: "Off" });
      } else {
        this.setState({ position: "On" });
      }
    };

    return (
      <fieldset>
                        <p>The light is currently {this.state.position}</p>
                        
        <button className={styles.btn} onClick={flipSwitch}>
          Flip Switch
        </button>
                    
      </fieldset>
    );
  }
}

export default LightSwitch;
