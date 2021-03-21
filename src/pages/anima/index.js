import React from 'react'
import { Header } from './Header'
import { PageContainer } from './PageContainer'
import { Tabs } from './ScreenSwitch'
import { Right } from './Right'
import './style.css'

function Anima() {
  return <CryptoBattleChart {...CryptoBattleChartData} />
}

export { Anima }

function CryptoBattleChart(props) {
  const {
    header,
    winningStreak,
    points,
    path1,
    ranking,
    username,
    winningStreak2,
    line1,
    number,
    surname,
    number2,
    group2,
    chart,
    group3,
    surname2,
    capture,
    overlapGroup,
    account_Circle_Black_24Dp,
    path4,
    giorgioJaparidze,
    account_Balance_Wallet_Black_24Dp1,
    path6,
    price,
    surname3,
    surname4,
    inputText,
    expand_More_Black_24Dp,
    path1207,
    inputText2,
    openPositions,
    line12,
    text109,
    path433,
    overlapGroup4,
    path436,
    path437,
    path438,
    path434,
    line64,
    path440,
    path442,
    path441,
    path468,
    path469,
    path470,
    path471,
    path472,
    path473,
    path474,
    line66,
    path476,
    line67,
    path477,
    line69,
    path479,
    line70,
    path480,
    line71,
    path481,
    group630,
    line65,
    path475,
    line68,
    path478,
    path443,
    path444,
    path445,
    path446,
    path448,
    path459,
    path460,
    path461,
    path462,
    path463,
    path464,
    path465,
    path466,
    path467,
    path450,
    path451,
    path452,
    path453,
    path454,
    path455,
    path456,
    path457,
    path458,
    path483,
    path484,
    path485,
    path486,
    path487,
    path488,
    group638,
    path490,
    line73,
    path492,
    line74,
    path493,
    line76,
    path495,
    line77,
    path496,
    line78,
    path497,
    line72,
    path491,
    line75,
    path494,
    buy,
    convert,
    place,
    shield_black_24dpProps,
    group9Props,
    group92Props,
    topLabelProps,
    topLabel2Props,
    topLabel3Props,
    brightness_4_black_24dpProps,
    brightness_4_black_24dp2Props  } = props

  return (
    <PageContainer>
      <Header header={header} />
      <div className="flex-row">
        <div className="overlap-group2 border-1px-alto">
          <div className="flex-row-1">
            <div className="left-tab-button active">
              <div className="winning-streak">{winningStreak}</div>
            </div>
            <div className="left-tab-button">
              <div className="points montserrat-normal-chicago-12px">
                {points}
              </div>
            </div>
          </div>
          <div className="overlap-group8">
            <img className="path-1" src={path1} />
            <div className="group-33 border-1px-alto">
              <div className="flex-row-2">
                <div className="ranking montserrat-light-chicago-12px">
                  {ranking}
                </div>
                <div className="username montserrat-light-chicago-12px">
                  {username}
                </div>
                <div className="winning-streak-1 montserrat-light-chicago-12px">
                  {winningStreak2}
                </div>
              </div>
              <div className="overlap-group3">
                <img className="line-1" src={line1} />
                <div className="scroll-group-1">
                  <div className="overlap-group4">
                    <div className="rectangle-5"></div>
                    <div className="group-8">
                      <div className="group-7">
                        <div className="overlap-group5-1">
                          <Shield_black_24dp
                            shield_Black_24Dp={
                              shield_black_24dpProps.shield_Black_24Dp
                            }
                            path2={shield_black_24dpProps.path2}
                          />
                          <div className="number montserrat-black-white-10px">
                            {number}
                          </div>
                        </div>
                      </div>
                      <div className="surname montserrat-normal-chicago-12px">
                        {surname}
                      </div>
                      <div className="number-7 montserrat-medium-chicago-12px">
                        {number2}
                      </div>
                    </div>
                    <Group9
                      number={group9Props.number}
                      shortUsername={group9Props.shortUsername}
                      number2={group9Props.number2}
                      shield_black_24dpProps={
                        group9Props.shield_black_24dpProps
                      }
                    />
                    <Group9
                      number={group92Props.number}
                      shortUsername={group92Props.shortUsername}
                      number2={group92Props.number2}
                      shield_black_24dpProps={
                        group92Props.shield_black_24dpProps
                      }
                      className="group-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Tabs
          surname2={surname2}
          group2={group2}
          chart={chart}
          group3={group3}
          capture={capture}
        />
        <Right
          account_Balance_Wallet_Black_24Dp1={account_Balance_Wallet_Black_24Dp1}
          account_Circle_Black_24Dp={account_Circle_Black_24Dp}
          brightness_4_black_24dp2Props={brightness_4_black_24dp2Props}
          brightness_4_black_24dpProps={brightness_4_black_24dpProps}
          expand_More_Black_24Dp={expand_More_Black_24Dp}
          giorgioJaparidze={giorgioJaparidze}
          inputText={inputText}
          inputText2={inputText2}
          overlapGroup={overlapGroup}
          path1207={path1207}
          path4={path4}
          path6={path6}
          price={price}
          surname3={surname3}
          surname4={surname4}
          topLabel2Props={topLabel2Props}
          topLabel3Props={topLabel3Props}
          topLabelProps={topLabelProps}
        />
      </div>
      <div className="flex-row-5">
        <div className="overlap-group1">
          <div className="group-565 border-1px-alto">
            <div className="open-positions montserrat-bold-chicago-12px">
              {openPositions}
            </div>
            <img className="line-1-1" src={line12} />
          </div>
        </div>
        <div className="group-651 border-1px-alto">
          <div className="text-109 montserrat-bold-chicago-12px">{text109}</div>
          <div className="group-650">
            <div className="overlap-group3-3">
              <img className="path-433" src={path433} />
              <div className="group-586">
                <div className="overlap-group-8">
                  <div
                    className="overlap-group4-4"
                    style={{ backgroundImage: `url(${overlapGroup4})` }}>
                    <img className="path-436" src={path436} />
                  </div>
                  <div className="overlap-group5-4">
                    <img className="path-437" src={path437} />
                    <img className="path-438" src={path438} />
                  </div>
                </div>
                <img className="path-434" src={path434} />
              </div>
              <div className="group-588">
                <div className="overlap-group6-2">
                  <img className="line-64" src={line64} />
                  <img className="path-440" src={path440} />
                </div>
              </div>
              <div className="group-596">
                <div className="flex-col-5">
                  <div className="ellipse-24"></div>
                  <img className="path-442" src={path442} />
                </div>
                <div className="flex-col-6">
                  <div className="flex-row-9">
                    <div className="ellipse-23"></div>
                    <img className="path-441" src={path441} />
                  </div>
                  <div className="flex-row-10">
                    <div className="ellipse-20"></div>
                    <div className="ellipse-21"></div>
                  </div>
                </div>
                <div className="ellipse-22"></div>
              </div>
              <div className="group-649">
                <div className="group-632">
                  <div className="overlap-group9">
                    <div className="group-617">
                      <div className="overlap-group4-1">
                        <img className="path-4-2" src={path468} />
                        <img className="path-4-3" src={path469} />
                      </div>
                    </div>
                    <img className="path-470" src={path470} />
                    <div className="group-619">
                      <div className="overlap-group5-2">
                        <div className="ellipse-27"></div>
                        <img className="path-4-4" src={path471} />
                      </div>
                    </div>
                    <img className="path-472" src={path472} />
                    <div className="group-621">
                      <div className="overlap-group6-1">
                        <div className="ellipse-28"></div>
                        <img className="path-4-5" src={path473} />
                      </div>
                    </div>
                    <img className="path-474" src={path474} />
                    <div className="group-624">
                      <div className="overlap-group-2">
                        <img className="line-" src={line66} />
                        <img className="path-4-6" src={path476} />
                      </div>
                    </div>
                    <div className="group-625">
                      <div className="overlap-group8-1">
                        <img className="line-67" src={line67} />
                        <img className="path-477" src={path477} />
                      </div>
                    </div>
                    <div className="group-627">
                      <div className="overlap-group10">
                        <img className="line-69" src={line69} />
                        <img className="path-479" src={path479} />
                      </div>
                    </div>
                    <div className="group-628">
                      <div className="overlap-group-3">
                        <img className="line-" src={line70} />
                        <img className="path-4-7" src={path480} />
                      </div>
                    </div>
                    <div className="group-629">
                      <div className="overlap-group1-1">
                        <img className="line-71" src={line71} />
                        <img className="path-481" src={path481} />
                      </div>
                    </div>
                    <img className="group-630" src={group630} />
                  </div>
                  <div className="group-623">
                    <div className="overlap-group-3">
                      <img className="line-" src={line65} />
                      <img className="path-4-7" src={path475} />
                    </div>
                  </div>
                  <div className="group-626">
                    <div className="overlap-group1-1">
                      <img className="line--1" src={line68} />
                      <img className="path-478" src={path478} />
                    </div>
                  </div>
                </div>
                <div className="group-616">
                  <div className="overlap-group4-5">
                    <div className="group-606">
                      <div className="overlap-group5-5">
                        <div className="group-597">
                          <div className="overlap-group6-3">
                            <div className="ellipse-25"></div>
                            <img className="path-443" src={path443} />
                          </div>
                        </div>
                        <img className="path-444" src={path444} />
                        <img className="path-445" src={path445} />
                        <div className="group-600">
                          <div className="overlap-group7-1">
                            <div className="ellipse-26"></div>
                            <img className="path-446" src={path446} />
                          </div>
                        </div>
                        <img className="path-448" src={path448} />
                        <div className="group-604">
                          <div className="rectangle-131"></div>
                          <div className="rectangle-132"></div>
                        </div>
                      </div>
                    </div>
                    <div className="group-615">
                      <div className="group-614">
                        <div className="overlap-group-4">
                          <div className="group-611">
                            <div className="overlap-group-5">
                              <img className="path-45" src={path459} />
                              <img className="path-4-8" src={path460} />
                            </div>
                          </div>
                          <img className="path-461" src={path461} />
                          <img className="path-462" src={path462} />
                          <div className="group-613">
                            <div className="overlap-group-6">
                              <img className="path-4-9" src={path463} />
                              <img className="path-4-10" src={path464} />
                            </div>
                          </div>
                          <img className="path-465" src={path465} />
                          <img className="path-466" src={path466} />
                          <img className="path-467" src={path467} />
                        </div>
                      </div>
                      <div className="group-610">
                        <div className="overlap-group-4">
                          <div className="group-607">
                            <div className="overlap-group-5">
                              <img className="path-45" src={path450} />
                              <img className="path-4-8" src={path451} />
                            </div>
                          </div>
                          <img className="path-452" src={path452} />
                          <img className="path-453" src={path453} />
                          <div className="group-609">
                            <div className="overlap-group-6">
                              <img className="path-4-9" src={path454} />
                              <img className="path-4-10" src={path455} />
                            </div>
                          </div>
                          <img className="path-456" src={path456} />
                          <img className="path-457" src={path457} />
                          <img className="path-458" src={path458} />
                          <div className="rectangle-133"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group-648">
                  <div className="overlap-group15">
                    <div className="group-633">
                      <div className="overlap-group4-1">
                        <img className="path-4-2" src={path483} />
                        <img className="path-4-3" src={path484} />
                      </div>
                    </div>
                    <img className="path-485" src={path485} />
                    <div className="group-635">
                      <div className="overlap-group5-2">
                        <div className="ellipse-29"></div>
                        <img className="path-4-4" src={path486} />
                      </div>
                    </div>
                    <img className="path-487" src={path487} />
                    <div className="group-637">
                      <div className="overlap-group6-1">
                        <div className="ellipse-30"></div>
                        <img className="path-4-5" src={path488} />
                      </div>
                    </div>
                    <img className="group-638" src={group638} />
                    <img className="path-490" src={path490} />
                    <div className="group-642">
                      <div className="overlap-group-3">
                        <img className="line-" src={line73} />
                        <img className="path-4-7" src={path492} />
                      </div>
                    </div>
                    <div className="group-643">
                      <div className="overlap-group-7">
                        <img className="line-74" src={line74} />
                        <img className="path-49" src={path493} />
                      </div>
                    </div>
                    <div className="group-645">
                      <div className="overlap-group-7">
                        <img className="line-76" src={line76} />
                        <img className="path-49" src={path495} />
                      </div>
                    </div>
                    <div className="group-646">
                      <div className="overlap-group-2">
                        <img className="line-77" src={line77} />
                        <img className="path-4-6" src={path496} />
                      </div>
                    </div>
                    <div className="group-647">
                      <div className="overlap-group1-1">
                        <img className="line-78" src={line78} />
                        <img className="path-497" src={path497} />
                      </div>
                    </div>
                  </div>
                  <div className="group-641">
                    <div className="overlap-group-2">
                      <img className="line-72" src={line72} />
                      <img className="path-4-6" src={path491} />
                    </div>
                  </div>
                  <div className="group-644">
                    <div className="overlap-group1-1">
                      <img className="line--1" src={line75} />
                      <img className="path-494" src={path494} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-579">
            <div className="group-578">
              <div className="buy montserrat-bold-white-12px">{buy}</div>
            </div>
            <div className="group-577">
              <div className="convert montserrat-bold-white-12px">
                {convert}
              </div>
            </div>
            <div className="group-576">
              <div className="place montserrat-bold-white-12px">{place}</div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}

function Shield_black_24dp(props) {
  const { shield_Black_24Dp, path2 } = props

  return (
    <div
      className="shieldblack24dp"
      style={{ backgroundImage: `url(${shield_Black_24Dp})` }}>
      <img className="path-2" src={path2} />
    </div>
  )
}

function Group9(props) {
  const {
    number,
    shortUsername,
    number2,
    shield_black_24dpProps,
    className
  } = props

  return (
    <div className={`group-9 ${className || ''}`}>
      <div className="group-7">
        <div className="overlap-group5-1">
          <Shield_black_24dp
            shield_Black_24Dp={shield_black_24dpProps.shield_Black_24Dp}
            path2={shield_black_24dpProps.path2}
          />
          <div className="number-1 montserrat-black-white-10px">{number}</div>
        </div>
      </div>
      <div className="short-username montserrat-normal-chicago-12px">
        {shortUsername}
      </div>
      <div className="number-2 montserrat-medium-chicago-12px">{number2}</div>
    </div>
  )
}



const shield_black_24dpData = {
  shield_Black_24Dp:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-1@1x.png',
  path2:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-2@1x.png'
}

const shield_black_24dp2Data = {
  shield_Black_24Dp:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-1@1x.png',
  path2:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-2-1@1x.png'
}

const group9Data = {
  number: '2',
  shortUsername: 'short username',
  number2: '39',
  shield_black_24dpProps: shield_black_24dp2Data
}

const shield_black_24dp3Data = {
  shield_Black_24Dp:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-1@1x.png',
  path2:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-2-1@1x.png'
}

const group92Data = {
  number: '3',
  shortUsername: 'short username',
  number2: '39',
  shield_black_24dpProps: shield_black_24dp3Data
}

const shield_black_24dp4Data = {
  shield_Black_24Dp:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-1@1x.png',
  path2:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-2-1@1x.png'
}

const group11Data = {
  number: '4',
  shortUsername: 'short username',
  number2: '39',
  shield_black_24dpProps: shield_black_24dp4Data
}

const shield_black_24dp5Data = {
  shield_Black_24Dp:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-1@1x.png',
  path2:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-2-1@1x.png'
}

const group93Data = {
  number: '5',
  shortUsername: 'short username',
  number2: '39',
  shield_black_24dpProps: shield_black_24dp5Data
}

const shield_black_24dp6Data = {
  shield_Black_24Dp:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-1@1x.png',
  path2:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-2-1@1x.png'
}

const group94Data = {
  number: '6',
  shortUsername: 'short username',
  number2: '39',
  shield_black_24dpProps: shield_black_24dp6Data
}

const shield_black_24dp7Data = {
  shield_Black_24Dp:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-1@1x.png',
  path2:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-2-1@1x.png'
}

const group95Data = {
  number: '7',
  shortUsername: 'short username',
  number2: '39',
  shield_black_24dpProps: shield_black_24dp7Data
}

const shield_black_24dp8Data = {
  shield_Black_24Dp:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-1@1x.png',
  path2:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-2-1@1x.png'
}

const group96Data = {
  number: '8',
  shortUsername: 'short username',
  number2: '39',
  shield_black_24dpProps: shield_black_24dp8Data
}

const shield_black_24dp9Data = {
  shield_Black_24Dp:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-1@1x.png',
  path2:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-2-1@1x.png'
}

const group97Data = {
  number: '9',
  shortUsername: 'short username',
  number2: '39',
  shield_black_24dpProps: shield_black_24dp9Data
}

const shield_black_24dp10Data = {
  shield_Black_24Dp:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-1@1x.png',
  path2:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-2-1@1x.png'
}

const group17Data = {
  number: '10',
  shortUsername: 'short username',
  number2: '39',
  shield_black_24dpProps: shield_black_24dp10Data
}

const shield_black_24dp11Data = {
  shield_Black_24Dp:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-1@1x.png',
  path2:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-2-10@1x.png'
}

const group112Data = {
  number: '11',
  shortUsername: 'short username',
  number2: '39',
  shield_black_24dpProps: shield_black_24dp11Data
}

const shield_black_24dp12Data = {
  shield_Black_24Dp:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-1@1x.png',
  path2:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-2-10@1x.png'
}

const group19Data = {
  number: '12',
  shortUsername: 'short username',
  number2: '39',
  shield_black_24dpProps: shield_black_24dp12Data
}

const shield_black_24dp13Data = {
  shield_Black_24Dp:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-1@1x.png',
  path2:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-2-10@1x.png'
}

const group192Data = {
  number: '13',
  shortUsername: 'short username',
  number2: '39',
  shield_black_24dpProps: shield_black_24dp13Data
}

const shield_black_24dp14Data = {
  shield_Black_24Dp:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-1@1x.png',
  path2:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-2-10@1x.png'
}

const group172Data = {
  number: '14',
  shortUsername: 'short username',
  number2: '39',
  shield_black_24dpProps: shield_black_24dp14Data
}

const shield_black_24dp15Data = {
  shield_Black_24Dp:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-1@1x.png',
  path2:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-2-10@1x.png'
}

const group193Data = {
  number: '16',
  shortUsername: 'short username',
  number2: '39',
  shield_black_24dpProps: shield_black_24dp15Data
}

const shield_black_24dp16Data = {
  shield_Black_24Dp:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-1@1x.png',
  path2:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-2-10@1x.png'
}

const group194Data = {
  number: '17',
  shortUsername: 'short username',
  number2: '39',
  shield_black_24dpProps: shield_black_24dp16Data
}

const shield_black_24dp17Data = {
  shield_Black_24Dp:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-1@1x.png',
  path2:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-2-10@1x.png'
}

const group195Data = {
  number: '18',
  shortUsername: 'short username',
  number2: '39',
  shield_black_24dpProps: shield_black_24dp17Data
}

const shield_black_24dp18Data = {
  shield_Black_24Dp:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-1@1x.png',
  path2:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-2-10@1x.png'
}

const group25Data = {
  number: '20',
  shortUsername: 'short username',
  number2: '39',
  shield_black_24dpProps: shield_black_24dp18Data
}

const shield_black_24dp19Data = {
  shield_Black_24Dp:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-1@1x.png',
  path2:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-2-10@1x.png'
}

const group252Data = {
  number: '20',
  shortUsername: 'short username',
  number2: '39',
  shield_black_24dpProps: shield_black_24dp19Data
}

const shield_black_24dp20Data = {
  shield_Black_24Dp:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-1@1x.png',
  path2:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-2-10@1x.png'
}

const group253Data = {
  number: '20',
  shortUsername: 'short username',
  number2: '39',
  shield_black_24dpProps: shield_black_24dp20Data
}

const shield_black_24dp21Data = {
  shield_Black_24Dp:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-1@1x.png',
  path2:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-2-10@1x.png'
}

const group254Data = {
  number: '20',
  shortUsername: 'short username',
  number2: '39',
  shield_black_24dpProps: shield_black_24dp21Data
}

const shield_black_24dp22Data = {
  shield_Black_24Dp:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-1@1x.png',
  path2:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-2-10@1x.png'
}

const group255Data = {
  number: '20',
  shortUsername: 'short username',
  number2: '39',
  shield_black_24dpProps: shield_black_24dp22Data
}

const shield_black_24dp23Data = {
  shield_Black_24Dp:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-1@1x.png',
  path2:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-2-10@1x.png'
}

const group256Data = {
  number: '20',
  shortUsername: 'short username',
  number2: '39',
  shield_black_24dpProps: shield_black_24dp23Data
}

const shield_black_24dp24Data = {
  shield_Black_24Dp:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-1@1x.png',
  path2:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-2-10@1x.png'
}

const group257Data = {
  number: '20',
  shortUsername: 'short username',
  number2: '39',
  shield_black_24dpProps: shield_black_24dp24Data
}

const topLabelData = {
  label: 'Label'
}

const topLabel2Data = {
  label: 'Label'
}

const topLabel3Data = {
  label: 'Label'
}

const brightness_4_black_24dpData = {
  brightness_4_Black_24Dp:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-1@1x.png',
  path430:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-430@1x.png'
}

const brightness_4_black_24dp2Data = {
  path430:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-1@1x.png',
  brightness_4_Black_24Dp:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-428@1x.png'
}

const group546Data = {
  edit: 'Edit',
  close: 'Close'
}

const group533Data = {
  phone: '2485752',
  audnzd: 'AUDNZD',
  surname: 'LONG',
  text7: '0.01',
  text8: '1.07282',
  text11: '-',
  text12: '-',
  price: '€ 1.94',
  text9: '-€ 1.94',
  price2: '€ 0.00',
  price3: '€ 0.00',
  text10: '1.07605'
}

const group5462Data = {
  edit: 'Edit',
  close: 'Close'
}

const group5332Data = {
  phone: '2485752',
  audnzd: 'AUDNZD',
  surname: 'LONG',
  text7: '0.01',
  text8: '1.07282',
  text11: '-',
  text12: '-',
  price: '€ 1.94',
  text9: '-€ 1.94',
  price2: '€ 0.00',
  price3: '€ 0.00',
  text10: '1.07605'
}

const group5333Data = {
  phone: '2485752',
  audnzd: 'AUDNZD',
  surname: 'LONG',
  text7: '0.01',
  text8: '1.07282',
  text11: '-',
  text12: '-',
  price: '€ 1.94',
  text9: '-€ 1.94',
  price2: '€ 0.00',
  price3: '€ 0.00',
  text10: '1.07605'
}

const group536Data = {
  line62:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/line-61@1x.png',
  line63:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/line-61@1x.png',
  group533Props: group5332Data,
  group5332Props: group5333Data
}

const group5334Data = {
  phone: '2485752',
  audnzd: 'AUDNZD',
  surname: 'LONG',
  text7: '0.01',
  text8: '1.07282',
  text11: '-',
  text12: '-',
  price: '€ 1.94',
  text9: '-€ 1.94',
  price2: '€ 0.00',
  price3: '€ 0.00',
  text10: '1.07605'
}

const group5335Data = {
  phone: '2485752',
  audnzd: 'AUDNZD',
  surname: 'LONG',
  text7: '0.01',
  text8: '1.07282',
  text11: '-',
  text12: '-',
  price: '€ 1.94',
  text9: '-€ 1.94',
  price2: '€ 0.00',
  price3: '€ 0.00',
  text10: '1.07605'
}

const group5362Data = {
  line62:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/line-61@1x.png',
  line63:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/line-61@1x.png',
  group533Props: group5334Data,
  group5332Props: group5335Data
}

const group5336Data = {
  phone: '2485752',
  audnzd: 'AUDNZD',
  surname: 'LONG',
  text7: '0.01',
  text8: '1.07282',
  text11: '-',
  text12: '-',
  price: '€ 1.94',
  text9: '-€ 1.94',
  price2: '€ 0.00',
  price3: '€ 0.00',
  text10: '1.07605'
}

const group5337Data = {
  phone: '2485752',
  audnzd: 'AUDNZD',
  surname: 'LONG',
  text7: '0.01',
  text8: '1.07282',
  text11: '-',
  text12: '-',
  price: '€ 1.94',
  text9: '-€ 1.94',
  price2: '€ 0.00',
  price3: '€ 0.00',
  text10: '1.07605'
}

const group5363Data = {
  line62:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/line-61@1x.png',
  line63:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/line-61@1x.png',
  group533Props: group5336Data,
  group5332Props: group5337Data
}

const group5338Data = {
  phone: '2485752',
  audnzd: 'AUDNZD',
  surname: 'LONG',
  text7: '0.01',
  text8: '1.07282',
  text11: '-',
  text12: '-',
  price: '€ 1.94',
  text9: '-€ 1.94',
  price2: '€ 0.00',
  price3: '€ 0.00',
  text10: '1.07605'
}

const group5339Data = {
  phone: '2485752',
  audnzd: 'AUDNZD',
  surname: 'LONG',
  text7: '0.01',
  text8: '1.07282',
  text11: '-',
  text12: '-',
  price: '€ 1.94',
  text9: '-€ 1.94',
  price2: '€ 0.00',
  price3: '€ 0.00',
  text10: '1.07605'
}

const group5364Data = {
  line62:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/line-61@1x.png',
  line63:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/line-61@1x.png',
  group533Props: group5338Data,
  group5332Props: group5339Data
}

const group53310Data = {
  phone: '2485752',
  audnzd: 'AUDNZD',
  surname: 'LONG',
  text7: '0.01',
  text8: '1.07282',
  text11: '-',
  text12: '-',
  price: '€ 1.94',
  text9: '-€ 1.94',
  price2: '€ 0.00',
  price3: '€ 0.00',
  text10: '1.07605'
}

const group53311Data = {
  phone: '2485752',
  audnzd: 'AUDNZD',
  surname: 'LONG',
  text7: '0.01',
  text8: '1.07282',
  text11: '-',
  text12: '-',
  price: '€ 1.94',
  text9: '-€ 1.94',
  price2: '€ 0.00',
  price3: '€ 0.00',
  text10: '1.07605'
}

const group5365Data = {
  line62:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/line-61@1x.png',
  line63:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/line-61@1x.png',
  group533Props: group53310Data,
  group5332Props: group53311Data
}

const group53312Data = {
  phone: '2485752',
  audnzd: 'AUDNZD',
  surname: 'LONG',
  text7: '0.01',
  text8: '1.07282',
  text11: '-',
  text12: '-',
  price: '€ 1.94',
  text9: '-€ 1.94',
  price2: '€ 0.00',
  price3: '€ 0.00',
  text10: '1.07605'
}

const group53313Data = {
  phone: '2485752',
  audnzd: 'AUDNZD',
  surname: 'LONG',
  text7: '0.01',
  text8: '1.07282',
  text11: '-',
  text12: '-',
  price: '€ 1.94',
  text9: '-€ 1.94',
  price2: '€ 0.00',
  price3: '€ 0.00',
  text10: '1.07605'
}

const group5366Data = {
  line62:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/line-61@1x.png',
  line63:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/line-61@1x.png',
  group533Props: group53312Data,
  group5332Props: group53313Data
}

const group53314Data = {
  phone: '2485752',
  audnzd: 'AUDNZD',
  surname: 'LONG',
  text7: '0.01',
  text8: '1.07282',
  text11: '-',
  text12: '-',
  price: '€ 1.94',
  text9: '-€ 1.94',
  price2: '€ 0.00',
  price3: '€ 0.00',
  text10: '1.07605'
}

const group53315Data = {
  phone: '2485752',
  audnzd: 'AUDNZD',
  surname: 'LONG',
  text7: '0.01',
  text8: '1.07282',
  text11: '-',
  text12: '-',
  price: '€ 1.94',
  text9: '-€ 1.94',
  price2: '€ 0.00',
  price3: '€ 0.00',
  text10: '1.07605'
}

const group5367Data = {
  line62:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/line-61@1x.png',
  line63:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/line-61@1x.png',
  group533Props: group53314Data,
  group5332Props: group53315Data
}

const group53316Data = {
  phone: '2485752',
  audnzd: 'AUDNZD',
  surname: 'LONG',
  text7: '0.01',
  text8: '1.07282',
  text11: '-',
  text12: '-',
  price: '€ 1.94',
  text9: '-€ 1.94',
  price2: '€ 0.00',
  price3: '€ 0.00',
  text10: '1.07605'
}

const group53317Data = {
  phone: '2485752',
  audnzd: 'AUDNZD',
  surname: 'LONG',
  text7: '0.01',
  text8: '1.07282',
  text11: '-',
  text12: '-',
  price: '€ 1.94',
  text9: '-€ 1.94',
  price2: '€ 0.00',
  price3: '€ 0.00',
  text10: '1.07605'
}

const group5368Data = {
  line62:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/line-61@1x.png',
  line63:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/line-61@1x.png',
  group533Props: group53316Data,
  group5332Props: group53317Data
}

const group5463Data = {
  edit: 'Edit',
  close: 'Close'
}

const group5464Data = {
  edit: 'Edit',
  close: 'Close'
}

const group5465Data = {
  edit: 'Edit',
  close: 'Close'
}

const group5466Data = {
  edit: 'Edit',
  close: 'Close'
}

const group5467Data = {
  edit: 'Edit',
  close: 'Close'
}

const group5468Data = {
  edit: 'Edit',
  close: 'Close'
}

const group5469Data = {
  edit: 'Edit',
  close: 'Close'
}

const group54610Data = {
  edit: 'Edit',
  close: 'Close'
}

const group54611Data = {
  edit: 'Edit',
  close: 'Close'
}

const group54612Data = {
  edit: 'Edit',
  close: 'Close'
}

const group54613Data = {
  edit: 'Edit',
  close: 'Close'
}

const group54614Data = {
  edit: 'Edit',
  close: 'Close'
}

const group54615Data = {
  edit: 'Edit',
  close: 'Close'
}

const group54616Data = {
  edit: 'Edit',
  close: 'Close'
}

const group54617Data = {
  edit: 'Edit',
  close: 'Close'
}

const group54618Data = {
  edit: 'Edit',
  close: 'Close'
}

const CryptoBattleChartData = {
  header: 'HEADER',
  group5:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/rectangle-3-3@1x.png',
  winningStreak: 'Winning streak',
  group6:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/rectangle-3-2@1x.png',
  points: 'Points',
  path1:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-1@1x.png',
  ranking: 'Ranking',
  username: 'Username',
  winningStreak2: 'Winning streak',
  line1:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/line-1@1x.png',
  number: '1',
  surname: 'Long usernames ar...',
  number2: '40',
  group2:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/rectangle-3-1@1x.png',
  chart: 'Chart',
  group3:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/rectangle-3-2@1x.png',
  surname2: 'Battle',
  capture:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/capture@1x.png',
  overlapGroup:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/rectangle-3@1x.png',
  account_Circle_Black_24Dp:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-1@1x.png',
  path4:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-4@1x.png',
  giorgioJaparidze: 'Giorgio Japaridze',
  account_Balance_Wallet_Black_24Dp1:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-1@1x.png',
  path6:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-6@1x.png',
  price: '$ 254,300.50',
  surname3: 'SHORT',
  surname4: 'LONG',
  inputText: 'Select currency',
  expand_More_Black_24Dp:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-1@1x.png',
  path1207:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-1207@1x.png',
  inputText2: 'Insert amount (ex.100$)',
  openPositions: 'Open positions',
  line12:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/line-1-1@1x.png',
  order: 'ORDER',
  symbol: 'SYMBOL',
  size: 'SIZE',
  openPrice: 'OPEN PRICE',
  swap: 'SWAP',
  commision: 'COMMISION',
  taxes: 'TAXES',
  closePrice: 'CLOSE PRICE',
  price2: 'S/L',
  tP: 'T/P',
  profit: 'PROFIT',
  symbol2: 'SYMBOL',
  phone: '2485752',
  audnzd: 'AUDNZD',
  surname5: 'LONG',
  text1: '0.01',
  text2: '1.07282',
  text5: '-',
  text6: '-',
  price3: '€ 1.94',
  text3: '-€ 1.94',
  price4: '€ 0.00',
  price5: '€ 0.00',
  text4: '1.07605',
  line61:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/line-61@1x.png',
  path498:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-498@1x.png',
  text109: 'Control your balance',
  path433:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-433@1x.png',
  overlapGroup4:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-435@1x.png',
  path436:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-436@1x.png',
  path437:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-437@1x.png',
  path438:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-438@1x.png',
  path434:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-434@1x.png',
  line64:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/line-64@1x.png',
  path440:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-440@1x.png',
  path442:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-442@1x.png',
  path441:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-441@1x.png',
  path468:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-468@1x.png',
  path469:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-469@1x.png',
  path470:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-470@1x.png',
  path471:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-471@1x.png',
  path472:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-472@1x.png',
  path473:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-473@1x.png',
  path474:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-474@1x.png',
  line66:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/line-66@1x.png',
  path476:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-476@1x.png',
  line67:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/line-67@1x.png',
  path477:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-477@1x.png',
  line69:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/line-69@1x.png',
  path479:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-479@1x.png',
  line70:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/line-70@1x.png',
  path480:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-480@1x.png',
  line71:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/line-71@1x.png',
  path481:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-481@1x.png',
  group630:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/group-630@1x.png',
  line65:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/line-65@1x.png',
  path475:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-436@1x.png',
  line68:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/line-68@1x.png',
  path478:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-478@1x.png',
  path443:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-443@1x.png',
  path444:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-444@1x.png',
  path445:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-445@1x.png',
  path446:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-446@1x.png',
  path448:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-448@1x.png',
  path459:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-459@1x.png',
  path460:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-460@1x.png',
  path461:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-461@1x.png',
  path462:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-462@1x.png',
  path463:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-454@1x.png',
  path464:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-455@1x.png',
  path465:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-465@1x.png',
  path466:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-466@1x.png',
  path467:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-458@1x.png',
  path450:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-450@1x.png',
  path451:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-451@1x.png',
  path452:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-452@1x.png',
  path453:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-453@1x.png',
  path454:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-454@1x.png',
  path455:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-455@1x.png',
  path456:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-456@1x.png',
  path457:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-457@1x.png',
  path458:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-458@1x.png',
  path483:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-483@1x.png',
  path484:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-484@1x.png',
  path485:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-485@1x.png',
  path486:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-486@1x.png',
  path487:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-487@1x.png',
  path488:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-488@1x.png',
  group638:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/group-638@1x.png',
  path490:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-490@1x.png',
  line73:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/line-73@1x.png',
  path492:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-492@1x.png',
  line74:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/line-74@1x.png',
  path493:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-493@1x.png',
  line76:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/line-76@1x.png',
  path495:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-495@1x.png',
  line77:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/line-77@1x.png',
  path496:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-496@1x.png',
  line78:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/line-71@1x.png',
  path497:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-497@1x.png',
  line72:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/line-71@1x.png',
  path491:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-437@1x.png',
  line75:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/line-75@1x.png',
  path494:
    'https://anima-uploads.s3.amazonaws.com/projects/6050bdbf3d860d67a8f37fc4/releases/6050bf5b797b8775c3e2c2a6/img/path-494@1x.png',
  buy: 'BUY',
  convert: 'CONVERT',
  place: 'TRANSFER',
  shield_black_24dpProps: shield_black_24dpData,
  group9Props: group9Data,
  group92Props: group92Data,
  group11Props: group11Data,
  group93Props: group93Data,
  group94Props: group94Data,
  group95Props: group95Data,
  group96Props: group96Data,
  group97Props: group97Data,
  group17Props: group17Data,
  group112Props: group112Data,
  group19Props: group19Data,
  group192Props: group192Data,
  group172Props: group172Data,
  group193Props: group193Data,
  group194Props: group194Data,
  group195Props: group195Data,
  group25Props: group25Data,
  group252Props: group252Data,
  group253Props: group253Data,
  group254Props: group254Data,
  group255Props: group255Data,
  group256Props: group256Data,
  group257Props: group257Data,
  topLabelProps: topLabelData,
  topLabel2Props: topLabel2Data,
  topLabel3Props: topLabel3Data,
  brightness_4_black_24dpProps: brightness_4_black_24dpData,
  brightness_4_black_24dp2Props: brightness_4_black_24dp2Data,
  group546Props: group546Data,
  group533Props: group533Data,
  group5462Props: group5462Data,
  group536Props: group536Data,
  group5362Props: group5362Data,
  group5363Props: group5363Data,
  group5364Props: group5364Data,
  group5365Props: group5365Data,
  group5366Props: group5366Data,
  group5367Props: group5367Data,
  group5368Props: group5368Data,
  group5463Props: group5463Data,
  group5464Props: group5464Data,
  group5465Props: group5465Data,
  group5466Props: group5466Data,
  group5467Props: group5467Data,
  group5468Props: group5468Data,
  group5469Props: group5469Data,
  group54610Props: group54610Data,
  group54611Props: group54611Data,
  group54612Props: group54612Data,
  group54613Props: group54613Data,
  group54614Props: group54614Data,
  group54615Props: group54615Data,
  group54616Props: group54616Data,
  group54617Props: group54617Data,
  group54618Props: group54618Data
}
