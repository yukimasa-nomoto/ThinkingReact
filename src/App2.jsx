import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clock from './Clock';
import Profile from './Profile';


function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

function Toolbar({onPlayMovie 
  , onUploadImage
  , onChangeBackGround}) {


  return (
    <div className="toolbar">
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
      <Button onClick={() => alert('Settings clicked!')}>Settings</Button>
      <Button onClick={() => alert('Help clicked!')}>Help</Button>
      <Button onClick={onChangeBackGround}>Change BackGround</Button>
    </div>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>{product.name}</span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products , filterText, inStockOnly }) {
  // Filter products based on filterText and inStockOnly

  const rows = [];
  let lastCategory = null;
  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }

    rows.push(
      <ProductRow 
        product = {product} 
        key = {product.name}
      />
    );
    lastCategory = product.category;
    
  });

  return(
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}

function SearchBar({filterText
  , inStockOnly
  , onFilterTextChange
  , onInStockOnlyChange}) {
  return(
    <form>
      <input type="text" placeholder="Search..." value={filterText}
      onChange={(e) => onFilterTextChange(e.target.value)} />
      <label>
        <input type="checkbox" checked={inStockOnly} 
        onChange={(e) => onInStockOnlyChange(e.target.checked)}/>
        {' '}
        Only show products in stock
      </label>
    </form>  
    );
}

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  function changeBackGroundClick() {
    let bodyStyle = document.body.style;
    if (bodyStyle.backgroundColor === 'black') {
      bodyStyle.backgroundColor = 'white';
    } else {
      bodyStyle.backgroundColor = 'black';
    }
  }
  function useTime() {
    const [time, setTime] = useState(() => new Date());
    useEffect(() => {
      const id = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => clearInterval(id);
    }, []);
    return time;
  }

  const time = useTime();

  /*
  return(
    <div>
      
      <Toolbar
        onPlayMovie={() => alert('Play Movie clicked!')}
        onUploadImage={() => alert('Upload Image clicked!')} 
        onChangeBackGround={changeBackGroundClick}/> 
      <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly} 
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}/>
      <ProductTable products={products}
        filterText={filterText}
        inStockOnly={inStockOnly} />
      <Clock time={time} />
      
    </div>  
  );
  */
  return (
    <>
      <Profile person={{
        imageId: 'lrWQx8l',
        name: 'Subrahmanyan Chandrasekhar',
      }} />
      <Profile person={{
        imageId: 'MK3eW3A',
        name: 'Creola Katherine Johnson',
      }} />
    </>
  );
}

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}

export default App
