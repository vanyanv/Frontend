type players = string[];

type DictionaryTypes = {
  [key: string]: number;
};

function findWinner(player: players, dealer: players) {
  const dictionary: DictionaryTypes = {
    J: 10,
    Q: 10,
    K: 10,
    A: 11,
  };

  function findScore(array: players) {
    const aces = array.filter((card) => card === 'A').length;
    let score = array.reduce((score, curr) => {
      if (curr === 'A') return score;
      if (dictionary[curr]) {
        return score + dictionary[curr];
      } else {
        return score + parseInt(curr);
      }
    }, 0);

    // Add aces optimally
    for (let i = 0; i < aces; i++) {
      // If adding 11 would bust, add 1 instead
      if (score + 11 <= 21) {
        score += 11;
      } else {
        score += 1;
      }
    }

    return score;
  }

  const playerScore = findScore(player);
  const dealerScore = findScore(dealer);

  console.log('playerScore', playerScore);
  console.log('dealerScore', dealerScore);

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

export default findWinner;
