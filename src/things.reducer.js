import { Actions } from "./actions.js";

// reducers should not mutate state
const thingReducer = (previousState = [], action) => {
  switch (action.type) {
    case Actions.CREATE_THING: {
      const newThing = {};
      Object.assign(newThing, action.thing); // new obj, don't mutate param
      newThing.id = newThing.id;
      return [...previousState, newThing];
    }

    case Actions.DELETE_THING:
      return previousState.filter(thing => thing.id !== +action.thing.id);

    default:
      return previousState;
  }
};

export default thingReducer;
