import {LOGIN,LOGOUT} from './types'
export default {
    // change_frame(state,{content}) {
    //     state.frame_content = content
    // }
    [LOGIN]: (state, data) => {
        window.localStorage.setItem('token', JSON.stringify(data))
        state.token = data
    },
    [LOGOUT]: (state) => {
        window.localStorage.removeItem('token')
        state.token = null
    }
}