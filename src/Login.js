import React, {useState} from 'react';
import './Login.css'
import {Link, useHistory} from "react-router-dom";
import {auth} from "./firebase";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const signIn = e => {
        e.preventDefault()
        //파베 로그인 시스템 적용...
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth){
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img className='login_logo'
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2880px-Amazon_logo.svg.png"/>
            </Link>


            <div className='login_container'>
                <h1>로그인</h1>

                <form>
                    <h5>이메일 </h5>
                    <input type='text' value={email} onChange=
                        {e => setEmail(e.target.value)}/>

                    <h5> 비밀번호 </h5>
                    <input type='password' value={password} onChange
                        ={e => setPassword(e.target.value)}/>

                    <button type='submit'
                            className='login_signInButton'
                            onClick={signIn}>로그인
                    </button>

                </form>

                <p>회원가입을 하시면 개인정보 사용에 대해 어쩌구저쩌구</p>

                <button onClick={register} className='login_registerButton'>회원가입하기</button>
            </div>
        </div>
    );
}

export default Login;