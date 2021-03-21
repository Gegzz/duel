import { Typography } from "antd"

const FourText = ({ text, green, value }) => (
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
  </div>
)

export { FourText }
