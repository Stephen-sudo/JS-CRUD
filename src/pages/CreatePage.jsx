import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { VITE_BACKEND_URL } from "../App";
const CreatePage = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const saveProducts = async (e) => {
    e.preventDefault();
    if (name === "" || quantity === "" || price === "" || image === "") {
      alert("Please fill out the form");
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.post(`${VITE_BACKEND_URL}/api/products`, {
        name: name,
        quantity: quantity,
        price: price,
        image: image,
      });
      toast.success(`save ${response.data.name} successfully`);
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      toast.error(error.messsage);
      setIsLoading(false);
    }
  };

  return (
    <div className="shadow-lg max-w-lg mt-4 rounded-sm bg-white p-7 mx-auto">
      <h2 className="font-semibold text-2xl text-center block">
        Create a Product
      </h2>
      <form onSubmit={saveProducts}>
        <div className="space-y-2">
          <div>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your Name"
              className="w-full border p-3 rounded block focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400 text-gray-600"
            />
          </div>
          <div>
            <label>Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Enter product quantity"
              className="w-full border p-3 rounded block focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400 text-gray-600"
            />
          </div>
          <div>
            <label>Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter the price"
              className="w-full border p-3 rounded block focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400 text-gray-600"
            />
          </div>
          <div>
            <label>Image URL</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Enter image URL"
              className="w-full border p-3 rounded block focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400 text-gray-600"
            />
          </div>
          <div>
            {!isLoading && (
              <button className="bg-blue-700 text white w-full rounded mt-6 text-white px-4 py-2 font-bold">
                Save
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePage;
