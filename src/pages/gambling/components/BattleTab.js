import { Battle, Finish, ItsAMatch, MakeBet, WaitingForOpponent } from '.'

const BattleTab = ({
  isEmptyState,
  isBetPlacedState,
  isMatchStarted,
  isMatchEnded,
  betAmount,
  riseOrFall,
  openPrice,
  currentPrice,
  remainingSeconds,
  threshold,
  playerName,
  opponentName
}) => (
  <div style={{ width: '100%', height: '100%' }}>
    {isEmptyState && <MakeBet />}
    {isBetPlacedState && (
      <WaitingForOpponent betAmount={betAmount} riseOrFall={riseOrFall} />
    )}
    {isMatchStarted && (
      <Battle
        betAmount={betAmount}
        currentPrice={currentPrice}
        openPrice={openPrice}
        riseOrFall={riseOrFall}
        remainingSeconds={remainingSeconds}
        threshold={threshold}
        playerName={playerName}
        opponentName={opponentName}
      />
    )}
    {isMatchEnded && (
      <Finish
        betAmount={betAmount}
        currentPrice={currentPrice}
        openPrice={openPrice}
        riseOrFall={riseOrFall}
      />
    )}
    {/* <ItsAMatch /> */}
  </div>
)

export { BattleTab }
