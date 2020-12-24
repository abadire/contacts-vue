const PopupCommands = Object.freeze({
  ADD_CONTACT: Symbol('addContact'),
  DELETE_CONTACT: Symbol('deleteContact'),
});

const EditCommands = Object.freeze({
  EDIT_FIELD: Symbol('editField'),
  ADD_FIELD: Symbol('addField'),
});

export { PopupCommands, EditCommands };
