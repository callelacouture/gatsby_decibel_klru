const path = require('path')

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions

  const loadPost = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPost(
          sort:{fields:[publishDate], order:DESC}
          limit:1000
        ){
          edges{
            node{
             slug
             publishDate
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allContentfulPost.edges

      posts.forEach((edge) => {
        createPage({
          path: `${edge.node.slug}/`,
          component: path.resolve(`./src/templates/post.js`),
          context:{
            slug: edge.node.slug,
          },
        })
      })
      resolve()
    })
  })
  const loadTags=new Promise((resolve, reject) =>{
    graphql(`
      {
        allContentfulTag{
          edges{
            node{
              slug
              post{
                id
              }
            }
          }
        }
      }
    `).then(result => {
      const tags = result.data.allContentfulTag.edges

      tags.forEach((edge) =>{
        createPage({
          path: `${edge.node.slug}/`,
          component: path.resolve(`./src/templates/tag.js`),
          context:{
            slug:edge.node.slug
          },
        })
      })
      resolve()
    })
  })
  return Promise.all([loadPost, loadTags])
}