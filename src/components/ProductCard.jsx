// import { useCart } from "../context/CartContext";

// function ProductCard({ product }) {
//   const { addToCart } = useCart();

//   const stock = product.stock ?? 10; // fallback
//   const isOutOfStock = stock === 0;

//   return (
//     <div className="product-card">
//       <img src={product.thumbnail} alt={product.title} />

//       <h3>{product.title}</h3>
//       <p>Category: {product.category}</p>
//       <p>Price: ₹{product.price}</p>

//       <p style={{ color: isOutOfStock ? "red" : "green" }}>
//         Status: {isOutOfStock ? "Out of Stock" : "In Stock"}
//       </p>

//       <button
//         disabled={isOutOfStock}
//         onClick={() => addToCart({ ...product, stock })}
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// export default ProductCard;
import { memo } from "react";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const isOutOfStock = product.stock === 0;

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />

      <h3>{product.title}</h3>
      <p>Category: {product.category}</p>
      <p>Price: ₹{product.price}</p>

      <p style={{ color: isOutOfStock ? "red" : "green" }}>
        Status: {isOutOfStock ? "Out of Stock" : "In Stock"}
      </p>

      <button
        disabled={isOutOfStock}
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default memo(ProductCard);



