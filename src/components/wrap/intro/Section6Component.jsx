import React from 'react';
import './scss/section6.scss';
import $ from 'jquery';

export default function Section6Component(){

    React.useEffect(()=>{

        const $slideWrap = $('#section6 .slide-wrap');
        const $prevBtn = $('#section6 .prev-btn');
        const $nextBtn = $('#section6 .next-btn');
        let cnt=0;
        let setId=0;

        function mainSlide(){
            $slideWrap.stop().animate({left: `${-100*cnt}%`}, 0, function(){
                if(cnt>1) cnt=0;
                if(cnt<0) cnt=1;
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
        <section id="section6">
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="slide-container">
                            <div className="slide-view">
                                <ul className="slide-wrap">
                                    <li className="slide slide2"><a href="!#"><img src="./img/bn_main2_1.jpg" alt="" /></a></li>
                                    <li className="slide slide1"><a href="!#"><img src="./img/bn_main2_1.jpg" alt="" /></a></li>
                                    <li className="slide slide2"><a href="!#"><img src="./img/bn_main2_1.jpg" alt="" /></a></li>
                                </ul>
                            </div>
                        </div>
                        <a className='prev-btn' href="!#"><img src="./img/prev_arrow_btn.png" alt="" /></a>
                        <a className='next-btn' href="!#"><img src="./img/next_arrow_btn.png" alt="" /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};