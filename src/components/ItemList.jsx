import Item from "./Item";

/* eslint-disable react/prop-types */
const ItemList = ({items}) => {
    return (
        <>
            {items.map(produ => (
                <Item key={produ.id} item={produ}/>
            ))}
        </>
    )
}

export default ItemList;