import {login} from '../../api/axios-users';

class Auth {
    constructor(){
        this.authentificated = false
    }

    login(obj, cb){
        login(obj)
            .then(response => {
                this.authentificated = true;
            })
        cb();
    }

    isAuthentificated(){
        return this.authentificated;
    }
}

export default new Auth();