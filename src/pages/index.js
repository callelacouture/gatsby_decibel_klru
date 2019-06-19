import React from "react"
import{graphql} from 'gatsby'
import { Link } from 'gatsby'
import TagNav from '../components/TagNav'
//import { link } from "fs";


const IndexPage = ({data}) => {
  const posts=data.allContentfulPost.edges
  const tags=data.allContentfulTag.edges
  const mainPosts=data.featuredMainPost.edges
  const sidePosts=data.featuredSidePost.edges
  //const featuredPost=posts[0].node
  return(
    <div>
      <div>
        {mainPosts.map(({node:mainPost})=>(
          <h1><Link to={mainPost.slug}>{mainPost.title}</Link></h1>
        ))}
      </div>
      <div>
        {sidePosts.map(({node:sidePost})=>(
          <h2><Link to={sidePost.slug}>{sidePost.title}</Link></h2>
        ))}
      </div>
      <div>
        {tags.map(({node:tag})=>(
          <li key={tag.id}><Link to={`/${tag.slug}/`}>{tag.title}</Link></li>
        ))}
      </div>
    <div>
      {posts.map(({node:post}) =>(
        
        <li key={post.id}><img src={post.heroImage.fluid.src} alt={post.title}/>
        <Link to={post.slug}>{post.title}</Link></li>
      ))}
    </div>
    </div>
  )
}

export const query = graphql`
query{
  allContentfulPost( sort: { fields: [publishDate], order: DESC }
    filter:{
      featured:{
          eq:"Not_Featured"
          }
         }){
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
        featured
      }
    }
  },
  featuredMainPost: allContentfulPost(
    filter:{
      featured:{
          eq:"Main_Featured"
          }
         }
    ){
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
          featured
        }
      }
    },
    featuredSidePost: allContentfulPost(
      filter:{
        featured:{
            eq:"Side_Featured"
            }
           }
      ){
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
            featured
          }
        }
      },
  allContentfulTag{
    edges{
      node{
        title
        slug
      }
    }
  }
}
`

export default IndexPage
