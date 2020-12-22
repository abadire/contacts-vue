import { createStore } from 'vuex';
import dummyContacts from '../assets/dummyContacts';

export default createStore({
  state: {
    contacts: dummyContacts,
  },

  mutations: {
    ADD_CONTACT(state, contact) {
      state.contacts.push(contact);
      state.contacts.sort((lhs, rhs) => lhs.name[0] > rhs.name[0]);
    },
  },

  actions: {
    addContact({ commit }, contact) {
      commit('ADD_CONTACT', contact);
    },
  },

  modules: {
  },
});
