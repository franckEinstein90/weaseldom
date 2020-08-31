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
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>What are some unethical life hacks?
If you have to bury a body, do it vertically, satellites look for 6ft long holes and marks them for investigation, also, bury the body under a dead dog, sniffer dogs will mark that spot and when they dig it up and find the dog, they will mark it as a false positive and move on.
If you want to sound sick when calling in to your work, lie on your back while hanging your head over the edge of the bed. You will sound congested.
There's clothing that allows you to do virtually everything. Want to do graffiti? Wear one of those white paperish overalls. Steal a streetsign? Carry a toolbox, dress like a mechanic and you're good to go. Dress up like a technician, walk into an office, tell somebody you were "told to take that PC", you can just walk out with it. Never underestimate how little people question the uniform.
When meeting someone, tell them you are twice as far away from them as you actually are, and are willing to meet halfway, I.e. a block away from where you currently are.
Send out a mass email to the class the day before an exam saying I have just finished my study guide, and offer to swap it with other people. Never actually made a study guide. People would send me theirs and I would them send them each others back. Win win for everyone.
Don't call into work "sick". Call in saying that you have "family problems". That's the end of the discussion.
The weirdest I've heard of is rich moms hiring handicapped people to go to Disney with them so they and their children can skip all the lines.
I used to keep a cup from McDonald's in my car at all times and when ever I was driving and wanted some soda I would just walk in any MacDonald's and refill my cup. I did this for weeks.
Say you've never orgasmed from oral sex to make your partner try harder.
When buying something on craigslist, I use my spam email to lowball the seller by a lot, then I use my regular email to give a reasonable offer that is still a good amount under the asking price. I almost always have my offer accepted.
It's very awkward to say no. If you go to a fast food place for example and you simply lie and say that there was a Big Mac missing from your order during lunch rush and that your receipt got thrown away with your meal, they'll give you another one
If you need a phone charger, go to a hotel and tell them you forgot your phone charger in the hotel. They'll pull out a box full of them, take your pick.
Get a burner phone and use yourself as a reference on job applications. Got gaps in your work history? Fill 'em in with fake freelance computer work or renovations.
When I know I'm going late to be for something, I'll call ahead and tell whomever I'm meeting that I was just pulled over for speeding. Thus giving myself an excuse for being late, and demonstrating my commitment to whatever it is I'm late for. Only works once, but it usually works pretty well.
in order to be a good liar, you need to convince everyone that you are a bad liar
The first trick I learned in the FBI: If you're on a stakeout and you want someone to stop looking at you or think you're not looking at them - pick your nose. They immediately turn away and think you're just some jerk picking his nose.
{children}</main>
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
