import { LoadingOutlined } from '@ant-design/icons'
import { Spin, Typography } from 'antd'
import { ShieldText } from '.'
import WaitingForOpponentIm from './assets/waitingforopponent.svg'

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

export { WaitingForOpponent }
