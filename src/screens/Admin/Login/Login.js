import React from 'react';

const login = props => {

    function onLogin() {
        console.log('logged')
    }

    return(
        <form onSubmit={props.onLogin}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <input className="sign-in-input" required min="6" max="14" type="text"
                       name="username" placeholder="Имя" />
                <input className="sign-in-input" required min="6" max="20" type="password"
                       name="password" placeholder="Пароль" />
                <input style={{flex: 1, textAlign: 'center'}} className="sign-in" type="submit" value="Войти"/>
            </div>
        </form>
    )
}

export default login;