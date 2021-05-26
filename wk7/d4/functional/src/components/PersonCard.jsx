import React from "react";
const PersonCard = (props) => {
  return (
    <div>
      <h1>
        {props.lastName}, {props.firstName}
      </h1>
      <p>Age: {props.age}</p>
      <p>Hair Color: {props.hairColor}</p>
    </div>
  );
};
export default PersonCard;

// function PersonCard(props) {
//     // stuff
// }

// class PersonCard extends Component {
//     constructor(props) {
//         super(props)
//         // this.setState =>this is hidden that we used to change the current value of state
//         this.state = {
//             something: props.something
//         }
//     }
//      render() {
//         return()
// }
// }
