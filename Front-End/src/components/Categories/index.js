import { useContext, useState } from "react";
import { CatContext } from "../../Context";
import { FaEdit, FaTrashAlt, FaStoreAlt } from "react-icons/fa";
import "./index.css";

const ProductHeader = () => {
  return (
    <div className="product-header">
      <span className="product-text">
        Browse All Categories In The Warehouse!
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
  } = useContext(CatContext);

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
    catId,
    name,
  ) => {
    setNewData({ catId , name});
    editMode(id);
  };

  const deleteConfirm = (id) => {
    if (window.confirm("Are you sure You ?")) {
      deleteProductData(id);
    }
  };

  return !productsLength ? (
    <p>
      {productsLength === null ? "Loading..." : "Please insert New Category."}
    </p>
  ) : (
    <>
      <ProductHeader />
      <div className="product-container">
        {products.map(
          ({
            catId,
            name
          }) => {
            return isEditing === true ? (
              <div key={id}>
                <div class="product-card">
                  <input
                    type="text"
                    defaultValue={name}
                    onChange={(e) => updateNewData(e, "name")}
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
                <div className="product-info">
                  <p className="product-name">{name}</p>
                </div>
                <div className="product-button">
                  <button
                    className="table-button edti-button"
                    onClick={() =>
                      enableEdit(catId, name)
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
