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

  function findA(array: players) {
    return array.filter((card) => card === 'A');
  }

  const playerA = findA(player);
  const dealerA = findA(dealer);

  function findScore(array: players) {
    const score = array.reduce((score, curr) => {
      if (curr === 'A') return score + 0;
      if (dictionary[curr]) {
        return score + dictionary[curr];
      } else {
        return score + parseInt(curr);
      }
    }, 0);
    return score;
  }

  function Alogic(array: string[], score: number) {
    for (let i = 0; i < array.length; i++) {
      const current = array[i];
      if (score + dictionary[current] <= 21) {
        score += dictionary[current];
      } else {
        score += 1;
      }
    }
    return score;
  }

  let playerScore = findScore(player);
  let dealerScore = findScore(dealer);

  playerScore = Alogic(playerA, playerScore);
  dealerScore = Alogic(dealerA, dealerScore);

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

export default findWinner
