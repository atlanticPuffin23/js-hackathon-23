import { io } from "socket.io-client";
import './../font.css'

const SERVER_URL = "http://localhost:3001";
export const socket = io(SERVER_URL);

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload() { }

  create() {
    socket.connect();
    
    this.add.text(100, 100, 'ATLANTIC PUFFIN BATTLE CITY', { color: '#ff0000' , fontSize: 72 });
    
    const guideline = this.add.text(400,500,'GUIDELINE', { fontSize: 40})
    guideline.setInteractive();
    guideline.on('pointerdown',() => {      
      this.scene.start('GuidelineScene');
    })
    
    const play = this.add.text(400,700,'PLAY', {fontSize: 40})
    play.setInteractive();
    play.on('pointerdown',() => {
      this.scene.start('MainScene');
    })


    
    
    // socket.on('gameState', (gameState) => {
    //   console.log('on game state', gameState)
    //   if(gameState.gameStatus === "waiting"){
    //    this.add.text(50, 100, "Waiting", { color: "#ff0000"});
    //   };
      
    //   if(gameState.gameStatus === "countdown"){
    //     this.add.text(100, 100, 'Your game will soon begin', { color: "#ff0000"});
    //   };
      
    //   if(gameState.gameStatus === "in-progress"){
    //     this.scene.start('MainScene')
    //   };
      
    //   if(gameState.gameStatus === "ended"){
    //     this.startNew = this.add.text(150, 100, "Start Over", { color: "#ff0000"});
    //     this.startNew.setInteractive();
        
    //     this.startNew.on('pointerdown', function () {
    //       socket.emit('newGame')
    //   })
       
    //   };
    // }

  }
}
