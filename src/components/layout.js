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
const cards = require('../core/cards').cards; 

class Table extends React.Component  {
    constructor(props){
        super(props); 
        this.state = {
        }
        this.state.pack = cards.newPack(); 
        this.getRandomCard = this.getRandomCard.bind( this ); 
    }

    getRandomCard (){
      let card = cards.drawRandomCard( this.state.pack ); 
      let newSet = new Set([...this.state.pack])
      newSet.delete(card); 
      this.setState({
        pack:newSet 
      })
      alert(card)
    }

    render(){
        return ( 
            <div className="pokerTable">
                <button onClick={x=>this.getRandomCard()}>deal</button>
                <div className="cardPack">{this.state.pack.size}</div>
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
