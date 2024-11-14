function ItemsDisplay(props) {
  const showItems = (item) => {
    return (
      <div>
        <p>Id: {item.id}</p>
        <p>Name: {item.name}</p>
        <p>Price: ${item.price}</p>
        <p>Type: {item.type}</p>
        <p>Brand: {item.brand}</p>
      </div>
    );
  };

  return <div>{props.items.map(showItems)}</div>;
}

export default ItemsDisplay;
