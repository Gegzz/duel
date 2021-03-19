import { VerticalSpace } from "."

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

export { ItsAMatch }
