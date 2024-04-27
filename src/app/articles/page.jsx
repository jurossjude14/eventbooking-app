import React from 'react'
import HeadingInnerPage from '../components/HeadingInnerPage'

const articles = () => {
  const heading = {
    title: "This Blog Parent",
    description: "Contact me for more details ",
}

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-1xl">
        <div className="container">
        <HeadingInnerPage heading={heading}/>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 custom-sec-div1">
            <p>Im web developer with over 5 years of Wordpress experience and passion for responsive website design and a problem solver to innovate new ideas that can create great website.</p>
            <p>Combined years of being experience web developer, I can manage to find solution in an issue that is related on wordpress</p>
            <p>I always completed the website what is being planned or find another alternative way which can be workout by the client.</p>
          </div>
        </div>
      </div>
    </div>
  )

  
}

export default articles
