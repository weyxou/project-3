import React, { useEffect, useState } from 'react';
import firebase from '../../Firebase'; 

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsRef = firebase.database().ref('products');

    productsRef.on('value', (snapshot) => {
      const productsData = snapshot.val();
      if (productsData) {
        const productList = Object.keys(productsData).map((productId) => ({
          id: productId,
          ...productsData[productId],
        }));
        setProducts(productList);
      } else {
        setProducts([]);
      }
    });

    return () => productsRef.off('value');
  }, []);

  return (
    <div>
      <h2>Список товаров</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong>: {product.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;