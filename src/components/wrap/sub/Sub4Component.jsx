import React from 'react';
import './scss/sub4.scss';

export default function Sub4Component(){

    const [isSortBy, setIsSortBy] = React.useState(false);

    const onClickSortBy=(e)=>{
        e.preventDefault();
        if(isSortBy===true){
            setIsSortBy(false);
        }
        else{
            setIsSortBy(true);
        }
    }



    return (
        <div id='sub4'>
            <div className="container">
                <div className="gap">
                    <div className="event-section">
                        <ul>
                            <li><img src="./img/gift_01.png" alt="" /></li>
                            <li><img src="./img/gift_02.png" alt="" /></li>
                            <li><img src="./img/gift_03.png" alt="" /></li>
                        </ul>
                    </div>
                    <div className="title">
                        <h2>선물하기🎁</h2>
                    </div>
                    <div className="content">
                        <div className="content-title">
                            <div className="category-box">
                                <p><a href="!#">선물하기🎁</a></p>
                            </div>
                            <p><strong>8</strong>개</p>
                            <div className="sort-by">
                                <a onClick={onClickSortBy} href="!#"><span>정렬 기준</span></a>
                                {
                                    isSortBy &&
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
                                }
                            </div>
                        </div>
                        <div className="content-list">
                            <ul>
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