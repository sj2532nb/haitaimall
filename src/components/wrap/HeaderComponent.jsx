import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import $ from 'jquery';
import './scss/header.scss';

export default function HeaderComponent(){

    const [isRow1Show, setIsRow1Show] = React.useState(false);
    const [isRow2Show, setIsRow2Show] = React.useState(false);

    React.useEffect(()=>{

        let oldScroll = $(window).scrollTop();
        let newScroll = oldScroll;

        window.addEventListener('scroll', function(){

            newScroll = $(window).scrollTop();

            if(newScroll>150){
                setIsRow2Show(true);
                if(newScroll-oldScroll>0){
                    setIsRow2Show(true);
                    setIsRow1Show(false);
                }
                else if(newScroll-oldScroll<0){
                    setIsRow2Show(false);
                    setIsRow1Show(true);
                }
                oldScroll = newScroll;
            }
            else if(newScroll<150){
                setIsRow2Show(false);
                setIsRow1Show(false);
            }

        });

    },[]);

    return (
        <>
            <header id="header" className={`${isRow2Show?'row2-show':''} ${isRow1Show?'row1-show':''}`}>
                <div className="container">
                    <div className="gap">
                        <div className="content">
                            <div className="row1">
                                <div className="logo">
                                    <Link to='/intro'><img src="./img/5eb422f3ebeda26d05179ff4fc36063b_TfJG1yvbFi_3_top.jpg" alt="" /></Link>
                                </div>
                                <div className="row1-nav">
                                    <ul>
                                        <li><a href="!#"><span>회원가입</span><i>+1,000P</i></a></li>
                                        <li><a href="!#"><span>로그인</span></a></li>
                                        <li><a href="!#"><span>장바구니</span><em></em></a></li>
                                        <li><a href="!#"><span>마이페이지</span></a></li>
                                        <li><a href="!#"><span>고객센터</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row2">
                                <div className="all-menu-btn">
                                    <a href="!#">
                                        <span className='line1'></span>
                                        <span className='line2'></span>
                                        <span className='line3'></span>
                                    </a>
                                </div>
                                <div className="row2-nav">
                                    <ul>
                                        <li><Link to='/sub1'><span>NEW & HOT</span></Link></li>
                                        <li><Link to='/sub2'><span>골라담기</span></Link></li>
                                        <li><Link to='/sub3'><span>선물세트</span></Link></li>
                                        <li><Link to='/sub4'><span>선물하기🎁</span></Link></li>
                                        <li><Link to='/sub5'><span>캐릭터</span></Link></li>
                                        <li><Link to='/sub6'><span>이벤트</span></Link></li>
                                        <li><Link to='/sub7'><span>레시피</span></Link></li>
                                    </ul>
                                </div>
                                <div className="search-box">
                                    <form name='search-form' id='searchForm' action="">
                                        <input type="text" name='search-form' id='searchForm' placeholder='' />
                                        <a href="!#">
                                            <i className='material-icons'>&#xe8b6;</i>
                                        </a>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Outlet/>
        </>
    );
};