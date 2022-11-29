let bet = 1;
let payout = 2;
let inGame = false;
_betEngine.payout = payout; //payout
_betEngine.wager = bet; // bet miktarı
_betEngine.bet(); // bet button

_engine.on("GAME_STARTING", () => {
  if (_engine.lostPreviousBet == true) {
    console.log("KAYIP");

    setTimeout(() => {
      bet *= 1.5;
      _betEngine.bet(bet);
      inGame = true;
    }, 5 * 60 * 1000);
  } else if (_engine.lostPreviousBet == false && inGame == true) {
    console.log("KAZANDIM");
    bet = 1;
    _betEngine.bet(bet);
    inGame = false;






    
  }
});



// class _bustedText_18ndo_36
