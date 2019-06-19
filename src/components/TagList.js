import React from 'react'
import {Link} from 'gatsby'

const TagList = props =>{
  return(
    <div>
    {props.tags.map(tag =>(
      <li key={tag.id}>
        <Link to={`/${tag.slug}/`}>{tag.title}</Link>
      </li>

    ))}
    </div>
  )
}

export default TagList