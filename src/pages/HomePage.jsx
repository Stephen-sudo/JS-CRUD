import axios from "axios";
import Product from "../components/Product";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { VITE_BACKEND_URL } from "../App";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${VITE_BACKEND_URL}/api/products/`);
      console.log(response.data);
      setProducts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className="shadow-md mt-4 inline-block text-white bg-blue-700 rounded-sm px-4 py-2 hover:bg-blue-600 hover:cursor-pointer font-bold">
        <Link to="/create">Create a Product</Link>
      </div>
      <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {isLoading ? (
          "loading"
        ) : (
          <>
            {products.length > 0 ? (
              <>
                {products.map((product, index) => {
                  return (
                    <Product
                      product={product}
                      key={index}
                      getProducts={getProducts}
                    />
                  );
                })}
              </>
            ) : (
              <div>There is no product</div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
