function ItemMenu(props) {  
  return (
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">{props.itemName}</a>
    </li>
  );
}

export default ItemMenu;
