import React from 'react';
import './scss/sub6.scss';

export default function Sub6Component(){
    return (
        <div id='sub6'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>이벤트</h2>
                    </div>
                    <div className="main-category">
                        <ul>
                            <li><a href="!#">전체</a></li>
                            <i>|</i>
                            <li><a href="!#">진행중인 이벤트</a></li>
                            <i>|</i>
                            <li><a href="!#">종료된 이벤트</a></li>
                            <i>|</i>
                            <li><a href="!#">당첨자 발표</a></li>
                        </ul>
                    </div>
                    <div className="content">
                        <ul>
                            <li>
                                <a href="!#">
                                    <figure><img src="./img/b7f7fc78607356780dc90a355f5b2a71.jpg" alt="" /></figure>
                                </a>
                                <div>
                                    <h3><a href="!#">해태몰 선물하기 오픈 이벤트</a></h3>
                                </div>
                            </li>
                            <li>
                                <a href="!#">
                                    <figure><img src="./img/3cc2fbd396ad46f0c5f0360745f12f02.jpg" alt="" /></figure>
                                </a>
                                <div>
                                    <h3><a href="!#">마케팅 수신동의 시 적립금 증정 이벤트</a></h3>
                                    <p>참여 : [2]</p>
                                </div>
                            </li>
                            <li>
                                <a href="!#">
                                    <figure><img src="./img/2b32baef1f3f1efca39e448480a5dc52.jpg" alt="" /></figure>
                                </a>
                                <div>
                                    <h3><a href="!#">해태몰 회원만을 위한 혜택 안내</a></h3>
                                    <p>참여 : [2]</p>
                                </div>
                            </li>
                        </ul>
                        <div className="pagenation">
                            <a href="!#"><img src="./img/btn_page_prev.gif" alt="" /></a>
                            <a href="!#">1</a>
                            <a href="!#"><img src="./img/btn_page_next.gif" alt="" /></a>
                        </div>
                    </div>
                    <form>
                        <select name="event-search-select" id="eventSearchSelect">
                            <option value="제목">제목</option>
                            <option value="내용">내용</option>
                            <option value="글쓴이">글쓴이</option>
                            <option value="아이디">아이디</option>
                            <option value="별명">별명</option>
                        </select>
                        <input type="text" name='event-search' id='eventSearch' />
                        <button type='button'>찾기</button>
                    </form>
                </div>
            </div>
        </div>
    );
};