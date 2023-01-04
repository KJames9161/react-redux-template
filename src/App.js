import React from "react";
import { createThingAction, deleteThingAction } from "./actions";
import { connect } from "react-redux";

let nextThingId = 3;

const doDeleteThing = (dispatch, thing) => dispatch(deleteThingAction(thing));

const doCreateThing = dispatch =>
  dispatch(
    createThingAction({ id: nextThingId, name: "thing " + nextThingId++ })
  );

function App(props) {
  return (
    <div className="App">
      <button onClick={() => doCreateThing(props.dispatch)}>add a thing</button>
      <p>Click thing to delete</p>
      <ul>
        {props.things.map(thing => (
          <li
            key={thing.id}
            onClick={() => doDeleteThing(props.dispatch, thing)}
          >
            {thing.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  things: state
});

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
