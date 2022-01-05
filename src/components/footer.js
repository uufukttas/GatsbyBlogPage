import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={`${styles.container}${styles.contact}`}>
      <a href="https://github.com/uufukttas">Github</a>
      <a href="https://linkedin.com/in/uufukttas">Linkedin</a>
      <a href="https://twitter.com/uufukttas">Twitter</a>
    </div>

    <div className={styles.container}>
      Built with <a href="https://contentful.com/">Contentful</a> and{' '}
      <a href="https://gatsbyjs.com">Gatsby</a> &middot;{' '}
      <a href="https://github.com/contentful/starter-gatsby-blog">Source</a>
    </div>
  </Container>
)

export default Footer
