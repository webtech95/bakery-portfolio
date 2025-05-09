import { useContext } from "react";
import { CartContext } from "../Components/CartSlice";
import { useSelector } from "react-redux";

const Cart = () => {
    const { cart, updateQuantity } = useContext(CartContext);
    const Cart = useSelector(state => state.cart.value);

    if (!cart) {
        return <p className="text-center text-red-500">Something went wrong with the cart data.</p>;
    }

    return (
        <div className="container mx-auto mt-10 px-4">
            <h1 className="text-3xl font-bold text-center mb-6">Cart</h1>

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
                            <p className="text-green-600 font-medium mb-2">Price: {product.price}</p>
                            <p className="mb-3">Quantity: {product.quantity}</p>

                            <div className="flex items-center space-x-4">
                                {/* <h1>{Cart23}</h1> */}
                                <button
                                    className="px-3 py-1 border border-gray-400 rounded hover:bg-gray-100"
                                    // onClick={() => dispatch(decrement())}
                                    onClick={() => updateQuantity(product.id, product.quantity - 1)}

                                >
                                    -
                                </button>
                                <span className="text-lg font-medium">{product.quantity}</span>
                                <button
                                    className="px-3 py-1 border border-gray-400 rounded hover:bg-gray-100"
                                    onClick={() => updateQuantity(product.id, product.quantity + 1)}
                                // onClick={() => dispatch(increment())}
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
{/* <button onClick={() => dispatch(increment())}>Increment</button>
(product.id, product.updateQuantity - 1) */}
export default Cart;
