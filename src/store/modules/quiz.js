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
  currentQuiz(state) {
    const { turn } = state;
    return {
      quizQuestions: state.quizQuestions[turn],
      quizOptions: state.quizOptions[turn],
    };
  },
  currentCorrectAnswer(state) {
    return state.quizQuestions[state.turn].capital || '';
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
    state.quizQuestions = [];
    state.quizOptions = [];
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
      // state.quizOptions[idx] = options;
      state.quizOptions.splice(idx, 0, options);
      // shuffle options
      // state.quizOptions[idx] = state.quizOptions[idx].sort(() => Math.random() - 0.5);
      const shuffledOptions = state.quizOptions[idx].sort(() => Math.random() - 0.5);
      state.quizOptions.splice(idx, state.quizOptions[idx].length, shuffledOptions);
    });
  },
};

const actions = {
  // eslint-disable-next-line no-shadow
  incrementAndCheckTurn({ commit, state }) {
    if (state.turn >= 9) {
      // quiz is over
      commit('setGameStatus', true);
    } else {
      commit('incrementTurn');
    }
  },
  userGuessed({ commit }) {
    commit('incrementGuessed');
  },
  resetGame({ commit }) {
    commit('resetState');
  },
  shuffleQuesitons({ commit, getters }) {
    commit('shuffleQuizQuesitons', getters.countries);
    commit('loadQuizOptions', getters.countries);
  },
  selectedOptionIndex({ state }, option) {
    return state.quizOptions
      .find((arr) => arr.includes(option))
      .findIndex((opt) => opt === option);
  },
  correctOptionIndex({ state, dispatch }) {
    return dispatch('selectedOptionIndex', state.quizQuestions[state.turn].capital);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
