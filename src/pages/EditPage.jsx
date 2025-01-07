import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { VITE_BACKEND_URL } from "../App";
const EditPage = () => {
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    quantity: "",
    price: "",
    image: "",
  });
  const navigate = useNavigate();

  const getProducts = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${VITE_BACKEND_URL}/api/products/${id}`
      );
      setProduct({
        name: response.data.name,
        quantity: response.data.quantity,
        price: response.data.price,
        image: response.data.image,
      });
      setIsLoading(false);
    } catch (error) {
      toast.error(error.message);
    }
  };
  const updatedProduct = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/products/${id}`, product);
      toast.success(`Product updated successfully`);
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="shadow-lg max-w-lg mt-4 rounded-sm bg-white p-7 mx-auto">
      <h2 className="font-semibold text-2xl text-center block">
        Update a Product
      </h2>
      {isLoading ? (
        "Loading"
      ) : (
        <>
          <form onSubmit={updatedProduct}>
            <div className="space-y-2">
              <div>
                <label>Name</label>
                <input
                  type="text"
                  value={product.name}
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      name: e.target.value,
                    })
                  }
                  placeholder="Enter your Name"
                  className="w-full border p-3 rounded block focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400 text-gray-600"
                />
              </div>
              <div>
                <label>Quantity</label>
                <input
                  type="number"
                  value={product.quantity}
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      quantity: e.target.value,
                    })
                  }
                  placeholder="Enter product quantity"
                  className="w-full border p-3 rounded block focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400 text-gray-600"
                />
              </div>
              <div>
                <label>Price</label>
                <input
                  type="number"
                  value={product.price}
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      price: e.target.value,
                    })
                  }
                  placeholder="Enter the price"
                  className="w-full border p-3 rounded block focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400 text-gray-600"
                />
              </div>
              <div>
                <label>Image URL</label>
                <input
                  type="text"
                  value={product.image}
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      image: e.target.value,
                    })
                  }
                  placeholder="Enter image URL"
                  className="w-full border p-3 rounded block focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400 text-gray-600"
                />
              </div>
              <div>
                {!isLoading && (
                  <button className="bg-blue-700 text white w-full rounded mt-6 text-white px-4 py-2 font-bold">
                    Update
                  </button>
                )}
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default EditPage;
