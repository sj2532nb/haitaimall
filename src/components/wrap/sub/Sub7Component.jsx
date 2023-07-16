import React from 'react';
import './scss/sub7.scss';

export default function Sub7Component(){
    return (
        <div id='sub7'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>레시피</h2>
                    </div>
                    <div className="content">
                        <ul>
                            <li>
                                <a href="!#">
                                    <figure><img src="./img/80ec02ff0a35d55629f259cee2e25d7d.jpg" alt="" /></figure>
                                </a>
                                <div>
                                    <h3><a href="!#">허니버터칩 오지치즈후라이 진짜 오짐</a></h3>
                                </div>
                            </li>
                            <li>
                                <a href="!#">
                                    <figure><img src="./img/a94d797442b1315b05c4f54633cfb494.jpg" alt="" /></figure>
                                </a>
                                <div>
                                    <h3><a href="!#">에이스로 만든 티라미수</a></h3>
                                </div>
                            </li>
                            <li>
                                <a href="!#">
                                    <figure><img src="./img/185463c4d91835c752ab79857bf787fd.jpg" alt="" /></figure>
                                </a>
                                <div>
                                    <h3><a href="!#">웨하스로 만드는 시원달콤한 파르페</a></h3>
                                </div>
                            </li>
                            <li>
                                <a href="!#">
                                    <figure><img src="./img/80ec02ff0a35d55629f259cee2e25d7d.jpg" alt="" /></figure>
                                </a>
                                <div>
                                    <h3><a href="!#">허니버터칩 오지치즈후라이 진짜 오짐</a></h3>
                                </div>
                            </li>
                            <li>
                                <a href="!#">
                                    <figure><img src="./img/a94d797442b1315b05c4f54633cfb494.jpg" alt="" /></figure>
                                </a>
                                <div>
                                    <h3><a href="!#">에이스로 만든 티라미수</a></h3>
                                </div>
                            </li>
                            <li>
                                <a href="!#">
                                    <figure><img src="./img/185463c4d91835c752ab79857bf787fd.jpg" alt="" /></figure>
                                </a>
                                <div>
                                    <h3><a href="!#">웨하스로 만드는 시원달콤한 파르페</a></h3>
                                </div>
                            </li>
                            <li>
                                <a href="!#">
                                    <figure><img src="./img/80ec02ff0a35d55629f259cee2e25d7d.jpg" alt="" /></figure>
                                </a>
                                <div>
                                    <h3><a href="!#">허니버터칩 오지치즈후라이 진짜 오짐</a></h3>
                                </div>
                            </li>
                            <li>
                                <a href="!#">
                                    <figure><img src="./img/a94d797442b1315b05c4f54633cfb494.jpg" alt="" /></figure>
                                </a>
                                <div>
                                    <h3><a href="!#">에이스로 만든 티라미수</a></h3>
                                </div>
                            </li>
                            <li>
                                <a href="!#">
                                    <figure><img src="./img/185463c4d91835c752ab79857bf787fd.jpg" alt="" /></figure>
                                </a>
                                <div>
                                    <h3><a href="!#">웨하스로 만드는 시원달콤한 파르페</a></h3>
                                </div>
                            </li>
                            <li>
                                <a href="!#">
                                    <figure><img src="./img/80ec02ff0a35d55629f259cee2e25d7d.jpg" alt="" /></figure>
                                </a>
                                <div>
                                    <h3><a href="!#">허니버터칩 오지치즈후라이 진짜 오짐</a></h3>
                                </div>
                            </li>
                            <li>
                                <a href="!#">
                                    <figure><img src="./img/a94d797442b1315b05c4f54633cfb494.jpg" alt="" /></figure>
                                </a>
                                <div>
                                    <h3><a href="!#">에이스로 만든 티라미수</a></h3>
                                </div>
                            </li>
                            <li>
                                <a href="!#">
                                    <figure><img src="./img/185463c4d91835c752ab79857bf787fd.jpg" alt="" /></figure>
                                </a>
                                <div>
                                    <h3><a href="!#">웨하스로 만드는 시원달콤한 파르페</a></h3>
                                </div>
                            </li>
                            <li>
                                <a href="!#">
                                    <figure><img src="./img/80ec02ff0a35d55629f259cee2e25d7d.jpg" alt="" /></figure>
                                </a>
                                <div>
                                    <h3><a href="!#">허니버터칩 오지치즈후라이 진짜 오짐</a></h3>
                                </div>
                            </li>
                            <li>
                                <a href="!#">
                                    <figure><img src="./img/a94d797442b1315b05c4f54633cfb494.jpg" alt="" /></figure>
                                </a>
                                <div>
                                    <h3><a href="!#">에이스로 만든 티라미수</a></h3>
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