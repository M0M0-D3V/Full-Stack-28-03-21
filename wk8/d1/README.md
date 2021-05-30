# WELCOME TO WEEK 8 DAY 1!

## Today's Agenda...

### Iterating with Map

```
import React from 'react';


const Groceries = (props) => {
    // this could just as easily come from props
    const groceryList = ["pearl onions", "thyme", "cremini mushrooms", "butter"];
    return (
        <ul>{
            groceryList.map( (item, i) =>
                <li key={ i }>{ item }</li>
            )
        }</ul>
    );
}

export default Groceries;
```

### Lifting State

- Parent / Children / Sibling concept of State
- Passing data using State

### Extra Callback Parameters

```
const MyComponent = props => {
    const onClickHandler = (e, value) => {
        alert(value);
    }

    return props.movies.map( (item, index) => {
        return <button onClick={ (e) => onClickHandler(e, item) }>{ item }</button>
    });
}

```

### Other Input Types

- Select & Options
- Checkbox

### END OF DAY GOAL: :sparkler: To Do List :sparkler:
