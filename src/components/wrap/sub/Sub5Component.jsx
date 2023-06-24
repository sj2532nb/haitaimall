import React from 'react';
import $ from 'jquery';
import './scss/sub5.scss';

export default function Sub5Component(){

    React.useEffect(()=>{

        const $slideWrap = $('#sub5 .slide-wrap');
        const $prevBtn = $('#sub5 .prev-btn');
        const $nextBtn = $('#sub5 .next-btn');
        let cnt=0;
        let setId=0;

        function mainSlide(){
            $slideWrap.stop().animate({left: `${-100*cnt}%`}, 0, function(){
                if(cnt>6) cnt=0;
                if(cnt<0) cnt=6;
                $slideWrap.stop().animate({left: `${-100*cnt}%`},0);
            });
        }

        function prevCount(){
            cnt--;
            mainSlide();
        }

        function nextCount(){
            cnt++;
            mainSlide();
        }

        function autoTimer(){
            clearInterval(setId);
            setId=setInterval(nextCount, 3000);
        }
        autoTimer();

        $prevBtn.on({
            click(e){
                clearInterval(setId);
                e.preventDefault();
                prevCount();
            }
        })

        $nextBtn.on({
            click(e){
                clearInterval(setId);
                e.preventDefault();
                nextCount();
            }
        })

    },[]);


    return (
        <div id='sub5'>
            <div className="container">
                <div className="gap">
                    <div className="slide-box">
                        <div className="slide-container">
                            <div className="slide-view">
                                <ul className="slide-wrap">
                                    <li className="slide slide7"><a href="!#"><img src="./img/c04.jpg" alt="" /></a></li>
                                    <li className="slide slide1"><a href="!#"><img src="./img/c01.jpg" alt="" /></a></li>
                                    <li className="slide slide2"><a href="!#"><img src="./img/c02.jpg" alt="" /></a></li>
                                    <li className="slide slide3"><a href="!#"><img src="./img/c05.jpg" alt="" /></a></li>
                                    <li className="slide slide4"><a href="!#"><img src="./img/c03.jpg" alt="" /></a></li>
                                    <li className="slide slide5"><a href="!#"><img src="./img/c06.jpg" alt="" /></a></li>
                                    <li className="slide slide6"><a href="!#"><img src="./img/c07.jpg" alt="" /></a></li>
                                    <li className="slide slide7"><a href="!#"><img src="./img/c04.jpg" alt="" /></a></li>
                                    <li className="slide slide1"><a href="!#"><img src="./img/c01.jpg" alt="" /></a></li>
                                </ul>
                            </div>
                        </div>
                        <a className='prev-btn' href="!#"><img src="./img/prev_arrow_btn.png" alt="" /></a>
                        <a className='next-btn' href="!#"><img src="./img/next_arrow_btn.png" alt="" /></a>
                        <div className="page-btn-box">
                            <a className='page-btn blind on' href="!#">page1</a>
                            <a className='page-btn blind' href="!#">page2</a>
                            <a className='page-btn blind' href="!#">page3</a>
                            <a className='page-btn blind' href="!#">page4</a>
                            <a className='page-btn blind' href="!#">page5</a>
                            <a className='page-btn blind' href="!#">page6</a>
                            <a className='page-btn blind' href="!#">page7</a>
                        </div>
                    </div>
                    <div className="title">
                        <h2>캐릭터</h2>
                    </div>
                    <div className="main-category">
                        <ul>
                            <li><a href="!#">허비</a></li>
                            <i>/</i>
                            <li><a href="!#">티토</a></li>
                            <i>/</i>
                            <li><a href="!#">맛깨비</a></li>
                            <i>/</i>
                            <li><a href="!#">예쓰</a></li>
                            <i>/</i>
                            <li><a href="!#">차유식</a></li>
                            <i>/</i>
                            <li><a href="!#">RO(로)</a></li>
                            <i>/</i>
                            <li><a href="!#">맘두</a></li>
                        </ul>
                    </div>
                    <div className="content">
                        <div className="content-title">
                            <div className="category-box">
                                <p><a href="!#">캐릭터</a></p>
                                <i>/</i>
                                <div className="sub-category">
                                    <a href="!#"><span>모두보기</span></a>
                                    <div>
                                        <ul>
                                            <li><a href="!#">모두보기</a></li>
                                            <li><a href="!#">허비</a></li>
                                            <li><a href="!#">티토</a></li>
                                            <li><a href="!#">맛깨비</a></li>
                                            <li><a href="!#">예쓰</a></li>
                                            <li><a href="!#">차유식</a></li>
                                            <li><a href="!#">RO(로)</a></li>
                                            <li><a href="!#">맘두</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <p><strong>35</strong>개</p>
                            <div className="sort-by">
                                <a href="!#"><span>정렬 기준</span></a>
                                <div>
                                    <ul>
                                        <li><a href="!#">신상품</a></li>
                                        <li><a href="!#">상품명</a></li>
                                        <li><a href="!#">낮은가격</a></li>
                                        <li><a href="!#">높은가격</a></li>
                                        <li><a href="!#">인기상품</a></li>
                                        <li><a href="!#">사용후기</a></li>
                                        <li><a href="!#">좋아요</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="content-list">
                            <ul>
                                <li>
                                    <a href="!#">
                                        <figure><img src="./img/3cf5520443fbd27a3e113be86077b3f0.jpg" alt="" /></figure>
                                        <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                    </a>
                                    <div>
                                        <h3><a href="!#">자가비 케첩맛 45g</a></h3>
                                        <span className='rate-price'>20<em>% </em></span><span className='sale-price'>2,000<em>원</em></span><span className='price'>2,000<em>원</em></span>
                                        <strong>쿠폰 적용시 <em>1,600원</em></strong>
                                        <em>감자튀김</em><em>케첩맛</em>
                                    </div>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure><img src="./img/23ce6e81d8a93f0c01cfc96f7db31c6b.png" alt="" /></figure>
                                        <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                    </a>
                                    <div>
                                        <h3><a href="!#">홈런볼바나나스플릿</a></h3>
                                        <span className='rate-price'>20<em>% </em></span><span className='sale-price'>2,000<em>원</em></span><span className='price'>2,000<em>원</em></span>
                                        <strong>쿠폰 적용시 <em>1,600원</em></strong>
                                        <em>바나나&딸기크림 쏘옥</em>
                                    </div>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure><img src="./img/8b317c6d383fb98a81a5ffd09e215659.jpg" alt="" /></figure>
                                        <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                    </a>
                                    <div>
                                        <h3><a href="!#">자유시간 쿠키앤크림 30g</a></h3>
                                        <span className='rate-price'>20<em>% </em></span><span className='sale-price'>1,000<em>원</em></span><span className='price'>1,000<em>원</em></span>
                                        <strong>쿠폰 적용시 <em>800원</em></strong>
                                    </div>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure><img src="./img/b8f076acb88170402868dccb56b55c86.jpg" alt="" /></figure>
                                        <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                    </a>
                                    <div>
                                        <h3><a href="!#">에이스 에스프레소 콘파냐</a></h3>
                                        <span className='rate-price'>20<em>% </em></span><span className='sale-price'>4,800<em>원</em></span><span className='price'>4,800<em>원</em></span>
                                        <strong>쿠폰 적용시 <em>3,840원</em></strong>
                                        <b>쌉쌀한,커피맛에 크림을 더한</b>
                                    </div>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure><img src="./img/3cf5520443fbd27a3e113be86077b3f0.jpg" alt="" /></figure>
                                        <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                    </a>
                                    <div>
                                        <h3><a href="!#">자가비 케첩맛 45g</a></h3>
                                        <span className='rate-price'>20<em>% </em></span><span className='sale-price'>2,000<em>원</em></span><span className='price'>2,000<em>원</em></span>
                                        <strong>쿠폰 적용시 <em>1,600원</em></strong>
                                        <em>감자튀김</em><em>케첩맛</em>
                                    </div>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure><img src="./img/23ce6e81d8a93f0c01cfc96f7db31c6b.png" alt="" /></figure>
                                        <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                    </a>
                                    <div>
                                        <h3><a href="!#">홈런볼바나나스플릿</a></h3>
                                        <span className='rate-price'>20<em>% </em></span><span className='sale-price'>2,000<em>원</em></span><span className='price'>2,000<em>원</em></span>
                                        <strong>쿠폰 적용시 <em>1,600원</em></strong>
                                        <em>바나나&딸기크림 쏘옥</em>
                                    </div>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure><img src="./img/8b317c6d383fb98a81a5ffd09e215659.jpg" alt="" /></figure>
                                        <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                    </a>
                                    <div>
                                        <h3><a href="!#">자유시간 쿠키앤크림 30g</a></h3>
                                        <span className='rate-price'>20<em>% </em></span><span className='sale-price'>1,000<em>원</em></span><span className='price'>1,000<em>원</em></span>
                                        <strong>쿠폰 적용시 <em>800원</em></strong>
                                    </div>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure><img src="./img/b8f076acb88170402868dccb56b55c86.jpg" alt="" /></figure>
                                        <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                    </a>
                                    <div>
                                        <h3><a href="!#">에이스 에스프레소 콘파냐</a></h3>
                                        <span className='rate-price'>20<em>% </em></span><span className='sale-price'>4,800<em>원</em></span><span className='price'>4,800<em>원</em></span>
                                        <strong>쿠폰 적용시 <em>3,840원</em></strong>
                                        <b>쌉쌀한,커피맛에 크림을 더한</b>
                                    </div>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure><img src="./img/3cf5520443fbd27a3e113be86077b3f0.jpg" alt="" /></figure>
                                        <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                    </a>
                                    <div>
                                        <h3><a href="!#">자가비 케첩맛 45g</a></h3>
                                        <span className='rate-price'>20<em>% </em></span><span className='sale-price'>2,000<em>원</em></span><span className='price'>2,000<em>원</em></span>
                                        <strong>쿠폰 적용시 <em>1,600원</em></strong>
                                        <em>감자튀김</em><em>케첩맛</em>
                                    </div>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure><img src="./img/23ce6e81d8a93f0c01cfc96f7db31c6b.png" alt="" /></figure>
                                        <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                    </a>
                                    <div>
                                        <h3><a href="!#">홈런볼바나나스플릿</a></h3>
                                        <span className='rate-price'>20<em>% </em></span><span className='sale-price'>2,000<em>원</em></span><span className='price'>2,000<em>원</em></span>
                                        <strong>쿠폰 적용시 <em>1,600원</em></strong>
                                        <em>바나나&딸기크림 쏘옥</em>
                                    </div>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure><img src="./img/8b317c6d383fb98a81a5ffd09e215659.jpg" alt="" /></figure>
                                        <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                    </a>
                                    <div>
                                        <h3><a href="!#">자유시간 쿠키앤크림 30g</a></h3>
                                        <span className='rate-price'>20<em>% </em></span><span className='sale-price'>1,000<em>원</em></span><span className='price'>1,000<em>원</em></span>
                                        <strong>쿠폰 적용시 <em>800원</em></strong>
                                    </div>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure><img src="./img/b8f076acb88170402868dccb56b55c86.jpg" alt="" /></figure>
                                        <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                    </a>
                                    <div>
                                        <h3><a href="!#">에이스 에스프레소 콘파냐</a></h3>
                                        <span className='rate-price'>20<em>% </em></span><span className='sale-price'>4,800<em>원</em></span><span className='price'>4,800<em>원</em></span>
                                        <strong>쿠폰 적용시 <em>3,840원</em></strong>
                                        <b>쌉쌀한,커피맛에 크림을 더한</b>
                                    </div>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure><img src="./img/3cf5520443fbd27a3e113be86077b3f0.jpg" alt="" /></figure>
                                        <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                    </a>
                                    <div>
                                        <h3><a href="!#">자가비 케첩맛 45g</a></h3>
                                        <span className='rate-price'>20<em>% </em></span><span className='sale-price'>2,000<em>원</em></span><span className='price'>2,000<em>원</em></span>
                                        <strong>쿠폰 적용시 <em>1,600원</em></strong>
                                        <em>감자튀김</em><em>케첩맛</em>
                                    </div>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure><img src="./img/23ce6e81d8a93f0c01cfc96f7db31c6b.png" alt="" /></figure>
                                        <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                    </a>
                                    <div>
                                        <h3><a href="!#">홈런볼바나나스플릿</a></h3>
                                        <span className='rate-price'>20<em>% </em></span><span className='sale-price'>2,000<em>원</em></span><span className='price'>2,000<em>원</em></span>
                                        <strong>쿠폰 적용시 <em>1,600원</em></strong>
                                        <em>바나나&딸기크림 쏘옥</em>
                                    </div>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure><img src="./img/8b317c6d383fb98a81a5ffd09e215659.jpg" alt="" /></figure>
                                        <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                    </a>
                                    <div>
                                        <h3><a href="!#">자유시간 쿠키앤크림 30g</a></h3>
                                        <span className='rate-price'>20<em>% </em></span><span className='sale-price'>1,000<em>원</em></span><span className='price'>1,000<em>원</em></span>
                                        <strong>쿠폰 적용시 <em>800원</em></strong>
                                    </div>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure><img src="./img/b8f076acb88170402868dccb56b55c86.jpg" alt="" /></figure>
                                        <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                    </a>
                                    <div>
                                        <h3><a href="!#">에이스 에스프레소 콘파냐</a></h3>
                                        <span className='rate-price'>20<em>% </em></span><span className='sale-price'>4,800<em>원</em></span><span className='price'>4,800<em>원</em></span>
                                        <strong>쿠폰 적용시 <em>3,840원</em></strong>
                                        <b>쌉쌀한,커피맛에 크림을 더한</b>
                                    </div>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure><img src="./img/3cf5520443fbd27a3e113be86077b3f0.jpg" alt="" /></figure>
                                        <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                    </a>
                                    <div>
                                        <h3><a href="!#">자가비 케첩맛 45g</a></h3>
                                        <span className='rate-price'>20<em>% </em></span><span className='sale-price'>2,000<em>원</em></span><span className='price'>2,000<em>원</em></span>
                                        <strong>쿠폰 적용시 <em>1,600원</em></strong>
                                        <em>감자튀김</em><em>케첩맛</em>
                                    </div>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure><img src="./img/23ce6e81d8a93f0c01cfc96f7db31c6b.png" alt="" /></figure>
                                        <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                    </a>
                                    <div>
                                        <h3><a href="!#">홈런볼바나나스플릿</a></h3>
                                        <span className='rate-price'>20<em>% </em></span><span className='sale-price'>2,000<em>원</em></span><span className='price'>2,000<em>원</em></span>
                                        <strong>쿠폰 적용시 <em>1,600원</em></strong>
                                        <em>바나나&딸기크림 쏘옥</em>
                                    </div>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure><img src="./img/8b317c6d383fb98a81a5ffd09e215659.jpg" alt="" /></figure>
                                        <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                    </a>
                                    <div>
                                        <h3><a href="!#">자유시간 쿠키앤크림 30g</a></h3>
                                        <span className='rate-price'>20<em>% </em></span><span className='sale-price'>1,000<em>원</em></span><span className='price'>1,000<em>원</em></span>
                                        <strong>쿠폰 적용시 <em>800원</em></strong>
                                    </div>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure><img src="./img/b8f076acb88170402868dccb56b55c86.jpg" alt="" /></figure>
                                        <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                    </a>
                                    <div>
                                        <h3><a href="!#">에이스 에스프레소 콘파냐</a></h3>
                                        <span className='rate-price'>20<em>% </em></span><span className='sale-price'>4,800<em>원</em></span><span className='price'>4,800<em>원</em></span>
                                        <strong>쿠폰 적용시 <em>3,840원</em></strong>
                                        <b>쌉쌀한,커피맛에 크림을 더한</b>
                                    </div>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure><img src="./img/3cf5520443fbd27a3e113be86077b3f0.jpg" alt="" /></figure>
                                        <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                    </a>
                                    <div>
                                        <h3><a href="!#">자가비 케첩맛 45g</a></h3>
                                        <span className='rate-price'>20<em>% </em></span><span className='sale-price'>2,000<em>원</em></span><span className='price'>2,000<em>원</em></span>
                                        <strong>쿠폰 적용시 <em>1,600원</em></strong>
                                        <em>감자튀김</em><em>케첩맛</em>
                                    </div>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure><img src="./img/23ce6e81d8a93f0c01cfc96f7db31c6b.png" alt="" /></figure>
                                        <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                    </a>
                                    <div>
                                        <h3><a href="!#">홈런볼바나나스플릿</a></h3>
                                        <span className='rate-price'>20<em>% </em></span><span className='sale-price'>2,000<em>원</em></span><span className='price'>2,000<em>원</em></span>
                                        <strong>쿠폰 적용시 <em>1,600원</em></strong>
                                        <em>바나나&딸기크림 쏘옥</em>
                                    </div>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure><img src="./img/8b317c6d383fb98a81a5ffd09e215659.jpg" alt="" /></figure>
                                        <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                    </a>
                                    <div>
                                        <h3><a href="!#">자유시간 쿠키앤크림 30g</a></h3>
                                        <span className='rate-price'>20<em>% </em></span><span className='sale-price'>1,000<em>원</em></span><span className='price'>1,000<em>원</em></span>
                                        <strong>쿠폰 적용시 <em>800원</em></strong>
                                    </div>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure><img src="./img/b8f076acb88170402868dccb56b55c86.jpg" alt="" /></figure>
                                        <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                    </a>
                                    <div>
                                        <h3><a href="!#">에이스 에스프레소 콘파냐</a></h3>
                                        <span className='rate-price'>20<em>% </em></span><span className='sale-price'>4,800<em>원</em></span><span className='price'>4,800<em>원</em></span>
                                        <strong>쿠폰 적용시 <em>3,840원</em></strong>
                                        <b>쌉쌀한,커피맛에 크림을 더한</b>
                                    </div>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure><img src="./img/3cf5520443fbd27a3e113be86077b3f0.jpg" alt="" /></figure>
                                        <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                    </a>
                                    <div>
                                        <h3><a href="!#">자가비 케첩맛 45g</a></h3>
                                        <span className='rate-price'>20<em>% </em></span><span className='sale-price'>2,000<em>원</em></span><span className='price'>2,000<em>원</em></span>
                                        <strong>쿠폰 적용시 <em>1,600원</em></strong>
                                        <em>감자튀김</em><em>케첩맛</em>
                                    </div>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure><img src="./img/23ce6e81d8a93f0c01cfc96f7db31c6b.png" alt="" /></figure>
                                        <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                    </a>
                                    <div>
                                        <h3><a href="!#">홈런볼바나나스플릿</a></h3>
                                        <span className='rate-price'>20<em>% </em></span><span className='sale-price'>2,000<em>원</em></span><span className='price'>2,000<em>원</em></span>
                                        <strong>쿠폰 적용시 <em>1,600원</em></strong>
                                        <em>바나나&딸기크림 쏘옥</em>
                                    </div>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure><img src="./img/8b317c6d383fb98a81a5ffd09e215659.jpg" alt="" /></figure>
                                        <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                    </a>
                                    <div>
                                        <h3><a href="!#">자유시간 쿠키앤크림 30g</a></h3>
                                        <span className='rate-price'>20<em>% </em></span><span className='sale-price'>1,000<em>원</em></span><span className='price'>1,000<em>원</em></span>
                                        <strong>쿠폰 적용시 <em>800원</em></strong>
                                    </div>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure><img src="./img/b8f076acb88170402868dccb56b55c86.jpg" alt="" /></figure>
                                        <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                    </a>
                                    <div>
                                        <h3><a href="!#">에이스 에스프레소 콘파냐</a></h3>
                                        <span className='rate-price'>20<em>% </em></span><span className='sale-price'>4,800<em>원</em></span><span className='price'>4,800<em>원</em></span>
                                        <strong>쿠폰 적용시 <em>3,840원</em></strong>
                                        <b>쌉쌀한,커피맛에 크림을 더한</b>
                                    </div>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure><img src="./img/b8f076acb88170402868dccb56b55c86.jpg" alt="" /></figure>
                                        <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                    </a>
                                    <div>
                                        <h3><a href="!#">에이스 에스프레소 콘파냐</a></h3>
                                        <span className='rate-price'>20<em>% </em></span><span className='sale-price'>4,800<em>원</em></span><span className='price'>4,800<em>원</em></span>
                                        <strong>쿠폰 적용시 <em>3,840원</em></strong>
                                        <b>쌉쌀한,커피맛에 크림을 더한</b>
                                    </div>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure><img src="./img/b8f076acb88170402868dccb56b55c86.jpg" alt="" /></figure>
                                        <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                    </a>
                                    <div>
                                        <h3><a href="!#">에이스 에스프레소 콘파냐</a></h3>
                                        <span className='rate-price'>20<em>% </em></span><span className='sale-price'>4,800<em>원</em></span><span className='price'>4,800<em>원</em></span>
                                        <strong>쿠폰 적용시 <em>3,840원</em></strong>
                                        <b>쌉쌀한,커피맛에 크림을 더한</b>
                                    </div>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure><img src="./img/b8f076acb88170402868dccb56b55c86.jpg" alt="" /></figure>
                                        <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                    </a>
                                    <div>
                                        <h3><a href="!#">에이스 에스프레소 콘파냐</a></h3>
                                        <span className='rate-price'>20<em>% </em></span><span className='sale-price'>4,800<em>원</em></span><span className='price'>4,800<em>원</em></span>
                                        <strong>쿠폰 적용시 <em>3,840원</em></strong>
                                        <b>쌉쌀한,커피맛에 크림을 더한</b>
                                    </div>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure><img src="./img/b8f076acb88170402868dccb56b55c86.jpg" alt="" /></figure>
                                        <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                    </a>
                                    <div>
                                        <h3><a href="!#">에이스 에스프레소 콘파냐</a></h3>
                                        <span className='rate-price'>20<em>% </em></span><span className='sale-price'>4,800<em>원</em></span><span className='price'>4,800<em>원</em></span>
                                        <strong>쿠폰 적용시 <em>3,840원</em></strong>
                                        <b>쌉쌀한,커피맛에 크림을 더한</b>
                                    </div>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure><img src="./img/b8f076acb88170402868dccb56b55c86.jpg" alt="" /></figure>
                                        <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                    </a>
                                    <div>
                                        <h3><a href="!#">에이스 에스프레소 콘파냐</a></h3>
                                        <span className='rate-price'>20<em>% </em></span><span className='sale-price'>4,800<em>원</em></span><span className='price'>4,800<em>원</em></span>
                                        <strong>쿠폰 적용시 <em>3,840원</em></strong>
                                        <b>쌉쌀한,커피맛에 크림을 더한</b>
                                    </div>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure><img src="./img/b8f076acb88170402868dccb56b55c86.jpg" alt="" /></figure>
                                        <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                    </a>
                                    <div>
                                        <h3><a href="!#">에이스 에스프레소 콘파냐</a></h3>
                                        <span className='rate-price'>20<em>% </em></span><span className='sale-price'>4,800<em>원</em></span><span className='price'>4,800<em>원</em></span>
                                        <strong>쿠폰 적용시 <em>3,840원</em></strong>
                                        <b>쌉쌀한,커피맛에 크림을 더한</b>
                                    </div>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure><img src="./img/b8f076acb88170402868dccb56b55c86.jpg" alt="" /></figure>
                                        <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                    </a>
                                    <div>
                                        <h3><a href="!#">에이스 에스프레소 콘파냐</a></h3>
                                        <span className='rate-price'>20<em>% </em></span><span className='sale-price'>4,800<em>원</em></span><span className='price'>4,800<em>원</em></span>
                                        <strong>쿠폰 적용시 <em>3,840원</em></strong>
                                        <b>쌉쌀한,커피맛에 크림을 더한</b>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="pagenation">
                        <a href="!#"><img src="./img/btn_page_prev.gif" alt="" /></a>
                        <a href="!#">1</a>
                        <a href="!#"><img src="./img/btn_page_next.gif" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};