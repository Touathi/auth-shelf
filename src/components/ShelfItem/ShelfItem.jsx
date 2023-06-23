import { useDispatch } from "react-redux"

//rendering specific items of the item table of the database 
function ShelfItem (props) {

    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch({type: 'DELETE_ITEM', payload: props.item.id})
        console.log('props.item.id is', props.item.id)
    }

    return (
        <li>
            <img src={props.item.image_url}/>
            {props.item.description}
            <button onClick={handleDelete}>Delete</button>
        </li>

)
}
export default ShelfItem