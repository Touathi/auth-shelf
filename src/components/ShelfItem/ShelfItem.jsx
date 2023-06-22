//rendering specific items of the item table of the database 
function ShelfItem (item) {

    return (
        <li>
            <img src="item.image_url"/>
            {item.description}
            
        </li>

)
}
export default ShelfItem