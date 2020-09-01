"use strict"; 

const cards = (function(){
    const suits = ["clubs", "spades", "heart", "diamond"]; 
    const values = "2-3-4-5-6-7-8-9-10-J-Q-K-A".split('-');
    return {
        newPack : () => {  //creates a new pack with all 52 cards 
            const suitedCards = values.map(value => suits.map(s => `${s}-${value}`)); 
            return new Set(suitedCards.reduce((a,b)=>a.concat(b),[])); 
        }, 

        //returns a random card from a deck
        drawRandomCard : p => [...p][Math.floor(Math.random()*p.size)]
    }
})()

module.exports = {
    cards 
}