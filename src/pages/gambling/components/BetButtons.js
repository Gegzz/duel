const BetButtons = ({ children }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }}>
    {children}
  </div>
)

export { BetButtons }
