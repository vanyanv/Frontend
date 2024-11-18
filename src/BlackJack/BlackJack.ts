type players = string[];

type DictionaryTypes = {
  [key: string]: number;
};

function findWinner(player: players, dealer: players) {
  const dictionary: DictionaryTypes = {
    J: 10,
    Q: 10,
    K: 10,
  };
  function findScore(array: players) {
    const score = array.reduce((score, curr) => {
      if (dictionary[curr]) {
        return score + dictionary[curr];
      } else {
        return score + parseInt(curr);
      }
    }, 0);
    return score;
  }

  const playerScore = findScore(player);
  const dealerScore = findScore(dealer);

  if (playerScore > 21) return [dealer, dealerScore];
  if (dealerScore > 21 && playerScore <= 21) return [player, playerScore];

  if (playerScore > dealerScore) {
    console.log('Player', [player, playerScore]);
    return [player, playerScore];
  } else {
    console.log('Dealer', [dealer, dealerScore]);
    return [dealer, dealerScore];
  }
}

const players = ['10', '1', 'J'];
const dealers = ['10', '6'];

findWinner(players, dealers);
