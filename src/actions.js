export const Actions = {
  CREATE_THING: "CREATE_THING",
  DELETE_THING: "DELETE_THING"
};

export const createThingAction = thing => ({
  type: Actions.CREATE_THING,
  thing
});

export const deleteThingAction = thing => ({
  type: Actions.DELETE_THING,
  thing
});
