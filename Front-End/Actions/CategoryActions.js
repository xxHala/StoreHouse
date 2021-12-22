import { useEffect, useState } from "react";

export const CategoryActions = () => {
  let [products, setProducts] = useState([]);

  //productsLength is for showing the Data Loading message.

  let [productsLength, setProdLength] = useState(null);
  useEffect(() => {
    fetch("http://127.0.0.1:8080/storeHouse/Category/all-cat.php")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
            setProducts(data.products);
            setProdLength(true);
        } else {
            setProdLength(0);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  // Inserting a new product with it's data into the database.
  const insertProduct = (newProduct) => {
    fetch(" http://127.0.0.1:8080/storeHouse/Category/add-cat.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.id) {
            setProducts([
            {
              id: data.id,
              ...newProduct,
            },
            ...products,
          ]);
          setProdLength(true);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Enabling the edit mode for a listed user.
  const editMode = (id) => {
    products = products.map((prod_data) => {
      if (prod_data.id === id) {
        prod_data.isEditing = true;
        return prod_data;
      }
      prod_data.isEditing = false;
      return prod_data;
    });
    setProducts(products);
  };

  // Cancel the edit mode.
  const cancelEdit = (id) => {
    products = products.map((data) => {
      if (data.id === id) {
        data.isEditing = false;
        return data;
      }
      return data;
    });
    setProducts(products);
  };

  // Updating a product
  const updateProductData = (prod_data) => {
    fetch("http://127.0.0.1:8080/storeHouse/Category/update-cat.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prod_data),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
            products = products.map((prodData) => {
            if (data.id === prod_data.id) {
              prodData.isEditing = false;
              prodData.p_name = prod_data.p_name;
              prodData.p_description = prod_data.p_description;
              prodData.p_price=prod_data.p_price;
              prodData.p_image=prod_data.p_image;
              return prodData;
            }
            return prodData;
          });
          setProducts(products);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteProductData = (theID) => {
      // filter outing the Data
    let Deleted = products.filter((prodData) => {
      return prodData.id !== theID;
    });
    fetch("http://127.0.0.1:8080/storeHouse/Category/delete-cat.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: theID }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
            setProducts(Deleted);
          if (products.length === 1) {
            setProdLength(0);
          }
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    products,
    editMode,
    cancelEdit,
    updateProductData,
    insertProduct,
    deleteProductData,
    productsLength,
  };
};
