/* eslint-disable no-param-reassign */
import { createStore } from 'vuex';
import { PopupCommands } from '../assets/Constants';

export default createStore({
  state: {
    contacts: localStorage.getItem('contacts') ? JSON.parse(localStorage.getItem('contacts')) : [],
    isOverlayVisible: false,
    popup: {
      message: '',
      isEditable: false,
      type: '',
    },
    currentContact: null,
    get index() {
      const idx = +this.contacts.reduce(
        (acc, curr) => (acc.index > curr.index ? acc.index : curr.index),
        0,
      ) + 1;
      return String(idx).padStart(6, '0');
    },
  },

  mutations: {
    ADD_CONTACT(state, name) {
      const { index } = state;
      state.contacts.push({ name, index, fields: [] });
      state.contacts.sort((lhs, rhs) => lhs.name.localeCompare(rhs.name));
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },

    TOGGLE_OVERLAY(state) {
      state.isOverlayVisible = !state.isOverlayVisible;
    },

    CHANGE_MESSAGE(state, msg) {
      state.popup.message = msg;
    },

    IS_EDITABLE(state) {
      state.popup.isEditable = true;
    },

    IS_NOT_EDITABLE(state) {
      state.popup.isEditable = false;
    },

    CHANGE_TYPE(state, type) {
      state.popup.type = type;
    },

    SET_CURRENT_CONTACT(state, contact) {
      state.currentContact = contact;
    },

    DELETE_CONTACT(state, contact) {
      const idx = state.contacts.indexOf(contact);
      state.currentContact = null;
      if (idx !== -1) {
        state.contacts.splice(idx, 1);
        localStorage.setItem('contacts', JSON.stringify(state.contacts));
      }
    },

    EDIT_FIELD(state, { contact, newField: { name, value }, oldField }) {
      if (!value) {
        contact.name = name;
      } else {
        oldField.name = name;
        oldField.value = value;
      }
      console.log(oldField);
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },

    ADD_FIELD(state, contact) {
      contact.fields.push({ name: 'name', value: 'value' });
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },

    DELETE_FIELD(state, { contact, field }) {
      const index = contact.fields.indexOf(field);
      if (index !== -1) {
        contact.fields.splice(index, 1);
        localStorage.setItem('contacts', JSON.stringify(state.contacts));
      }
    },
  },

  actions: {
    addContact({ commit }, name) {
      commit('ADD_CONTACT', name);
    },

    toggleOverlay({ commit }) {
      commit('TOGGLE_OVERLAY');
    },

    showOverlay({ commit }, type) {
      commit('CHANGE_TYPE', type);
      switch (type) {
        case PopupCommands.ADD_CONTACT: {
          commit('IS_EDITABLE');
          commit('CHANGE_MESSAGE', 'Enter new contact\'s name:');
          break;
        }
        case PopupCommands.DELETE_CONTACT: {
          commit('IS_NOT_EDITABLE');
          commit('CHANGE_MESSAGE', 'Are you sure you want to delete this contact?');
          break;
        }
        case PopupCommands.DELETE_FIELD: {
          commit('IS_NOT_EDITABLE');
          commit('CHANGE_MESSAGE', 'Are you sure you want to delete this field?');
          break;
        }
        default: break;
      }
      commit('TOGGLE_OVERLAY');
    },

    setCurrentContact({ commit }, contact) {
      commit('SET_CURRENT_CONTACT', contact);
    },

    deleteContact({ commit }, contact) {
      commit('DELETE_CONTACT', contact);
    },

    editField({ commit }, payload) {
      commit('EDIT_FIELD', payload);
    },

    addField({ commit }, contact) {
      commit('ADD_FIELD', contact);
    },

    deleteField({ commit }, payload) {
      commit('DELETE_FIELD', payload);
    },
  },

  modules: {
  },
});
