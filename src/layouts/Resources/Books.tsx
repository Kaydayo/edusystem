import React from 'react'
import resourceStyle from '../../styles/Resource/Resource.module.css'
import { apiBooks } from '../../constants/data'
import ResCard from './ResCard'

const Books = () => {
  return (
    <div className={resourceStyle.bfArticles}>
      <div className={resourceStyle.articles}>
        {apiBooks.map(book => {
          return (
            <ResCard key={book.id}
              classBg={book.headBg}
              topLabel={book.textLabel}
              mainLabel={book.mainContent}
              routeTo="book"
              contentId={book.id} />
          )
        })}
      </div>

    </div>
  )
}

export default Books