/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import './Table.css'

const cards = (function(){
    const suits = ["clubs", "spades", "heart", "diamond"]; 
    const values = "1-2-3-4-5-6-7-8-9-10-J-Q-K-A".split('-');
    return {
        newPack : () => {
            const suitedCards = values.map(value => suits.map(s => `${s}-${value}`)); 
            return suitedCards.reduce((a,b)=>a.concat(b),[]);  
        }
    }
})()



class Cards extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
                       
        }
        this.state.pack = new Set(cards.newPack()); 
    }

    render(){
        return (<div className="cardPack">dsa</div>)
    }

} 


class Table extends React.Component  {
    constructor(props){
        super(props); 
        this.state = {
        }
        this.state.pack = new Set(cards.newpack()); 
    }

    newDeal (){
        alert('fdsa'); 
    }

    render(){
        return ( 
            <div className="pokerTable">
                <button onClick={x=>this.newDeal()}>deal</button>
                {this.props.children}
            </div>)
     }
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle="Weasledom Poker" />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>

            <Table/>
            {children}

        </main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
