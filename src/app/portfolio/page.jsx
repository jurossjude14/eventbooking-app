import React from 'react'
import HeadingInnerPage from '../components/HeadingInnerPage'
import PortfolioGrid from '../components/PortfolioGrid'

const portfolio = () => {
  const heading = {
    title: "Portfolio",
    description: "Showcase of feature projects in Web Development",
  }

  const portObj = [
    {
      imgUrl: "https://juross14.github.io/myprofile/img/projects/v7.jpeg",
      title: "Iselect Insurance Company",
      desc: "Web Dev built by Reactjs & Wordpress"
    },
    {
      imgUrl: "https://juross14.github.io/myprofile/img/projects/v6.jpeg",
      title: "Hmelegal Law firm",
      desc: "Web Dev built by Wordpress"
    },
    {
      imgUrl: "https://juross14.github.io/myprofile/img/projects/v1.jpeg",
      title: "Flowhive Ecommerce",
      desc: "Web Dev built by Shopify"
    },    {
      imgUrl: "https://juross14.github.io/myprofile/img/projects/v7.jpeg",
      title: "Iselect Insurance Company",
      desc: "Web Dev built by Reactjs & Wordpress"
    },
    {
      imgUrl: "https://juross14.github.io/myprofile/img/projects/v6.jpeg",
      title: "Hmelegal Law firm",
      desc: "Web Dev built by Wordpress"
    },
    {
      imgUrl: "https://juross14.github.io/myprofile/img/projects/v1.jpeg",
      title: "Flowhive Ecommerce",
      desc: "Web Dev built by Shopify"
    },
  ]
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-1xl">
        <div className="container">
          <HeadingInnerPage heading={heading} />
          <PortfolioGrid portObj={portObj} />
        </div>
      </div>
    </div>
  )
}

export default portfolio
