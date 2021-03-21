import React from 'react'
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
  opponentName,
  isWinner,
  onTryAgain
}) => {
  const [showMatch, setShowMatch] = React.useState(false)

  return (
    <div style={{ width: '100%', height: '100%' }}>
      {isEmptyState && <MakeBet />}
      {isBetPlacedState && (
        <WaitingForOpponent betAmount={betAmount} riseOrFall={riseOrFall} />
      )}
      {showMatch && <ItsAMatch />}
      {isMatchStarted && !showMatch && (
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
          isWinner={isWinner}
          onTryAgain={onTryAgain}
        />
      )}
    </div>
  )
}

export { BattleTab }
