import React from 'react'
import { apiArticles } from '../../constants/data'
import ResCard from './ResCard'
import resourceStyle from '../../styles/Resource/Resource.module.css'

const Articles = () => {
    return (
        <div className={resourceStyle.bfArticles}>
            <div className={resourceStyle.articles}>
          {apiArticles.map(article => {
              return (
                  <ResCard key={article.id}
                      classBg={article.headBg}
                      topLabel={article.textLabel}
                      mainLabel={article.mainContent}
                      contentId={article.id}
                      routeTo="article"
                  />
              )
          })}
            </div>
            
        </div>

  )
}

export default Articles