import { Outlet } from "react-router-dom";
import { categories } from "../../CATEGORY_DATA";
import DirectoryItem from "../directory-item/directory-item.component";
import './directory.styles.css'

function Directory() {
    return ( 
    <div className='directory-container'>
        <h3>This is not a real store, it is a portfolio project</h3>
        {categories.map((category) => (
            <DirectoryItem key={category.key} category={category} />
        ))}
        <Outlet />
    </div> );
}

export default Directory;