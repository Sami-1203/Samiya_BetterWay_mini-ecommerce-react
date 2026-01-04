import { useCart } from "../context/CartContext";


function Cart() {

    const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "center",
                borderBottom: "1px solid #ddd",
                padding: "10px 0",
              }}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                width="80"
              />

              <div>
                <h4>{item.title}</h4>
                <p>Price: ₹{item.price}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
  <button onClick={() => decreaseQty(item.id)}>-</button>

  <span>{item.quantity}</span>

  <button onClick={() => increaseQty(item.id)}>+</button>
</div>


                <button onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;


