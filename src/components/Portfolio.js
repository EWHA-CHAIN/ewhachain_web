import React from 'react';
import port2 from '../static/image/port2.png';
import port3 from '../static/image/port3.png';
import port4 from '../static/image/port4.png';

const Portfolio = () => {
  return (
    <div id="Portfolio" className="page">
      <div className="top">
        <div className="main_tit">PORTFOLIO</div>
        <div className="tit_line"/>
        <section className="year_info">
          <div className="info">
            <div className="year">2019</div>
            <div className="year_text">
              <div className="detail">3rd<br/>WELCOME to MAKERS WORLD<br/>SW/HW 통합 특별상 수상</div>
              <div className="detail">3rd<br/>한국통신학 추계종합학술대회<br/>학부논문경진대 장려상 수상</div>
              <div className="detail">OCF 개발자 경진대회<br/>대상 수상</div>
            </div>
          </div>
          <div className="info">
            <div className="year">2020</div>
            <div className="year_text">
              <div className="detail">NAVER AI BURNING DAY<br/>해커톤 본선 진출</div>
            </div>
          </div>

        </section>
      </div>
      <div className="opacity"/>
      <div className="port"><img src={port2}/></div>
      <div className="port"><img src={port3}/></div>
      <div className="port"><img src={port4}/></div>
    </div>
  )
}

export default Portfolio