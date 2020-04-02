import {Items} from "../../data";
import {Link} from "next/link";

function ItemDetails(props){
    const {item} = props;

    return <div>
        <div>
            <p>ID:{item.itemId}</p>
            <p>Description:{item.itemDescription}</p>
        </div>
    </div>
}

ItemDetails.getInitialProps = async ({ req, query }) => {
    if (req) {
      const item = await Items.get(query.id)
      return {
        item
      };
    } else {
      const response = await fetch(`/api/items/${query.id}`)
      const item = await response.json()
      return { item }
    }
  }

export default ItemDetails;