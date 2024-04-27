import HeadingInnerPage from '../components/HeadingInnerPage'
import FeatureLeftImg from '../components/FeatureLeftImg'

const about = () => {
  const heading = {
    title: "About Us",
    description: "Love to create websites and explore new technologies can upskill my profile.",
}

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-1xl">
        <div className="container">
        <HeadingInnerPage heading={heading}/>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 custom-sec-div1">
            <p>We are web developer with over 5 years of Wordpress experience and passion for responsive website design and a problem solver to innovate new ideas that can create great website.</p>
        </div>
        </div>
        <FeatureLeftImg />
      </div>
    </div>
  )

  
}

export default about
