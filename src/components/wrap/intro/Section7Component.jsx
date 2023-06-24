import React from 'react';
import './scss/section7.scss';

export default function Section7Component(){
    return (
        <section id="section7">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>MD's Pick</h2>
                    </div>
                    <div className="content">
                        <ul>
                            <li>
                                <a href="!#">
                                    <figure><img src="./img/93aeb133f4435fc3b5d8f52f283d38ac.jpg" alt="" /></figure>
                                    <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                </a>
                                <div>
                                    <h3><a href="!#">오예스 모음전</a></h3>
                                    <span className='rate-price'>20<em>% </em></span><span className='sale-price'>19,200<em>원</em></span><span className='price'>24,000<em>원</em></span>
                                    <b>내 최애 오예스맛을 골라골라!</b>
                                    <em>리얼케이크</em><em>오예스</em>
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
                                    <b>부러운 슈 속에 초코크림이 가득!</b>
                                    <em>대한민국 No1</em><em> 최대판매</em>
                                </div>
                            </li>
                            <li>
                                <a href="!#">
                                    <figure><img src="./img/2add091ba04c461df1b5e8cfe05cb36a.jpg" alt="" /></figure>
                                    <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                </a>
                                <div>
                                    <h3><a href="!#">2023년 화목 선물세트</a></h3>
                                    <span className='rate-price'>20<em>% </em></span><span className='sale-price'>16,900<em>원</em></span><span className='price'>21,000<em>원</em></span>
                                    <b>모두가 좋아하는 달콤한 선물</b>
                                    <em>푸짐한</em><em>과자선물</em>
                                </div>
                            </li>
                            <li>
                                <a href="!#">
                                    <figure><img src="./img/cc2fea5bcdb99c04813c4c2407446681.jpg" alt="" /></figure>
                                    <span className='cart-img'><img src="./img/icon_cart.svg" alt="" /></span>
                                </a>
                                <div>
                                    <h3><a href="!#">세계테마여행X 연양갱</a></h3>
                                    <span className='rate-price'>10<em>% </em></span><span className='sale-price'>6,750<em>원</em></span><span className='price'>7,500<em>원</em></span>
                                    <b>국내 최장수 과자!Since 1945</b>
                                    <em>당충전</em><em>국민간식</em>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};