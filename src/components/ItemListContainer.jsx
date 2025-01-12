import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Loading from "./Loading";


const ItemListContainer = () => {
    const [items, setItems] = useState ([]);
    const [visible, setVisible] = useState(true);
    const {id} = useParams();

    useEffect (() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const queryCollection = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(queryCollection).then(snapShot => {
            if(snapShot.size > 0) {
                setItems(snapShot.docs.map(item => ({id:item.id, ...item.data()})))
                setVisible(false);
            }
        });
    }, [id])    

    return (
        <>
            {id ? "" : <Carousel/>}
            <div className="container">
                <div className="row my-5">
                    {visible ? <Loading/> : <ItemList items={items}/>}
                </div>
            </div>
        </>
    )
}

export default ItemListContainer;