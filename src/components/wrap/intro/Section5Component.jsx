import React from 'react';
import './scss/section5.scss';

export default function Section5Component(){
    return (
        <section id="section5">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>BEST PRODUCT</h2>
                    </div>
                    <div className="content">
                        <ul>
                            <li>
                                <a href="!#">
                                    <figure><img src="./img/ad33ccde5ec8fda252649b32c5540e51.jpg" alt="" /></figure>
                                    <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                </a>
                                <div>
                                    <h3><a href="!#">2023년 행복 선물세트</a></h3>
                                    <span className='rate-price'>32<em>% </em></span><span className='sale-price'>30,000<em>원</em></span><span className='price'>43,800<em>원</em></span>
                                    <br />
                                    <em>달달한</em><em>선물세트</em>
                                </div>
                            </li>
                            <li>
                                <a href="!#">
                                    <figure><img src="./img/20f6870718b04cbe6c3df07acb40f898.jpg" alt="" /></figure>
                                    <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                </a>
                                <div>
                                    <h3><a href="!#">[만두]명절세트</a></h3>
                                    <span className='rate-price'>25<em>% </em></span><span className='sale-price'>30,000<em>원</em></span><span className='price'>39,750<em>원</em></span>
                                    <br />
                                    <em>명절선물</em><em>푸짐해요</em>
                                </div>
                            </li>
                            <li>
                                <a href="!#">
                                    <figure><img src="./img/c7de00613bbdef7fb346353aa0f67f7d.jpg" alt="" /></figure>
                                    <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                </a>
                                <div>
                                    <h3><a href="!#">홈런볼 모음전</a></h3>
                                    <span className='rate-price'>20<em>% </em></span><span className='sale-price'>12,200<em>원</em></span><span className='price'>15,300<em>원</em></span>
                                    <br />
                                    <em>대한민국 No1</em><em> 최대판매</em>
                                </div>
                            </li>
                            <li>
                                <a href="!#">
                                    <figure><img src="./img/fc43630f39ae0c125c33d4c9f1ecc84a.jpg" alt="" /></figure>
                                    <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                </a>
                                <div>
                                    <h3><a href="!#">에이스 모음전</a></h3>
                                    <span className='rate-price'>20<em>% </em></span><span className='sale-price'>15,300<em>원</em></span><span className='price'>19,200<em>원</em></span>
                                    <br />
                                    <em>커피와함께</em><em>뉴욕치즈케익</em>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};