import { categories } from "../../CATEGORY_DATA";
import DirectoryItem from "../directory-item/directory-item.component";
import './directory.styles.css'

function Directory() {
    return ( 
    <div className='directory-container'>
        {categories.map((category) => (
            <DirectoryItem key={category.key} category={category} />
        ))}
    </div> );
}

export default Directory;