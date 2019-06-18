import React from "react"
import{graphql} from 'gatsby'


const IndexPage = ({data}) => {
  const posts=data.allContentfulPost.edges
  //const featuredPost=posts[0].node
  return(
    <div>
      
      {posts.map(({node:post}) =>(
        <li key={post.id}><img src={post.heroImage.fluid.src} alt={post.title}/>{post.title}</li>
      ))}
    </div>
  )
}

export const query = graphql`
query{
  allContentfulPost{
    edges{
      node{
        title
        slug
        id
        heroImage{
          fluid{
            src
          }
        }
        publishDate(formatString: "MMMM DD, YYYY")
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
  }
}
`

export default IndexPage
