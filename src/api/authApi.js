


import axios from  'axios'

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params:{
        key:'AIzaSyDu2kUxA7bE4rATO1Q9GN73AYXIQHMIw84'
    }
})

export default authApi