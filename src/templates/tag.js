import React from 'react'
import { graphql } from 'gatsby'

const TagTemplate = ({data, pageContext}) =>{
  const posts = data.contentfulTag.post
  const { title, slug } = data.contentfulTag
  const numberOfPost = posts.length
  return(
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export const query = graphql`
query($slug: String!){
  contentfulTag(slug: {eq: $slug}){
    title
    id
    slug
    post{
      id
      title
      slug
      publishDate(formatString:"MMMM DD YYYY")
      heroImage{
        title
        fluid{
          src
        }
      }
      body{
        body
      }
    }
  }
}

`
export default TagTemplate;