import React from 'react';
import ProductCard from './components/ProductCard';
import './App.css';

const products = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    title: "Nike Air Max 270 React",
    description: "The Nike Air Max 270 React engineered to the exact specifications of championship athletes.",
    price: 15999,
    salePrice: 12499
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    title: "Titan Leather Strap Watch",
    description: "Elegant minimalist watch with a genuine leather strap and scratch-resistant sapphire crystal glass.",
    price: 8999,
    salePrice: 5499
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    title: "Sony WH-1000XM4",
    description: "Industry-leading noise canceling with Dual Noise Sensor technology. Next-level music with Edge-AI.",
    price: 24990,
    salePrice: 19990
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    title: "RayBan Aviator Classic",
    description: "Currently one of the most iconic sunglass models in the world, Ray-Ban Aviator Classic sunglasses.",
    price: 12500,
    salePrice: 8990
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    title: "Hush Puppies Leather Shoes",
    description: "Handcrafted Italian leather oxford shoes in cognac. Features a durable leather sole and breathable lining.",
    price: 6999,
    salePrice: 4599
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    title: "Sony Alpha a7 III",
    description: "Full-frame Mirrorless Interchangeable Lens Camera with 28-70mm Optical Zoom Lens.",
    price: 156990,
    salePrice: 129990
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    title: "Wildcraft Backpack",
    description: "Water-resistant canvas backpack with dedicated laptop sleeve and anti-theft pockets.",
    price: 3499,
    salePrice: 1999
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    title: "Minimalist Niacinamide Serum",
    description: "A specialized serum to reduce acne marks and control sebum production for clear skin.",
    price: 599,
    salePrice: 569
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    title: "Apple Watch Series 8",
    description: "Advanced health sensors and apps, so you can take an ECG, measure heart rate and blood oxygen.",
    price: 45900,
    salePrice: 41999
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    title: "Puma Sneakers",
    description: "Inspired by the mid-80s basketball shoes. Features premium leather upper and rubber cupsole.",
    price: 5999,
    salePrice: 3499
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    title: "H&M Tote Bag",
    description: "Spacious tote made from sustainable materials. Perfect for work, travel, or shopping.",
    price: 2999,
    salePrice: 1499
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    title: "Wakefit Office Chair",
    description: "Breathable mesh back and adjustable lumbar support for all-day comfort.",
    price: 8999,
    salePrice: 6499
  }
];

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>New Arrivals</h1>
        <p>Discover our curated selection of premium gear.</p>
      </header>

      <div className="product-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            {...product}
            onAddToCart={() => console.log(`Added ${product.title}`)}
            onToggleFavorite={(fav) => console.log(`Toggled favorite: ${fav}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
