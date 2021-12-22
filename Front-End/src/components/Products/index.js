import { useContext, useState } from "react";
import { ProductContext } from "../../Context";
import { FaEdit, FaTrashAlt, FaStoreAlt } from "react-icons/fa";
import "./index.css";

const ProductHeader = () => {
  return (
    <div className="product-header">
      <span className="product-text">
        Browse All Products In The Warehouse!
      </span>
    </div>
  );
};

const ProductList = () => {
  const {
    products,
    editMode,
    cancelEdit,
    updateProductData,
    deleteProductData,
    productsLength,
  } = useContext(ProductContext);

  const [newData, setNewData] = useState({});

  const saveBtn = () => {
    updateProductData(newData);
  };

  const updateNewData = (e, field) => {
    setNewData({
      ...newData,
      [field]: e.target.value,
    });
  };

  const enableEdit = (
    id,
    p_name,
    p_description,
    p_quantity,
    p_price,
    p_image
  ) => {
    setNewData({ id, p_name, p_description, p_quantity, p_price, p_image });
    editMode(id);
  };

  const deleteConfirm = (id) => {
    if (window.confirm("Are you sure You ?")) {
      deleteProductData(id);
    }
  };

  return !productsLength ? (
    <p>
      {productsLength === null ? "Loading..." : "Please insert New Product."}
    </p>
  ) : (
    <>
      <ProductHeader />
      <div className="product-container">
        {products.map(
          ({
            id,
            p_name,
            p_description,
            p_quantity,
            p_price,
            p_image,
            isEditing,
          }) => {
            return isEditing === true ? (
              <div key={id}>
                <div class="product-card">
                  <input
                    type="text"
                    defaultValue={p_name}
                    onChange={(e) => updateNewData(e, "p_name")}
                  />
                </div>
                <div class="product-card">
                  <input
                    type="text"
                    defaultValue={p_description}
                    onChange={(e) => updateNewData(e, "p_description")}
                  />
                </div>
                <div class="product-card">
                  <input
                    type="number"
                    defaultValue={p_quantity}
                    onChange={(e) => updateNewData(e, "p_quantity")}
                  />
                </div>
                <div>
                  <button
                    className=" save-button table-button"
                    onClick={() => saveBtn()}
                  >
                    Save
                  </button>
                  <button
                    className="table-button"
                    onClick={() => cancelEdit(id)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div key={id}>
                <div className="product-image">
                  <img src={p_image}></img>
                </div>
                <div className="product-info">
                  <p className="product-name">{p_name}</p>
                  <p className="product-description">{p_description}</p>
                  <p className="product-price">{p_price} $</p>
                </div>
                <div className="product-button">
                  <button
                    className="table-button edti-button"
                    onClick={() =>
                      enableEdit(id, p_name, p_description, p_description)
                    }
                  >
                    <FaEdit />
                  </button>
                  <button
                    className=" table-button delete-button"
                    onClick={() => deleteConfirm(id)}
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </>
  );
};

export default ProductList;
