import { createStore } from 'vuex';

export default createStore({
  state: {
    contacts: [],
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
