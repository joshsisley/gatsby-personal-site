import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/indexLayout'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

const IndexPage = props => (
  <Layout>
    <div className="page white-bg">
      <div className="container">
        <section className="hero-section">
          <div className="hero-texts">
            <Img
              fluid={props.data.imageFirst.childImageSharp.fluid}
              className="js-logo"
              alt="js logo"
            />
            <p className="js-header">
              Joshua Sisley
              <br />
              Freelance Software Engineer
            </p>
            <p>
              I am a Full Stack JavaScript Developer who is passionate about
              solving real world Healthcare problems with creative technical
              solutions!
            </p>
            <a
              href="https://goo.gl/forms/aUAhUoOI7a4taYPc2"
              className="btn-hero-green"
            >
              Hire Me
            </a>
          </div>
          <div>
            <Img
              fluid={props.data.imageOne.childImageSharp.fluid}
              className="hero-image"
              alt="hero image"
            />
          </div>
        </section>
      </div>
      <div className="container">
        <section className="hero-section2 ">
          <Img
            fluid={props.data.imageTwo.childImageSharp.fluid}
            className="hero-image"
            alt="hero image"
          />
          <div className="hero-texts">
            <p className="hero-header">Explore clubs and Activities</p>
            <div className="dash" />
            <p>More to come...</p>
            <Link className="btn-hero-green" to="/clubs">
              Learn More →{' '}
            </Link>
          </div>
        </section>
      </div>

      <div className="container">
        <section className="hero-section3">
          <div className="hero-texts">
            <p className="hero-header">Get Trained by Experts</p>
            <div className="dash" />
            <p>More to come...</p>
          </div>
          <Img
            fluid={props.data.imageThree.childImageSharp.fluid}
            className="hero-image"
            alt="hero image"
          />
        </section>
      </div>
      <div className="container">
        <section className="hero-section4">
          <div>
            <Img
              fluid={props.data.imageFour.childImageSharp.fluid}
              className="hero-image"
              alt="hero image"
            />
          </div>
          <div className="hero-texts">
            <p className="hero-header">Helpful Resources!</p>
            <div className="dash" />
            <p>
              Meet people with similar interest to work together on projects and
              host events to build a better collaborative environment. We are
              more than 100 members with interests on various fields of
              technology here to know each other and get connected. Meet our
              members to know more about us and build something cool!
            </p>
            <Link to="/team" className="btn-hero-green">
              Learn More
            </Link>
          </div>
        </section>
      </div>
    </div>
  </Layout>
)

export const firstSiteImages = graphql`
  fragment firstSiteImages on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    imageFirst: file(relativePath: { eq: "images/logo_grad.png" }) {
      ...firstSiteImages
    }
    imageOne: file(relativePath: { eq: "images/hero_coder.png" }) {
      ...firstSiteImages
    }
    imageTwo: file(relativePath: { eq: "images/hero_clubs.png" }) {
      ...firstSiteImages
    }
    imageThree: file(relativePath: { eq: "images/hero_github.png" }) {
      ...firstSiteImages
    }
    imageFour: file(relativePath: { eq: "images/hero_marketing.png" }) {
      ...firstSiteImages
    }
  }
`

export default IndexPage
