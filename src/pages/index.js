import React, { useEffect } from "react"
import { Layout, Hero, Featured, Blurbs } from '@components'


const IndexPage = (props) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <Hero />
      <Featured />
      <Blurbs />
    </Layout>
  )
}

export default IndexPage