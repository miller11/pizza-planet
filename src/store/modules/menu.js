import { firebaseAction } from 'vuexfire'


const state = {
  menuItems: []
};

const getters = {
  getMenuItems : state => state.menuItems
};

const mutations = {

};

const actions = {
  setMenuRef : firebaseAction(({ bindFirebaseRef }, { ref }) => {
    // binding will automatically unbind any previously bound ref so you
    bindFirebaseRef('menuItems', ref);

  })
};


export default {
  state,
  mutations,
  getters,
  actions
}
