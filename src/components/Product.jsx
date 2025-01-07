import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Product = ({ product, getProducts }) => {
  const deleteProduct = async (id) => {
    const results = await Swal.fire({
      title: "Are you sure you want delete the product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (results.isConfirmed) {
      try {
        await axios.delete(`http://localhost:3000/api/products/${id}`);
        toast.success(`Product deleted successfully`);
        getProducts();
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="bg-white shadow-lg rounded overflow-hidden">
      <img src={product.image} className="h-28 w-full object-cover" />

      <div className="pt-2 px-4 pb-2">
        <h2 className="text font-semibold">Name: {product.name}</h2>
        <div className="text-sm">Quantity: {product.quantity}</div>
        <div className="text-sm">Price ${product.price}</div>

        <div className="mt-2 flex gap-4">
          <Link
            to={`/edit/${product._id}`}
            className="text-white text-center w-full bg-gray-700 rounded-sm inline-block py-1 px-4 hover:bg-gray-600 hover:cursor-pointer"
          >
            Edit
          </Link>
          <button
            onClick={() => deleteProduct(product._id)}
            className="text-white text-center w-full bg-red-700 rounded-sm inline-block py-1 px-4 hover:bg-red-600 hover:cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
