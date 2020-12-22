/* eslint-disable no-param-reassign */
import { createStore } from 'vuex';
import dummyContacts from '../assets/dummyContacts';

export default createStore({
  state: {
    contacts: dummyContacts,
    isOverlayVisible: false,
  },

  mutations: {
    ADD_CONTACT(state, contact) {
      state.contacts.push(contact);
      state.contacts.sort((lhs, rhs) => lhs.name[0] > rhs.name[0]);
    },

    TOGGLE_OVERLAY(state) {
      state.isOverlayVisible = !state.isOverlayVisible;
    },
  },

  actions: {
    addContact({ commit }, contact) {
      commit('ADD_CONTACT', contact);
    },

    toggleOverlay({ commit }) {
      commit('TOGGLE_OVERLAY');
    },
  },

  modules: {
  },
});
