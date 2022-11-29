const user = {
    wager: 1,
    payout: 2,
    status: true,
    strategy: "",
    isWin: false,
    default: {
      wager: 1,
      payout: 2,
    },
  };
  
  class Strategy {
    five() {
      user.default.wager = 1;
      user.default.payout = 1.66;
      setBet(3, 1);
    }
  
    bedo() {
      user.default.wager = 1;
      user.default.payout = 2;
      setBet(1, 1);
    }
    ocAdil() {
      user.default.wager = 2;
      user.default.payout =1.75;
      setBet(1.5,1);
    }
  }

  //  
  
  const bet = (wager, payout) => {
    _betEngine.bet(wager, payout);
  };
  
  // Strategy: 5minX
  
  const setBet = (wager, payout) => {
    if (isWin) {
      user.wager = user.default.wager;
      user.payout = user.default.payout;
    } else {
      user.wager *= wager;
      user.payout *= payout;
    }
    setTimeout(bet(user.wager, user.payout), 5 * 60 * 1000);
  };
  
  _engine.playingView.array;
  
  for (let i = 0; i < _bankroll._engine.playingView.array.length; i++) {
    const { uname, wager, payout } = _bankroll._engine.playingView.array[i];
    if (wager > 1000 * 100) console.log(uname, wager / 100, payout);
  }
  
  setInterval(() => {
    console.clear();
    for (let i = 0; i < _bankroll._engine.playingView.array.length; i++) {
      const { uname, wager, payout } = _bankroll._engine.playingView.array[i];
      if (wager > 1000 * 100) console.log(uname, wager / 100, payout);
    }
  }, 1000);
  
  // Makine parası
  _bankroll.getState().wagered;
  
  _engine.gameState;
  
  //  BET_PLACED , CASHED_OUT , GAME_ENDED , GAME_STARTING ,
  // GAME_STATE_CHANGED , GAME_STOPPED, HISTORY_CHANGED , NYAN_CHANGED, PLAYERS_VIEW_CHANGED, PLAYER_COUNT_CHANGED
  // ROUND_STATS_CHANGED
  
  // ? Event trigger _engine.on
  
  _engine.on("GAME_STARTING", () => {
    console.log("GAME_STARTING");
  
    fiveMinX();
  });
  
  _engine.on("GAME_IN_PROGRESS", () => {
    console.log("GAME_IN_PROGRESS");
  });
  
  _engine.on("GAME_ENDED", () => {
    console.log("GAME_ENDED");
  });
  
  _engine.on("error", (err) => {
    console.log(err);
  });
  