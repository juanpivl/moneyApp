import { createStore } from 'vuex'

import auth from '../modules/authentication/store'


const store = createStore({
    modules: {
        auth,
        
    }
})




export default store