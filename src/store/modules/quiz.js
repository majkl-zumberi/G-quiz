/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
const state = {
  guessed: 0,
  gameOver: false,
  turn: 0,
  quizQuestions: [],
};

const getters = {
  guessed(state) {
    return state.guessed;
  },
  isGameOver(state) {
    return state.gameOver;
  },
};

const mutations = {
  // eslint-disable-next-line no-shadow
  incrementTurn(state) {
    state.turn += 1;
  },
  // eslint-disable-next-line no-shadow
  incrementGuessed(state) {
    state.guessed += 1;
  },
  // eslint-disable-next-line no-shadow
  setGameStatus(state, status) {
    state.gameOver = status;
  },
  // eslint-disable-next-line no-shadow
  resetState(state) {
    state.turn = 0;
    state.guessed = 0;
    state.gameOver = false;
  },
  // eslint-disable-next-line no-shadow
  loadQuestions(state, questions) {
    state.quizQuestions = questions;
  },
  shuffleQuizQuesitons(state, countries) {
    for (let i = 0; i < 10; i++) {
      const splicedCountry = countries.splice(Math.floor((Math.random() * countries.length)), 1);
      console.log({ splicedCountry });
      state.quizQuestions.push(
        ...splicedCountry,
      );
    }
  },

};

const actions = {
  // eslint-disable-next-line no-shadow
  incrementAndCheckTurn({ commit, state }) {
    if (state.turn > 9) {
      // quiz is over
      commit('setGameStatus', true);
    } else {
      commit('incrementTurn');
    }
  },
  userGuessed({ commit }) {
    commit('incrementGuessed');
    this.incrementAndCheckTurn();
  },
  resetGame({ commit }) {
    commit('resetState');
  },
  shuffleQuesitons({ commit, getters }) {
    commit('shuffleQuizQuesitons', getters.countries);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
