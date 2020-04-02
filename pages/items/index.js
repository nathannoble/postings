import { Fragment } from "react"
import Link from "next/link"
import {Items} from '../../data'

function ListItems({ items }) {
  return <Fragment>
    <ul>
      {items.map(item => {
        return <li key={item.itemId}>
          <Link href="/items/[id]" as={`/items/${item.itemId}`}>
            <a>{item.itemDescription}</a>
          </Link>
        </li>
      })}
    </ul>
    <div>
      <Link href={'/items/new'}>
        <a>New Item</a>
      </Link>
    </div>
  </Fragment>
}

ListItems.getInitialProps = async ({ req }) => {
  if (req) {
    return {
      items: await Items.read()
    };
  } else {
    const response = await fetch('/api/items')
    return { items: await response.json() }
  }
}

export default ListItems