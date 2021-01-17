import axios from 'axios';
// import Vue from 'vue';

const state = {
  loading: false,
  countries: [],
};

const getters = {
  // eslint-disable-next-line no-shadow
  isLoading(state) {
    return state.loading;
  },
  // eslint-disable-next-line no-shadow
  countries(state) {
    return state.countries;
  },
};

const mutations = {
  // eslint-disable-next-line no-shadow
  storeCountries(state, countries) {
    // Vue.set(state, 'countries', countries);
    state.countries = countries;
  },
  // eslint-disable-next-line no-shadow
  setLoading(state, status) {
    state.loading = status;
  },
};

const actions = {
  async loadCountries({ commit }) {
    try {
      commit('setLoading', true);
      const [{ data }] = await Promise.all([
        axios.get('https://restcountries.eu/rest/v2/region/europe'),
        new Promise((resolve) => setTimeout(resolve, 600)),
      ]);
      const formattedCountries = data.map(({ name, capital, flag }) => ({ name, capital, flag }));
      commit('storeCountries', formattedCountries);
    } finally {
      commit('setLoading', false);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
