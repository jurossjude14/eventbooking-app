import React from 'react'
import ArticleTemplate from '../components/articleTemplate'

const articlepost = ({params:{id}}) => {

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-1xl">
        <ArticleTemplate pid={id} />
      </div>
    </div>
  )

  
}

export default articlepost
