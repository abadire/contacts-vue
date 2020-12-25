const PopupCommands = Object.freeze({
  ADD_CONTACT: Symbol('addContact'),
  DELETE_CONTACT: Symbol('deleteContact'),
  DELETE_FIELD: Symbol('deleteField'),
});

const EditCommands = Object.freeze({
  ADD_FIELD: Symbol('addField'),
  DELETE_FIELD: Symbol('deleteField'),
  UNDO: Symbol('undo'),
});

export { PopupCommands, EditCommands };
