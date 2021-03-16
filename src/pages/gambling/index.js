import {
  Button,
  Card,
  Descriptions,
  InputNumber,
  Progress,
  Result,
  Select,
  Space,
  Spin,
  Statistic,
  Table,
  Typography
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
  SnippetsOutlined
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
      <div
        style={{
          ...ignoreHorizontalMargins,
          marginTop: -64,
          display: 'flex',
          flexDirection: 'row'
        }}>
        <Left />
        <IFrame
          url={config.iframeUrl}
          id="myId"
          height={getWindowDimensions().height - 300}
          width={getWindowDimensions().width - 630}
          display="initial"
          position="relative"
        />
        <div style={{ width: 315 }}>
          <Card
            bodyStyle={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start'
            }}
            >
            <Statistic
              value="Giorgio Japaridze"
              prefix={<UserOutlined />}
              className="user-title"
            />
            <Statistic
              value={`$ ${'254,300.50'}`}
              prefix={<SnippetsOutlined />}
              className="money"
            />
            <Select
              onChange={handleChange}
              size="large"
              placeholder="Select currency">
              <Option value="btc">BTC</Option>
              <Option value="eth">ETH</Option>
            </Select>
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
              style={{width: '100%'}}
              placeholder="Insert amount (ex. 100$)"
            />
          </Card>
        </div>
        <div style={{ display: 'none' }}>
          {/* IsEmptyState */}
          <Flexed conditions={isEmptyState}>
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
            />
          </Flexed>
          <Flexed conditions={isEmptyState}>
            <BetButton
              short
              title="Short"
              onClick={ClickShort}
              disabled={isRiseOrFall !== null}
            />
            <BetButton
              title="Long"
              onClick={ClickLong}
              disabled={isRiseOrFall !== null}
            />
          </Flexed>
          {/* IsBetPlaced */}
          <Flexed conditions={isBetPlacedState}>
            <Result
              icon={<Spin size="large" />}
              title="Waiting for opponent..."
            />
          </Flexed>
          <Flexed conditions={isMatchStarted}>
            <Result
              title={Math.round(timeLeft / 1000)}
              icon={<ClockCircleTwoTone />}
            />
          </Flexed>
          <Flexed
            conditions={isBetPlacedState || isMatchStarted || isMatchEnded}>
            <Card>
              <Statistic
                title="Bet Amount"
                value={betAmount}
                prefix={<DollarTwoTone />}
              />
            </Card>
            {isMatchStarted && (
              <Card>
                <Statistic
                  title="Open Price"
                  value={openPrice}
                  prefix={<FundTwoTone />}
                />
              </Card>
            )}
            <Card>
              <Statistic
                title="Prediction"
                value={isRiseOrFall ? 'Rise' : 'Fall'}
                valueStyle={{
                  color: isRiseOrFall ? '#3f8600' : consts.colors.loose
                }}
                prefix={
                  isRiseOrFall ? <ArrowUpOutlined /> : <ArrowDownOutlined />
                }
              />
            </Card>
          </Flexed>
          {/* IsMatchStarted */}
          <Flexed conditions={isMatchStarted}>
            <Card
              style={{
                width: '100%',
                marginLeft: 16,
                marginRight: 14,
                marginBottom: 16
              }}>
              <Meta
                avatar={
                  <Avatar
                    style={{
                      backgroundColor: isRiseOrFall
                        ? consts.colors.loose
                        : consts.colors.win
                    }}>
                    {opponentName[0]}
                  </Avatar>
                }
                title={opponentName}
                description="Rank: 48112"
              />
            </Card>
          </Flexed>
          <Flexed conditions={isMatchStarted}>
            <Progress
              percent={currentPrice - openPrice + threshold / 100 + 50}
              strokeColor={consts.colors.win}
              trailColor={consts.colors.loose}
              showInfo={false}
              strokeLinecap="square"
              strokeWidth={12}
            />
          </Flexed>
          <Flexed conditions={isMatchStarted}>
            <Statistic title="Threshold" value={threshold} />
            <Statistic title="CurrentPrice" value={currentPrice} />
          </Flexed>
          {/* IsMatchStarted */}
          <Flexed conditions={isMatchEnded}>
            <Result
              icon={
                won ? (
                  <TrophyTwoTone twoToneColor={consts.colors.win} />
                ) : (
                  <StopTwoTone twoToneColor={consts.colors.loose} />
                )
              }
              title={won ? 'Impressive, You Won!' : 'Lost, Will You Try Again?'}
              extra={
                <Button type="primary" onClick={reset}>
                  Re-Battle!
                </Button>
              }
            />
          </Flexed>
        </div>
      </div>
      <OrderHistory />
    </div>
  )
}

const textsWin = ['Impressive, You Won!']

const getWinningText = () =>
  textsWin[Math.floor(Math.random() * textsWin.length)]

const BetButton = ({ title, short, ...props }) => (
  <Button
    style={{
      width: '50%',
      borderWidth: 0,
      borderRadius: 0,
      backgroundColor: short ? consts.colors.loose : consts.colors.win,
      height: 50
    }}
    type="primary"
    size="large"
    {...props}>
    {title}
  </Button>
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
    )
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username'
  },
  {
    title: 'Winning Streak',
    dataIndex: 'winningStreak',
    key: 'winningStreak'
  }
]

const Left = () => (
  <div
    style={{
      width: 315,
      height: getWindowDimensions().height - 300,
      padding: 8
    }}>
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
    />
    ;
  </div>
)

const OrderHistory = () => (
  <div style={{ ...ignoreHorizontalMargins, height: 200, padding: 8 }}>
    <Table
      dataSource={dataSource}
      columns={columns}
      title={() => <Typography>Order history</Typography>}
    />
  </div>
)

export { Gambling }
