import React from 'react'
import ListItem from '../Item/Item'

const list = (props) => {
  let items = (
      props.list.map((item, index) => {
          return <ListItem text={item.text} key={item.id}/>
      })
  )
  return (
    <div>
    <h2>{props.title}</h2>
    <ul>
     { items }
    </ul>
    </div>
  )
}
export default list