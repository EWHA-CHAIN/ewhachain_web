import React, {useState} from 'react';

const Main2 = () => {
  const [item1,setItem1] = useState(false)
  const [item2,setItem2] = useState(false)
  const [item3,setItem3] = useState(false)
  const [item4,setItem4] = useState(false)
  return(
    <section id="main2" className="page">
      <div className="tit">OUR ACTIVITY</div>
      <div className="sub_tit">체계화된 커리큘럼을 기반으로 다방면의 활동 진행</div>
      <div className="act_container">
        <div className="act_item item1">
          <p className="item_tit"
             onMouseOver={()=>setItem1(true)}
             onMouseLeave={()=>setItem1(false)}>
            { item1? <div className="multi">매주 월요일<br/><b>블록체인 코어</b> 스터디</div> : 'WEEKLY SESSION' }</p>
        </div>
        <div className="act_item item2">
          <p className="item_tit"
             onMouseOver={()=>setItem2(true)}
             onMouseLeave={()=>setItem2(false)}
          >{ item2? <div className="multi"><b>해커톤</b> 및<br/>각종 <b>공모전</b> 참가</div> : 'PROJECT' }</p>
        </div>
        <div className="act_item item3">
          <p className="item_tit"
             onMouseOver={()=>setItem3(true)}
             onMouseLeave={()=>setItem3(false)}
          >{ item3? <div className="multi">국내 기업・대학 연합<br/><b>블록체인 네트워크 참가</b></div> : 'NETWORKING' }</p>
        </div>
        <div className="act_item item4" >
          <p className="item_tit"
             onMouseOver={()=>setItem4(true)}
             onMouseLeave={()=>setItem4(false)}
          >{ item4? <div className="multi">세션 프로젝트, 세미나 등<br/><b>medium에 기사 작성</b></div> : 'WRITING' }</p>
        </div>
      </div>
    </section>
  )
}

export default Main2