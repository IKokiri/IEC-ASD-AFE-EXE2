
import {menu} from '../../dados/Menu'
import ItemMenu from './ItemMenu/ItemMenu';

function Navi() {  
  return (
    <div>  
      <ul className="nav justify-content-center">
      {
        menu.map((items =>
          <ItemMenu itemName={items.menu}/>
        ))
    }
  </ul>
     
    </div>
  );
}

export default Navi;
