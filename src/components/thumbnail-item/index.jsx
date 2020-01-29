import React from 'react'
import { Link } from 'gatsby'
import { TARGET_CLASS } from '../../utils/visible'

import './index.scss'

// main post thumbnail
export const ThumbnailItem = ({ node }) => {
  const getTime = () => {
    return node.html.length < 1500 ?
      '2 min read 📓' :
      node.html.length < 4000 ?
        '2 min read 📓' :
        node.html.length < 6000 ?
          '4 min read 📓📓' :
          node.html.length < 8000 ?
            '5 min read 📓📓📓' :
            node.html.length < 10000 ?
              '7 min read 📓📓📓📓' : '8 min read 📓📓📓📓'

    // return node.html.length
  }
  console.log('node', node.html.length)
  return (
    <Link className={`thumbnail ${TARGET_CLASS}`} to={node.fields.slug}>
      <div key={node.fields.slug}>
        <h3 className="post-title">{node.frontmatter.title || node.fields.slug}</h3>
        <p className="post-date">{node.frontmatter.date} - {getTime()}</p>
        <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </div>
    </Link>
  )
}
