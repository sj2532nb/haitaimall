import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import TopModalComponent from './wrap/TopModalComponent';
import HeaderComponent from './wrap/HeaderComponent';
import IntroComponent from './wrap/IntroComponent';
import Sub1Component from './wrap/sub/Sub1Component';
import Sub2Component from './wrap/sub/Sub2Component';
import Sub3Component from './wrap/sub/Sub3Component';
import Sub4Component from './wrap/sub/Sub4Component';
import Sub5Component from './wrap/sub/Sub5Component';
import Sub6Component from './wrap/sub/Sub6Component';
import Sub7Component from './wrap/sub/Sub7Component';
import SignUpComponent from './wrap/members/SignUpComponent';
import SignInComponent from './wrap/members/SignInComponent';
import MyPageComponent from './wrap/members/MyPageComponent';
import ProductComponent from './wrap/ProductComponent';
import FooterComponent from './wrap/FooterComponent';

export default function WrapComponent(){
    return (
        <div id="wrap">
            <TopModalComponent/>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HeaderComponent/>}>
                        <Route index element={<IntroComponent/>}/>
                        <Route path='/intro' element={<IntroComponent/>}/>
                        <Route path='/sub1' element={<Sub1Component/>}/>
                        <Route path='/sub2' element={<Sub2Component/>}/>
                        <Route path='/sub3' element={<Sub3Component/>}/>
                        <Route path='/sub4' element={<Sub4Component/>}/>
                        <Route path='/sub5' element={<Sub5Component/>}/>
                        <Route path='/sub6' element={<Sub6Component/>}/>
                        <Route path='/sub7' element={<Sub7Component/>}/>
                        <Route path='/signup' element={<SignUpComponent/>}/>
                        <Route path='/signin' element={<SignInComponent/>}/>
                        <Route path='/mypage' element={<MyPageComponent/>}/>
                        <Route path='/product' element={<ProductComponent/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
            <FooterComponent/>
        </div>
    );
};