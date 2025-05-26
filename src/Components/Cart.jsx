import { useCart } from "./cartContext";
import "./about.css"


const Cart = () => {
  const { cart, updateQuantity } = useCart();

  return (
    <div className="container mx-auto mt-10 px-6 mb-6">
      <h1 className="title-cart text-3xl font-bold text-center mb-6 mt-6 ">Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((product, index) => (
            <div key={index} className="border rounded-lg shadow-lg p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h5 className="text-xl font-semibold mb-1">{product.name}</h5>
              <p className="text-green-600 font-medium mb-2">
                Price: ₹{product.price}
              </p>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => updateQuantity(product.id, product.quantity - 1)}
                  className="px-3 py-1 border rounded hover:bg-gray-100"
                >
                  -
                </button>

                <span className="text-lg font-medium">{product.quantity}</span>

                <button
                  onClick={() => updateQuantity(product.id, product.quantity + 1)}
                  className="px-3 py-1 border rounded hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
