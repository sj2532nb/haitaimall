import React from 'react';
import './scss/section2.scss';

export default function Section2Component(){
    return (
        <section id="section2">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>신상품</h2>
                    </div>
                    <div className="content">
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
                        </ul>
                    </div>
                    <div className="more-btn-box">
                        <button type='button'>더보기 +</button>
                    </div>
                </div>
            </div>
        </section>
    );
};