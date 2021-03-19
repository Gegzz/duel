import { Typography } from "antd"
import { VerticalSpace } from "."

const Finish = () => (
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
        <FourText text="Bet amount: " value="100$" green />
        <FourText text="Open price: " value="55,156.69" green />
        <FourText text="Prediction: " value="Rise" green />
        <FourText text="Current price: " value="55,156.69" />
      </div>
    </div>
  </div>
)

export { Finish }
