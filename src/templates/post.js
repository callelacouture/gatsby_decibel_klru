import React from 'react'
import { graphql } from 'gatsby'

const PostTemplate = ({data, pageContext}) =>{
  const{
    title,
    slug,
    publishDate,
    heroImage,
    featuredVideo,
    body,
    tags,
  }=data.contentfulPost
  const postNode = data.contentfulPost
  return(
    <div>
      <img src={heroImage.fluid.src} />
      <h1>{title}</h1>
     
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }){
      id
      title
      slug
      publishDate(formatString: "MMMM DD YYYY")
      heroImage{
        fluid{
          src
        }
      }
      featuredVideo{
        title
        embedCode
        source
      }
      body{
       body
      }
      tags{
        title
        slug
      }
    }
  }



`
export default PostTemplate