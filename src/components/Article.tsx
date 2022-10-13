import React, { useEffect, useState } from 'react'
import Footer from '../layouts/Home/Footer'
import Nav from './Nav'
import { apiArticles } from '../constants/data'
import { Link, useParams } from 'react-router-dom'
import articleResStyle from '../styles/Resource/Resource.module.css'
import ResCard from '../layouts/Resources/ResCard'

const Article = () => {
    const [content, setContent] = useState<any>(apiArticles)
    const [allcontent, setAllContent] = useState<any>(apiArticles)

    const params = useParams()

    useEffect(() => {

        const findContent = apiArticles.find((article) => article.id === params.id)
        setContent(findContent)

        


    }, [content])

  return (
      <>
          <Nav />
          <div className={articleResStyle.article}>
              <div>
                  <h1>{content.mainContent}</h1>
                  <img src={content.coverBg} alt="onculture-article" />
                  <p>{content.textContent}</p>
              </div>
              <div >
                  <Link className={articleResStyle.articleLink} to='/resource/articles'>View all articles</Link>
                  
              </div>
              <div className={articleResStyle.vArticles}>
                  {allcontent.slice(3).map((article:any) => {
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
          <Footer/>
      </>
  )
}

export default Article