/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
const state = {
  guessed: 0,
  gameOver: false,
  turn: 0,
  quizQuestions: [],
  quizOptions: [],
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
    // iterate 10 times
    Array(10)
      .fill()
      .forEach(() => {
        const splicedCountry = countries.splice(Math.floor((Math.random() * countries.length)), 1);
        state.quizQuestions.push(
          ...splicedCountry,
        );
      });
  },
  loadQuizOptions(state, countries) {
    state.quizQuestions.forEach((question, idx) => {
      const options = [];
      // fill random capitals options three times
      Array(3)
        .fill()
        .forEach(() => {
          const country = {
            ...countries
              .splice(Math.floor((Math.random() * countries.length)), 1)[0],
          };

          options.push(country.capital);
        });
      options.push(question.capital);
      state.quizOptions[idx] = options;
      // shuffle options
      state.quizOptions[idx] = state.quizOptions[idx].sort(() => Math.random() - 0.5);
    });
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
    commit('loadQuizOptions', getters.countries);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
