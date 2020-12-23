/* eslint-disable no-param-reassign */
import { createStore } from 'vuex';

export default createStore({
  state: {
    contacts: [],
    isOverlayVisible: false,
    popup: {
      message: '',
      isEditable: false,
      type: '',
    },
    currentContact: null,
  },

  mutations: {
    ADD_CONTACT(state, contact) {
      state.contacts.push(contact);
      state.contacts.sort((lhs, rhs) => lhs.name.localeCompare(rhs.name));
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
      state.contacts.splice(idx, 1);
    },
  },

  actions: {
    addContact({ commit }, contact) {
      commit('ADD_CONTACT', contact);
    },

    toggleOverlay({ commit }) {
      commit('TOGGLE_OVERLAY');
    },

    deleteContactOverlay({ commit }) {
      commit('IS_NOT_EDITABLE');
      commit('CHANGE_TYPE', 'delete');
      commit('CHANGE_MESSAGE', 'Do you really want to delete the contact?');
      commit('TOGGLE_OVERLAY');
    },

    addContactOverlay({ commit }) {
      commit('IS_EDITABLE');
      commit('CHANGE_TYPE', 'add');
      commit('CHANGE_MESSAGE', 'Enter new contact\'s name:');
      commit('TOGGLE_OVERLAY');
    },

    setCurrentContact({ commit }, contact) {
      commit('SET_CURRENT_CONTACT', contact);
    },

    deleteContact({ commit }, contact) {
      commit('DELETE_CONTACT', contact);
    },
  },

  modules: {
  },
});
