import React from 'react';
import $ from 'jquery';
import './scss/section1.scss';

export default function Section1Component(){

    React.useEffect(()=>{

        const $slideWrap = $('#section1 .slide-wrap');
        const $prevBtn = $('#section1 .prev-btn');
        const $nextBtn = $('#section1 .next-btn');
        let cnt=0;
        let setId=0;

        function mainSlide(){
            $slideWrap.stop().animate({left: `${-100*cnt}%`}, 200, function(){
                if(cnt>2) cnt=0;
                if(cnt<0) cnt=2;
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
        <section id="section1">
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="slide-container">
                            <div className="slide-view">
                                <ul className="slide-wrap">
                                    <li className="slide slide2"><a href="!#"><img src="./img/bn_main_gift.jpg" alt="" /></a></li>
                                    <li className="slide slide3"><a href="!#"><img src="./img/bn_main_agree.jpg" alt="" /></a></li>
                                    <li className="slide slide1"><a href="!#"><img src="./img/bn_main_visual16.jpg" alt="" /></a></li>
                                    <li className="slide slide2"><a href="!#"><img src="./img/bn_main_gift.jpg" alt="" /></a></li>
                                    <li className="slide slide3"><a href="!#"><img src="./img/bn_main_agree.jpg" alt="" /></a></li>
                                    <li className="slide slide1"><a href="!#"><img src="./img/bn_main_visual16.jpg" alt="" /></a></li>
                                    <li className="slide slide2"><a href="!#"><img src="./img/bn_main_gift.jpg" alt="" /></a></li>
                                    <li className="slide slide3"><a href="!#"><img src="./img/bn_main_agree.jpg" alt="" /></a></li>
                                    <li className="slide slide1"><a href="!#"><img src="./img/bn_main_visual16.jpg" alt="" /></a></li>
                                </ul>
                            </div>
                        </div>
                        <a className='prev-btn' href="!#"><img src="./img/prev_arrow_btn.png" alt="" /></a>
                        <a className='next-btn' href="!#"><img src="./img/next_arrow_btn.png" alt="" /></a>
                        <div className="page-btn-box">
                            <a className='page-btn blind on' href="!#">page1</a>
                            <a className='page-btn blind' href="!#">page2</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};