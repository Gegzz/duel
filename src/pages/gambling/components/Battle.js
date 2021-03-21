import { FourText } from '.'
import battlebgsvg from './assets/battlebg.svg'
import battle from './assets/battle.svg'
import playergreen from './assets/playergreen.svg'
import playerred from './assets/playerred.svg'
import { Progress, Statistic, Typography } from 'antd'

const Battle = ({
  remainingSeconds,
  betAmount,
  riseOrFall,
  openPrice,
  currentPrice,
  threshold,
  playerName,
  opponentName
}) => (
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
        value={`${remainingSeconds ?? 0} seconds remaining`}
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
            {!riseOrFall ? playerName : opponentName}
          </Typography>
        </div>
        <Progress
          percent={currentPrice - openPrice + threshold / 100 + 50}
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
            {riseOrFall ? playerName : opponentName}
          </Typography>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexDirection: 'row'
        }}>
        <FourText
          text="Bet amount: "
          value={`$${betAmount}`}
          green
          hideShield
        />
        <FourText
          text="Open price: "
          value={openPrice.toFixed(2)}
          green
          hideShield
        />
        <FourText
          text="Prediction: "
          value={riseOrFall ? 'Rise' : 'Fall'}
          green={riseOrFall}
          hideShield
        />
        <FourText
          text="Current price: "
          value={currentPrice.toFixed(2)}
          hideShield
        />
      </div>
    </div>
  </div>
)

export { Battle }
