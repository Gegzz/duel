import { Typography } from 'antd'
import { VerticalSpace } from '.'
import { FourText } from './FourText'
import finishsvg from './assets/finish.svg'
import skull from './assets/skull.svg'
import { BetButton } from '.'

const Finish = ({ betAmount, riseOrFall, openPrice, currentPrice }) => (
  <div
    style={{
      alignItems: 'center',
      textAlign: 'center',
      verticalAlign: 'middle',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100%',
      backgroundImage: `url(${finishsvg})`,
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
      <img
        alt=""
        src={skull}
        height="80"
        width="120"
        style={{ paddingTop: 16 }}
      />
      <VerticalSpace />
      <Typography
        style={{
          fontFamily: 'Montserrat',
          fontWeight: 500,
          fontSize: 16,
          color: 'white'
        }}>
        {'Unfortunately, you lost this time...'.toUpperCase()}
      </Typography>
      <VerticalSpace />
      <BetButton title="TRY AGAIN" />
      <VerticalSpace />
      <VerticalSpace />
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

export { Finish }
