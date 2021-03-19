import { Typography } from 'antd'
import ShieldSvg from './assets/shield.svg'

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

export { ShieldText }
