import {LOGIN,LOGOUT} from './types'
export default {
    // change_frame({commit}, content) {
    //     commit('change_frame', {content})
    // }
    login({commit}) {
        commit(LOGIN)
    },
    logout({commit}) {
        commit(LOGOUT)
    },
}