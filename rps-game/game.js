export class Game {
  constructor() {
    this.humanWins = 0;
    this.cpuWins = 0;
    this.gamesPlayed = 0;
  }

  getCpuMove() {
    const randomIndex = Math.floor(Math.random() * 3);
    if (randomIndex === 0) {
      return 'ROCK';
    } else if (randomIndex === 1) {
      return 'PAPER';
    }
    return 'SCISSORS';
  }

  playRound(humanMove) {
    this.gamesPlayed += 1;
    return this.getWinner(humanMove, this.getCpuMove());
  }

  getWinner(humanMove, cpuMove) {
    const messagePretext = `In game ${this.gamesPlayed}`;
    if (humanMove === cpuMove) {
      return {
        winner: 'Tie',
        message: `${messagePretext} the result ended in a tie! Both selected ${humanMove}`,
      };
    }
    if (
      (humanMove === 'ROCK' && cpuMove === 'SCISSORS') ||
      (humanMove === 'PAPER' && cpuMove === 'ROCK') ||
      (humanMove === 'SCISSORS' && cpuMove === 'PAPER')
    ) {
      this.humanWins++;
      return {
        winner: 'Human',
        message: `${messagePretext} the result ended with a Human victory. ${humanMove} beats ${cpuMove}`,
      };
    } else {
      this.cpuWins++;
      return {
        winner: 'Cpu',
        message: `${messagePretext} the result ended with a Cpu victory. ${cpuMove} beats ${humanMove}`,
      };
    }
  }
}
