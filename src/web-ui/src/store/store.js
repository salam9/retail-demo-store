// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: null,
    userID: null,
    cartID: null
  },
  mutations: {
    setLoggedOut(state) {
      state.user = null
      state.userID = null
      state.cartID = null
    },
    setUser(state, user) {
      if (user && user.hasOwnProperty("storage")) {
        // Clear "user.storage" to prevent recursively nested user state
        // from being stored which eventually leads to exhausting local storage.
        user.storage = null
      }
      state.user = user
    },
    setUserID(state, userID) {
      state.userID = userID
    },
    setCartID(state, cartID) {
      state.cartID = cartID
    }
  },
  getters: {
  },
  plugins: [createPersistedState()]
})

export default store