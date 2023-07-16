import React from 'react';
import './scss/signin.scss';

export default function SignInComponent(){
    return (
        <div id='signIn'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h1>로그인</h1>
                        <p>로그인을 하시면 보다 많은 혜택을 누리실 수 있습니다.</p>
                    </div>
                    <div className="content">
                        <form name='signInForm' id='signInForm' action="">
                            <div className="login-box">
                                <ul>
                                    <li><input type="text" name='userId' id='userId' placeholder='아이디'/></li>
                                    <li><input type="text" name='userPw' id='userPw' placeholder='패스워드'/></li>
                                </ul>
                            </div>
                            <div className="button-box">
                                <button type='submit'>로그인</button>
                            </div>
                            <ul>
                                <li><a href="!#">아이디 찾기</a></li>
                                <i>|</i>
                                <li><a href="!#">비밀번호 찾기</a></li>
                                <i>|</i>
                                <li><a href="!#">회원 가입</a></li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};