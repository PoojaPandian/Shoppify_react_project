import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Product2.css';
import SelectedProduct from './SelectedProduct';
import Cart from './Cart';

const Product2 = ({searchTerm, isCartOpen, handleAddProduct}) => {
  const [products, setProducts] = useState([]);
  const [sortByPriceLow, setSortByPriceLow] = useState();
  const [sortByPriceHigh, setSortByPriceHigh] = useState();
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState(null);

  useEffect(() => {
    axios.get('https://dummyjson.com/products').then((response) => {
      setProducts(response.data.products);
    });
  }, []);

  const handleSortByPricelow = (e) => {
    setSortByPriceLow(e.target.checked);
  };
  const handleSortByPricehigh = (e) => {
    setSortByPriceHigh(e.target.checked);
  };

  const handleBrandFilter = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((selectedBrand) => selectedBrand !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const handleProductClick = (product) => {
    setSelectedProducts(product);
  };

  const handleProductClose = () => {
    setSelectedProducts(null);
  }

  const filteredProducts = products.filter((product) =>
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredByBrand = selectedBrands.length > 0
    ? filteredProducts.filter((product) => selectedBrands.includes(product.brand))
    : filteredProducts;

  if (sortByPriceLow) {
    filteredByBrand.sort((a, b) => a.price - b.price);
  }
  if (sortByPriceHigh) {
    filteredByBrand.sort((a, b) => b.price - a.price);
  }


  return (
    <>
    <section id='section'>
      <div id='div1'>
        <div><h4>Filter by price</h4></div>
        <div><label>
        <input type="checkbox" checked={sortByPriceLow} onChange={handleSortByPricelow}/>
        low to high
        </label></div>
        <div><label>
        <input type="checkbox" checked={sortByPriceHigh} onChange={handleSortByPricehigh}/>
        high to low
        </label></div>
      
        <div><h4>Filter by brand</h4></div>
        <div><label>
        <input type="checkbox" onChange={() => handleBrandFilter('Apple')} checked={selectedBrands.includes('Apple')}/>
        Apple
        </label></div>
        <div><label>
        <input type="checkbox" onChange={() => handleBrandFilter('OPPO')} checked={selectedBrands.includes('OPPO')}/>
        OPPO
        </label></div>
        <div><label>
        <input type="checkbox" onChange={() => handleBrandFilter('Samsung')} checked={selectedBrands.includes('Samsung')}/>
        Samsung
        </label></div>
        <div><label>
        <input type="checkbox" onChange={() => handleBrandFilter('Microsoft Surface')} checked={selectedBrands.includes('Microsoft Surface')}/>
        Microsoft Surface
        </label></div>
        <div><label>
        <input type="checkbox" onChange={() => handleBrandFilter('Infinix')} checked={selectedBrands.includes('Infinix')}/>
        Infinix
        </label></div>
        <div><label>
        <input type="checkbox" onChange={() => handleBrandFilter('HP Pavilion')} checked={selectedBrands.includes('HP Pavilion')}/>
        HP Pavilion
        </label></div>
        <div><label>
        <input type="checkbox" onChange={() => handleBrandFilter('Impression of Acqua Di Gio')} checked={selectedBrands.includes('Impression of Acqua Di Gio')}/>
        Acqua Di Gio
        </label></div>
        <div><label>
        <input type="checkbox" onChange={() => handleBrandFilter('Royal_Mirage')} checked={selectedBrands.includes('Royal_Mirage')}/>
        Royal_Mirage
        </label></div>
        <div><label>
        <input type="checkbox" onChange={() => handleBrandFilter('Fog Scent')} checked={selectedBrands.includes('Fog Scent')}/>
        Fog Scent
        </label></div>
        <div><label>
        <input type="checkbox" onChange={() => handleBrandFilter('Boho Decor')} checked={selectedBrands.includes('Boho Decor')}/>
        Boho Decor
        </label></div>
        <div><label>
        <input type="checkbox" onChange={() => handleBrandFilter('Flying Wooden')} checked={selectedBrands.includes('Flying Wooden')}/>
        Flying Wooden
        </label></div>
        <div><label>
        <input type="checkbox" onChange={() => handleBrandFilter('Golden')} checked={selectedBrands.includes('Golden')}/>
        Golden
        </label></div>
        <div><label>
        <input type="checkbox" onChange={() => handleBrandFilter('LED Lights')} checked={selectedBrands.includes('LED Lights')}/>
        LED Lights
        </label></div>
      </div>
      <div id='div2'>
          {isCartOpen ? (
            <Cart />
          ) : (
            selectedProducts ? (
              <div className='selected_prod'><SelectedProduct key={selectedProducts.id}
          selectedProducts={selectedProducts}
          products={products}
          handleAddProduct={handleAddProduct}
          handleClose={handleProductClose}
          /></div>

            ) : (
              <div className='product_display'>
                {filteredByBrand.map((product) => (
                  <div className='prd_disp1' key={product.id} onClick={() => handleProductClick(product)}>
                    <img className='img_display' src={product.images[0]} alt={product.title} />
                    <h5>{product.title}</h5>
                    <p>Price: ₹ {product.price * 83}</p>
                  </div>
                ))}
              </div>
            )
          )}
        </div>

    </section>
    </>
  );
};

export default Product2;
