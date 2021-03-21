import MakeBetSvg from './assets/makebet.svg'
import Back from './assets/battlebackground.svg'
import { Typography } from 'antd'

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

export { MakeBet }
