class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })

  }
  getCarsAtEnd(){
    database.ref('CarsAtEnd').on("value", (data)=>{
      this.rank = data.val();
    });

  }

  static updateCarsAtEnd(rank){
    database.ref('/').update({
      CarsAtEnd:rank 
    })
  }

  /*display(){
    if(gameState===2){
      if(player1.distance>player2.distance && player1.distance>player3.distance
        && player1.distance>player4.distance){
          text("Player1 " + this.player.distance);
          text("Player2 " + this.player.distance);
          text("Player3 " + this.player.distance);
          text("Player4 " + this.player.distance);
        }
      else if(player2.distance>player1.distance && player2.distance>player3.distance
        && player2.distance>player4.distance){
          text("Player2 " + this.player.distance);
          text("Player1 " + this.player.distance);
          text("Player3 " + this.player.distance);
          text("Player4 " + this.player.distance);
        }
      else if(player3.distance>player1.distance && player3.distance>player2.distance
        && player3.distance>player4.distance){
          text("Player3 " + this.player.distance);
          text("Player1 " + this.player.distance);
          text("Player2 " + this.player.distance);
          text("Player4 " + this.player.distance);          
        }
    }
  }*/
}
