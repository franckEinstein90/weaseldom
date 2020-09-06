import React from "react"
import './Table.css'
import Dialog from './Dialog'

const cards = require('../core/cards').cards; 

const handSet = x => Array(6).fill('a'); 

export class Table extends React.Component  {

    constructor(props){
        
        super(props); 
        this.state = {
        }

        this.getRandomCard = this.getRandomCard.bind( this ); 
        this.state.pack = cards.newPack()
        this.state.hands = handSet();  

    }
    
    getRandomCard (i){
        let selected = []
        while(i-->0){
            selected.push(cards.drawRandomCard( this.state.pack )); 
        }
        let newSet = new Set([...this.state.pack])
        selected.forEach(c => {
            newSet.delete(c); 
        })
        this.setState({
            pack:newSet 
        })
        alert(selected)
    }

    renderTwoCardHands( ) {
        alert('jo')
    }


    render(){
        return ( 
            <div className="pokerTable">
                <Dialog deal={_=>this.getRandomCard(12)}/>
                <div className="container">
                    <div className="cardPack">{this.state.pack.size}</div>
                    <div className="spacer"></div>
                    <div className="dealtHands">
                        <table><tr>
                        </tr></table>
                    </div>
                </div>
                <div className="container">
                    <div className="player"></div>
                    <div className="opponent"></div>
                </div>
               {this.props.children}
            </div>
        )
    }
}

export default Table
