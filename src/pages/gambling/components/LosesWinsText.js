import { Typography } from 'antd'

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

export { LosesWinsText }
