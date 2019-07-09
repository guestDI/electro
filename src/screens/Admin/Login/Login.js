import React from 'react';

const login = props => {
    let state = {
        username: "",
        password: ""
    }

    function onUsernameChanged(e){
        state.username = e.target.value
    }

    function onPasswordChanged(e){
        state.password = e.target.value
    }

    function onCredentialEntered(e) {
        e.preventDefault()
        props.onLogin(state)
    }

    return(
        <form onSubmit={onCredentialEntered}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <input className="sign-in-input" required min="6" max="14" type="text"
                       name="username" placeholder="Имя" onChange={onUsernameChanged}/>
                <input className="sign-in-input" required min="6" max="20" type="password"
                       name="password" placeholder="Пароль" onChange={onPasswordChanged}/>
                <input style={{flex: 1, textAlign: 'center'}} className="sign-in" type="submit" value="Войти"/>
            </div>
        </form>
    )
}

export default login;