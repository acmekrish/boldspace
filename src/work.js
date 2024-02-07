import React, { useState } from 'react';
import Product from './product';



  const Items =  () => {


    const [products, setProducts] = useState([
      { id: 1, name: 'Laptop', category: 'electronics', price: 800, rating: 4 },
      { id: 2, name: 'T-shirt', category: 'clothing', price: 800, rating: 3 },
      { id: 3, name: 'Book', category: 'books', price: 800, rating: 5 },
    
    ]);


     // State to hold selected category, price range, and minimum rating for filtering
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [minRating, setMinRating] = useState(0);


    const handleCategoryChange = (event) => {
      setSelectedCategory(event.target.value);
    };
  
    // Function to handle price range change
    const handlePriceRangeChange = (event) => {
      const { name, value } = event.target;
      setPriceRange(prevRange => ({
        ...prevRange,
        [name]: parseInt(value)
      }));
    };
  
    // Function to handle minimum rating change
    const handleMinRatingChange = (event) => {
      setMinRating(parseInt(event.target.value));
    };
    

   
  
    const filteredProducts = products.filter(product => {
      return (
        (selectedCategory === 'all' || product.category === selectedCategory) &&
        product.price >= priceRange.min &&
        product.price <= priceRange.max &&
        product.rating >= minRating
      );
    })
    
    
    return (
        <div>
        <h2>E-Commerce Product Filters</h2>
        <div>
        <label htmlFor="category">Category:</label>
        <select id="category" onChange={handleCategoryChange} value={selectedCategory}>
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="books">Books</option>
        </select>
      </div>
      <div>
        <label htmlFor="minPrice">Min Price:</label>
        <input type="number" id="minPrice" name="min" onChange={handlePriceRangeChange} value={priceRange.min} />
        <label htmlFor="maxPrice">Max Price:</label>
        <input type="number" id="maxPrice" name="max" onChange={handlePriceRangeChange} value={priceRange.max} />
      </div>
      <div>
        <label htmlFor="minRating">Min Rating:</label>
        <input type="number" id="minRating" min="0" max="5" onChange={handleMinRatingChange} value={minRating} />
      </div>

      
      <div>
        {filteredProducts.map(product => (
          <Product key={product.id} name={product.name} />
        ))}
      </div>
        </div>

    )
        }
      
export default Items

