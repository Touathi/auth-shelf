//rendering specific items of the item table of the database 
function ShelfItem (props) {

    return (
        <li>
            <img src={props.item.image_url}/>
            {props.item.description}
            
        </li>

)
}
export default ShelfItem