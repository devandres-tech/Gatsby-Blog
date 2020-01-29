import React from 'react'

// on post click
export const PostTitle = ({ title, date }) => (
  <>
    <h1>{title} <p className="post-date-item">{date}</p></h1>
  </>
)
