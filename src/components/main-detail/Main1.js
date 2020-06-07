import React, {useState} from 'react';
import mission from '../../static/image/mission.jpg'

const Main1 = () => {
  return(
    <section id="main1" className="page">
      <div className="left_sec">
        <div className="tit">OUR MISSION</div>
        <div className="sub_tit">넥스트 블록체인 네트워크 형성</div>
        <p className="mission">이화체인의 미션은 블록체인에 관심있는 사람들끼리 모여<br/>
        직접 블록체인 관련 프로젝트를 기획하고 개발할 수 있는<br/> <b>“차세대 블록체인 생태계 리더”</b>를 만드는 것입니다.</p>
      </div>
      <div className="right_sec">
        <div className="img"/>
      </div>
    </section>
  )
}

export default Main1