type players = string[];

function findWinner(player: players, dealer: players) {
  console.log('running');
  function findScore(array: players) {
    const score = array.reduce((score, curr) => {
      return score + parseInt(curr);
    }, 0);
    return score;
  }

  const playerScore = findScore(player);
  const dealerScore = findScore(dealer);

  if (playerScore > dealerScore) {
    console.log('Player',[player, playerScore]);
    return [player, playerScore];
  } else {
    console.log('Dealer', [dealer, dealerScore]);
    return [dealer, dealerScore];
  }
}

const players = ['10', '6'];
const dealers = ['10', '5'];

findWinner(players, dealers);
