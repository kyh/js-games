class TicTacToe {
  constructor() {
    this.gameElement = null;
    this.board = [
      'E', 'E', 'E',
      'E', 'E', 'E',
      'E', 'E', 'E'
    ];
  }

  init(elementID) {
    console.log('Initialize game');
  }
}

export default new TicTacToe();
