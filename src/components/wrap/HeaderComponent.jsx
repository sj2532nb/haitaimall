import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import $ from 'jquery';
import './scss/header.scss';

export default function HeaderComponent(){

    const [isRow1Show, setIsRow1Show] = React.useState(false);
    const [isRow2Show, setIsRow2Show] = React.useState(false);
    const [isAllMenu, setIsAllMenu] = React.useState(false);

    const onClickAllMenuOpen=(e)=>{
        e.preventDefault();
        if(isAllMenu===true){
            setIsAllMenu(false);
        }
        else if(isAllMenu===false){
            setIsAllMenu(true);
        }
    }

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
                                        <li><a href="http://localhost:8080/member/signUp.jsp"><span>회원가입</span><i>+1,000P</i></a></li>
                                        <li><a href="http://localhost:8080/member/signIn.jsp"><span>로그인</span></a></li>
                                        <li><a href="!#"><span>장바구니</span><em>2</em></a></li>
                                        <li><a href="http://localhost:8080/member/update.jsp"><span>마이페이지</span></a></li>
                                        <li><a href="!#"><span>고객센터</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row2">
                                <div onClick={onClickAllMenuOpen} className={`all-menu-btn ${isAllMenu?'on':''}`}>
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
                                    <form>
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
                {
                    isAllMenu &&
                        <div className="all-menu-box">
                            <div className="all-menu-container">
                                <div className="left">
                                    <ul className='col1'>
                                        <li><Link to='/sub4'><span>선물하기🎁</span></Link></li>
                                        <li><Link to='/sub5'><span>캐릭터</span></Link></li>
                                        <li><Link to='/sub6'><span>이벤트</span></Link></li>
                                        <li><Link to='/sub7'><span>레시피</span></Link></li>
                                    </ul>
                                    <ul className='col2'>
                                        <li><Link to='/sub1'><span>NEW & HOT</span></Link></li>
                                        <li><a href="!#">NEW</a></li>
                                        <li><a href="!#">HOT</a></li>
                                    </ul>
                                    <ul className='col3'>
                                        <li><Link to='/sub2'><span>골라담기</span></Link></li>
                                        <li><a href="!#">비스켓</a></li>
                                        <li><a href="!#">스낵</a></li>
                                        <li><a href="!#">초코</a></li>
                                        <li><a href="!#">껌</a></li>
                                        <li><a href="!#">캔디&젤리</a></li>
                                        <li><a href="!#">묶음상품</a></li>
                                    </ul>
                                    <ul className='col4'>
                                        <li><Link to='/sub3'><span>선물세트</span></Link></li>
                                        <li><a href="!#">종합선물세트</a></li>
                                        <li><a href="!#">간식선물세트</a></li>
                                        <li><a href="!#">어린이 만들기세트</a></li>
                                        <li><a href="!#">어린이 선물세트</a></li>
                                        <li><a href="!#">만두선물세트</a></li>
                                        <li><a href="!#">대량구매 (BOX)</a></li>
                                    </ul>
                                </div>
                                <div className="right">
                                    <ul>
                                        <li><a href="!#">자주묻는질문</a></li>
                                        <li><a href="!#">공지사항</a></li>
                                        <li><a href="!#">상품 Q&A</a></li>
                                        <li><a href="!#">레시피</a></li>
                                        <li><a href="!#">이벤트</a></li>
                                    </ul>
                                    <div className="header-slide-box">
                                        <div className="slide-container">
                                            <div className="slide-view">
                                                <ul className="slide-wrap">
                                                    <li className="slide slide2"><a href="!#"><img src="./img/bn_side1_1.jpg" alt="" /></a></li>
                                                    <li className="slide slide1"><a href="!#"><img src="./img/bn_side1_1.jpg" alt="" /></a></li>
                                                    <li className="slide slide2"><a href="!#"><img src="./img/bn_side1_1.jpg" alt="" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </header>
            <Outlet/>
        </>
    );
};