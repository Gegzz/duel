import {
  Button,
  Card,
  Checkbox,
  Col,
  Descriptions,
  InputNumber,
  Progress,
  Result,
  Row,
  Select,
  Space,
  Spin,
  Statistic,
  Table,
  Typography,
  Switch,
  Tabs,
  Image,
  Divider
} from 'antd'
import React from 'react'
import IFrame from 'react-iframe'
import {
  DollarTwoTone,
  ArrowUpOutlined,
  ArrowDownOutlined,
  TrophyTwoTone,
  FundTwoTone,
  StopTwoTone,
  ClockCircleTwoTone,
  UserOutlined,
  SnippetsOutlined,
  SettingOutlined,
  SettingFilled,
  LoadingOutlined,
  StarFilled
} from '@ant-design/icons'
import getWindowDimensions from '../../helpers/getWindowDimensions'
import Meta from 'antd/lib/card/Meta'
import Avatar from 'antd/lib/avatar/avatar'
import { gamblingService } from '../../services/gambling.service'
import { accountService } from '../../services'
import dayjs from 'dayjs'
import useCountDown from 'react-countdown-hook'
import { HubConnectionState } from '@aspnet/signalr'
import Shield from '../../assets/shield'
import './style.css'
import consts from '../../consts'
import Title from 'antd/lib/typography/Title'
import { Option } from 'antd/lib/mentions'
import MakeBetSvg from './makebet.svg'
import Back from './battlebackground.svg'
import WaitingForOpponentIm from './waitingforopponent.svg'
import ShieldSvg from './shield.svg'
import Itsamatchsvg from './itsamatch.svg'
import Itsamatchbgsvg from './itsamatchbg.svg'
import battlebgsvg from './battlebg.svg'
import battle from './battle.svg'
import playergreen from './playergreen.svg'
import playerred from './playerred.svg'
const config = require('../../config')

const Flexed = (props) =>
  props.conditions ? (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        padding: 16
      }}
      {...props}>
      {props.children}
    </div>
  ) : (
    <></>
  )

const initialTime = 60 * 1000 // initial time in milliseconds, defaults to 60000
const interval = 1000 // interval to change remaining time amount, defaults to 1000

const ignoreHorizontalMargins = {
  marginLeft: -55,
  marginRight: -50
}

const { TabPane } = Tabs

const Gambling = () => {
  const [isEmptyState, setIsEmptyState] = React.useState(true)
  const [isBetPlacedState, setIsBetPlacedState] = React.useState(false)
  const [isMatchStarted, setIsMatchStarted] = React.useState(false)
  const [isMatchEnded, setIsMatchEnded] = React.useState(false)

  const [betAmount, setBetAmount] = React.useState(undefined)
  const [isRiseOrFall, setIsRiseOrFall] = React.useState(null)

  const [winningText, setWinningText] = React.useState('')
  const [losingText, setLosingText] = React.useState('')

  const [won, setWon] = React.useState(null)

  const [opponentName, setOpponentName] = React.useState('')
  const [openPrice, setOpenPrice] = React.useState(0)
  const [threshold, setThreshold] = React.useState(0)
  const [currentPrice, setCurrentPrice] = React.useState(0)

  const [unix, setUnix] = React.useState(0)
  const [timeThreshold, setTimeThreshold] = React.useState(0)
  const [startUnix, setStartUnix] = React.useState(0)
  const [time, setTime] = React.useState(new Date(0))
  const [timeString, setTimeString] = React.useState('')

  const [currentBalance, setCurrentBalance] = React.useState(0)

  const [startDate, setStartDate] = React.useState(new Date(0))

  const [timeLeft, { start, pause, resume, resets }] = useCountDown(
    initialTime,
    interval
  )

  const [stateInitialized, setStateInitialized] = React.useState(false)

  // React.useEffect(() => {
  //   accountService.getBalance().then((balance) => setCurrentBalance(balance))
  // }, [])

  React.useEffect(() => {
    //   gamblingService.connection.start().then(() => {
    // gamblingService.getGame().then(response => {
    //   if (response.state === 'NotFound') setStateInitialized(true)
    //   if (response.state === 'Matched') {
    //     MatchPending(message.opponentName)
    //     setOpenPrice(response.game.startPrice)
    //     setThreshold(message.threshold)
    //     setTimeThreshold(message.unixThreshold)
    //     setStartUnix(message.startUnix)

    //     start()
    //   }
    // })
    hookOnEvents()
    if (gamblingService.connection.state !== HubConnectionState.Connected) {
      gamblingService.connection.start().then(() => {
        gamblingService.connection.invoke('RegisterConnection')
      })
    } else {
      gamblingService.connection.invoke('RegisterConnection')
    }
    //   })
  }, [])

  const reset = () => {
    setIsEmptyState(true)
    setIsBetPlacedState(false)
    setIsMatchStarted(false)
    setIsMatchEnded(false)

    setBetAmount(10)
    setIsRiseOrFall(null)

    setWinningText('')
    setLosingText('')

    setWon(null)

    setOpponentName('')
    setOpenPrice(0)
    setThreshold(0)
    setCurrentPrice(0)
  }

  const MatchPending = (opponentName) => {
    setIsBetPlacedState(false)
    setIsMatchStarted(true)
    setOpponentName(opponentName)
  }

  const ClickShort = () => {
    setIsRiseOrFall(false)
    gamblingService.placeBet(betAmount, false)
  }

  const ClickLong = () => {
    setIsRiseOrFall(true)
    gamblingService.placeBet(betAmount, true)
  }

  const calculateTime = () => {
    return (unix - startUnix) / 1000
  }

  //#region Connections

  const hookOnEvents = () => {
    gamblingService.connection.on('BetPlaced', (message) => {
      setStateInitialized(true)
      setIsEmptyState(false)
      setIsBetPlacedState(true)
      setBetAmount(message.amount)

      setIsRiseOrFall(message.long ? true : false)
      setIsMatchEnded(false)
    })

    // gamblingService.connection.on('MatchPending', (message) => {
    //   MatchPending(message.opponentName)
    // })

    gamblingService.connection.on('MatchStarted', (message) => {
      setStateInitialized(true)

      console.log(message)

      setIsEmptyState(false)
      setBetAmount(message.amount)

      MatchPending(message.opponentName)
      setOpenPrice(message.startPrice)
      setThreshold(message.threshold)
      setTimeThreshold(message.unixThreshold)
      setStartUnix(message.startUnix)

      setIsRiseOrFall(message.isRiseOrFall)

      let msg = message

      start(message.unixThreshold - msg.time)

      // const timerRef = setInterval(() => {
      //   // if (time.getSeconds() < message.unixThreshold) {
      //   //   setTime(new Date())
      //   //   setTimeString(dayjs(time).format('mm:ss'))
      //   // }
      //   let ds = dayjs(startDate).subtract(new Date())

      //   setTimeString(ds.format('mm:ss'))
      // }, 1000)
    })

    gamblingService.connection.on('PriceEvent', (message) => {
      setCurrentPrice(message.currentPrice)
      setUnix(message.currentUnix)

      console.log(timeLeft)
    })

    gamblingService.connection.on('GameEnded', (message) => {
      setStateInitialized(true)

      setIsEmptyState(false)

      setWon(message.won)
      setIsMatchEnded(true)
      setIsMatchStarted(false)

      debugger
      setIsRiseOrFall(message.isRiseOrFall)

      setTime(new Date(0))
    })

    gamblingService.connection.on('BalanceUpdated', (message) => {
      setCurrentBalance(message.amount)
    })

    gamblingService.connection.on('CLEAR', () => {
      setStateInitialized(true)
    })
  }

  //#endregion

  if (!stateInitialized) {
    return <Result icon={<Spin size="large" />} title="Connecting..." />
  }

  const handleChange = () => {}

  return (
    <div>
      <Row>
        <Col flex={1}>
          <div className="header-container border-1px-alto">
            <div className="header">HEADER</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col flex={1} style={{ padding: 8 }}>
          <Left />
        </Col>
        <Col flex={6} style={{ paddingBottom: 8, paddingTop: 8 }}>
          <Tabs
            defaultActiveKey="2"
            onChange={(s) => console.log(s)}
            style={{ height: '100%' }}
            type="card">
            <TabPane tab="Chart" key="1">
              <IFrame url={config.iframeUrl} className="chart-iframe" />
            </TabPane>
            <TabPane tab="Battle" key="2">
              <BattleTab />
            </TabPane>
          </Tabs>
        </Col>
        <Col flex={1} style={{ padding: 8 }}>
          <Card
            bodyStyle={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start'
            }}>
            <Statistic
              value="Giorgio Japaridze"
              prefix={<UserOutlined />}
              className="user-title"
            />
            <VerticalSpace />
            <Statistic
              value={`$ ${'254,300.50'}`}
              prefix={<SnippetsOutlined />}
              className="money"
            />
            <VerticalSpace />
            <Select
              onChange={handleChange}
              size="large"
              placeholder="Select currency">
              <Option value="btc">BTC</Option>
              <Option value="eth">ETH</Option>
            </Select>
            <VerticalSpace />
            <InputNumber
              formatter={(value) =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }
              parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
              onChange={(value) => {
                if (value > 0) setBetAmount(value)
              }}
              value={betAmount}
              step={5}
              disabled={isRiseOrFall !== null}
              size="large"
              style={{ width: '100%' }}
              placeholder="Insert amount (ex. 100$)"
            />
            <VerticalSpace />
            <BetButtons>
              <BetButton short title="SHORT" />
              <BetButton title="LONG" />
            </BetButtons>
            <VerticalSpace />
            <Theme />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col flex={1}>
          <OrderHistory />
        </Col>
      </Row>
    </div>
  )
}

const VerticalSpace = () => <div style={{ marginTop: 20 }}></div>

const textsWin = ['Impressive, You Won!']

const getWinningText = () =>
  textsWin[Math.floor(Math.random() * textsWin.length)]

const BetButton = ({ title, short, ...props }) => (
  <Button
    style={{
      width: '50%',
      borderWidth: 0,
      borderRadius: 0,
      backgroundColor: short ? 'var(--red)' : 'var(--green)',
      height: 56,
      fontWeight: 800,
      fontFamily: 'Montserrat',
      fontSize: 21
    }}
    type="primary"
    size="large"
    {...props}>
    {title}
  </Button>
)

const Theme = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    }}>
    <SettingOutlined style={{ fontSize: 24 }} />
    <Switch style={{ backgroundColor: 'var(--green)' }} />
    <SettingFilled style={{ fontSize: 24 }} />
  </div>
)

const BetButtons = ({ children }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }}>
    {children}
  </div>
)

const dataSource = [
  {
    key: '1',
    ranking: 1,
    username: 'Long username',
    winningStreak: 40
  },
  {
    key: '2',
    ranking: 2,
    username: 'short username',
    winningStreak: 39
  },
  {
    key: '3',
    ranking: 3,
    username: 'short username',
    winningStreak: 39
  },
  {
    key: '4',
    ranking: 4,
    username: 'short username',
    winningStreak: 39
  },
  {
    key: '4',
    ranking: 4,
    username: 'short username',
    winningStreak: 39
  },
  {
    key: '4',
    ranking: 4,
    username: 'short username',
    winningStreak: 39
  }
]

const columns = [
  {
    title: 'Ranking',
    dataIndex: 'ranking',
    key: 'ranking',
    render: (ranking) => (
      <Avatar style={{ backgroundColor: 'transparent', width: 48 }}>
        <Shield number={ranking} />
      </Avatar>
    ),
    width: 20
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
    width: 20
  },
  {
    title: 'Winning Streak',
    dataIndex: 'winningStreak',
    key: 'winningStreak',
    width: 20
  }
]

const Left = () => (
  <Table
    dataSource={dataSource}
    columns={columns}
    title={() => (
      // <Button
      //   size="large"
      //   type="primary"
      //   style={{
      //     backgroundColor: consts.colors.primary,
      //     borderColor: consts.colors.primary
      //   }}>
      //   Winning Streak
      // </Button>
      <Typography className="tab-title">Winning Streak</Typography>
    )}
    pagination={false}
    size="small"
  />
)

const historyDataSource = [
  {
    battleId: 2485752,
    currency: 'BTC',
    bet: 'LONG',
    ammount: 50,
    startPrice: 1.23324,
    endPrice: 1.23232,
    profit: 0
  },
  {
    battleId: 2485752,
    currency: 'BTC',
    bet: 'LONG',
    ammount: 50,
    startPrice: 1.23324,
    endPrice: 1.23232,
    profit: 0
  },
  {
    battleId: 2485752,
    currency: 'BTC',
    bet: 'LONG',
    ammount: 50,
    startPrice: 1.23324,
    endPrice: 1.23232,
    profit: 0
  },
  {
    battleId: 2485752,
    currency: 'BTC',
    bet: 'LONG',
    ammount: 50,
    startPrice: 1.23324,
    endPrice: 1.23232,
    profit: 0
  },
  {
    battleId: 2485752,
    currency: 'BTC',
    bet: 'LONG',
    ammount: 50,
    startPrice: 1.23324,
    endPrice: 1.23232,
    profit: 0
  }
]

const historyColumns = [
  {
    title: 'BATTLE ID',
    dataIndex: 'battleId',
    key: 'battleId'
  },
  {
    title: 'CURRENCY',
    dataIndex: 'currency',
    key: 'currency'
  },
  {
    title: 'BET',
    dataIndex: 'bet',
    key: 'bet',
    render: (bet) => (
      <span
        style={{
          color: bet === 'LONG' ? 'var(--green)' : 'var(--red)',
          fontWeight: 600
        }}>
        {bet}
      </span>
    )
  },
  {
    title: 'AMOUNT',
    dataIndex: 'amount',
    key: 'amount'
  },
  {
    title: 'START PRICE',
    dataIndex: 'startPrice',
    key: 'startPrice'
  },
  {
    title: 'END PRICE',
    dataIndex: 'endPrice',
    key: 'endPrice'
  },
  {
    title: 'PROFIT',
    dataIndex: 'profit',
    key: 'profit'
  }
]

const OrderHistory = () => (
  <Table
    dataSource={historyDataSource}
    columns={historyColumns}
    title={() => <Typography>Order history</Typography>}
  />
)

const BattleTab = () => (
  <div style={{ width: '100%', height: '100%' }}>
    {/* <MakeBet /> */}
    {/* <WaitingForOpponent /> */}
    {/* <ItsAMatch /> */}
    <Battle />
  </div>
)

const MakeBet = () => (
  <div
    style={{
      alignItems: 'center',
      textAlign: 'center',
      verticalAlign: 'middle',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100%',
      backgroundImage: `url(${Back})`,
      backgroundSize: 'cover'
    }}>
    <Typography
      style={{
        fontFamily: 'Montserrat',
        fontWeight: 500,
        fontSize: 16,
        color: 'white'
      }}>
      MAKE A BET BASED ON YOUR PREDICTION...
    </Typography>
    <img src={MakeBetSvg} height="130" width="450" alt="" />
  </div>
)

const WaitingForOpponent = () => (
  <div
    style={{
      alignItems: 'center',
      textAlign: 'center',
      verticalAlign: 'middle',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100%',
      backgroundImage: `url(${WaitingForOpponentIm})`,
      backgroundSize: 'cover'
    }}>
    <div
      style={{
        backdropFilter: 'blur(1rem)',
        // backgroundColor: 'rgba(0,0,0,0.3)'
        borderRadius: 38,
        height: '82%',
        width: '82%',
        padding: 24
      }}>
      <Typography
        style={{
          fontFamily: 'Montserrat',
          fontWeight: 500,
          fontSize: 16,
          color: 'white'
        }}>
        WAITING FOR OPPONENT, PLEASE WAIT...
      </Typography>
      <Spin
        indicator={
          <LoadingOutlined style={{ fontSize: 32, paddingTop: 24 }} spin />
        }
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly'
        }}>
        <ShieldText text="Bet amount:" green value="100$" />
        <ShieldText text="Bet amount:" green value="Rise" />
      </div>
    </div>
  </div>
)

const ShieldText = ({ text, green, value, hideShield }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
    <Typography
      style={{
        color: 'white',
        fontSize: 18,
        fontWeight: 500,
        fontFamily: 'Montserrat',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }}>
      {text}
      <Typography
        style={{
          color: green ? 'var(--green)' : 'var(--red)',
          fontSize: 28,
          fontWeight: 800,
          fontFamily: 'Montserrat',
          paddingLeft: 8
        }}>
        {value}
      </Typography>
    </Typography>
    {!hideShield && <img alt="" src={ShieldSvg} width="68" height="140" />}
  </div>
)

const ItsAMatch = () => (
  <div
    style={{
      alignItems: 'center',
      textAlign: 'center',
      verticalAlign: 'middle',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100%',
      backgroundImage: `url(${Itsamatchbgsvg})`,
      backgroundSize: 'cover'
    }}>
    <div
      style={{
        backdropFilter: 'blur(1rem)',
        // backgroundColor: 'rgba(0,0,0,0.3)'
        borderRadius: 38,
        height: '82%',
        width: '82%',
        padding: 24
      }}>
      <Typography
        style={{
          fontFamily: 'Montserrat',
          fontWeight: 500,
          fontSize: 16,
          color: 'white'
        }}>
        IT'S A MATCH! SEE YOUR OPPONENT...
      </Typography>
      <img
        alt=""
        src={Itsamatchsvg}
        height="100"
        width="150"
        style={{ paddingTop: 16 }}
      />
      <Statistic
        value="Lucy Morningstar"
        className="user-title"
        valueStyle={{ color: 'white' }}
      />
      <VerticalSpace />
      <Statistic
        value="Rating: 669"
        prefix={<StarFilled />}
        className="user-title"
        valueStyle={{ color: 'white' }}
      />
      <VerticalSpace />
      <LosesWinsText win value="999" />
      <LosesWinsText value="666" />
    </div>
  </div>
)

const Battle = () => (
  <div
    style={{
      alignItems: 'center',
      textAlign: 'center',
      verticalAlign: 'middle',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100%',
      backgroundImage: `url(${battlebgsvg})`,
      backgroundSize: 'cover'
    }}>
    <div
      style={{
        backdropFilter: 'blur(1rem)',
        backgroundColor: 'rgba(0,0,0,0.7)',
        borderRadius: 38,
        height: '82%',
        width: '82%',
        padding: 24
      }}>
      <Typography
        style={{
          fontFamily: 'Montserrat',
          fontWeight: 500,
          fontSize: 16,
          color: 'white'
        }}>
        IT'S A MATCH! SEE YOUR OPPONENT...
      </Typography>
      <img
        alt=""
        src={battle}
        height="80"
        width="120"
        style={{ paddingTop: 16 }}
      />
      <Statistic
        value="54 seconds remaining"
        className="user-title"
        valueStyle={{ color: 'white' }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
        <div style={{ paddingRight: 8 }}>
          <img alt="" src={playerred} />
          <Typography
            style={{
              fontFamily: 'Montserrat',
              fontSize: 14,
              fontWeight: 500,
              color: 'white'
            }}>
            Lucy Morningstar
          </Typography>
        </div>
        <Progress
          percent={50}
          strokeColor="var(--red)"
          trailColor="var(--green)"
          showInfo={false}
          strokeLinecap="square"
          strokeWidth={12}
        />
        <div style={{ paddingLeft: 8 }}>
          <img alt="" src={playergreen} />
          <Typography
            style={{
              fontFamily: 'Montserrat',
              fontSize: 14,
              fontWeight: 500,
              color: 'white'
            }}>
            Giorgio Japaridze
          </Typography>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexDirection: 'row'
        }}>
        <FourText text="Bet amount: " value="100$" green hideShield />
        <FourText text="Open price: " value="55,156.69" green hideShield />
        <FourText text="Prediction: " value="Rise" green hideShield />
        <FourText text="Current price: " value="55,156.69" hideShield />
      </div>
    </div>
  </div>
)

const LosesWinsText = ({ win, value }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
    <Typography
      style={{
        color: win ? 'var(--green)' : 'var(--red)',
        fontSize: 18,
        fontWeight: 500,
        fontFamily: 'Montserrat',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }}>
      {win ? 'Wins: ' : 'Loses: '}
      <Typography
        style={{
          color: 'white',
          fontSize: 18,
          fontWeight: 500,
          fontFamily: 'Montserrat',
          paddingLeft: 8
        }}>
        {value}
      </Typography>
    </Typography>
  </div>
)

const FourText = ({ text, green, value, hideShield }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
    <Typography
      style={{
        color: 'white',
        fontSize: 10,
        fontWeight: 500,
        fontFamily: 'Montserrat',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }}>
      {text}
      <Typography
        style={{
          color: green ? 'var(--green)' : 'var(--red)',
          fontSize: 20,
          fontWeight: 800,
          fontFamily: 'Montserrat',
          paddingLeft: 8
        }}>
        {value}
      </Typography>
    </Typography>
    {!hideShield && <img alt="" src={ShieldSvg} width="68" height="140" />}
  </div>
)

export { Gambling }
