import { Battle, Finish, ItsAMatch, MakeBet, WaitingForOpponent } from '.'

const BattleTab = ({
  isEmptyState,
  isBetPlacedState,
  isMatchStarted,
  isMatchEnded
}) => (
  <div style={{ width: '100%', height: '100%' }}>
    {isEmptyState && <MakeBet />}
    {isBetPlacedState && <WaitingForOpponent />}
    {isMatchStarted && <Battle />}
    {isMatchEnded && <Finish />}
    {/* <ItsAMatch /> */}
  </div>
)

export { BattleTab }
