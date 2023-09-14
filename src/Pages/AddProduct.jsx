import React, { useEffect, useState } from 'react';
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, where } from 'firebase/firestore';
import { auth, db } from '../Firebase';

const AddProduct = (props) => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState('');
  const { room } = props;

  const productsRef = collection(db, 'products');

  useEffect(() => {
    if (room) {
      const q = query(productsRef, where('room', '==', room), orderBy('createdAt'));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        console.log('new product');
        let productsArr = [];
        snapshot.forEach((doc) => {
          productsArr.push({ ...doc.data(), id: doc.id });
          console.log(productsArr);
        });
        setProducts(productsArr);
      });

      return () => unsubscribe();
    }
  }, [room]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!auth.currentUser) {
      // Handle the case when no user is signed in, e.g., redirect to the login page.
      return;
    }

    if (newProduct === '') return;
    await addDoc(productsRef, {
      text: newProduct,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName || 'Anonymous', // Fallback to 'Anonymous' if displayName is not available
      room,
    });
    setNewProduct('');
  };

  return (
    <div>
      <div>
        <h1>Welcome to {room}!!!</h1>
      </div>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <span>
              {product.user}:{product.text}
            </span>
          </div>
        ))}
      </div>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name=""
          id=""
          className="border border-[#fb88] my-0 mx-auto"
          value={newProduct}
          onChange={(e) => setNewProduct(e.target.value)}
        />
        <button type="submit">send product</button>
      </form>
    </div>
  );
};

export default AddProduct;
