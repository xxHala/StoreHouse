import { useState, useContext } from "react";
import { ProductContext } from "../../Context";
import {FormLabel, FormTitle , FormBottom} from "./FormElements";

const Form = () => {
  const { insertProduct } = useContext(ProductContext);
  const [newProduct, setNewProduct] = useState({});


  const addNewProduct = (e, field) => {
    setNewProduct({
      ...newProduct,
      [field]: e.target.value,
    });
  };

  const submitNewData = (e) => {
    e.preventDefault();
    insertProduct(newProduct);
    e.target.reset();
  };

  return (
      <div className='table-wrapper'>
    <form className="insertForm createProductForm" onSubmit={submitNewData}>
       <FormTitle>
        Create a New Product!
        </FormTitle>
    <div className = 'label-row'>
    <div className = 'input-label'>
      <FormLabel>Product Name</FormLabel>
      <input
        type="text"
        onChange={(e) => addNewProduct(e, "p_name")}
        required
      />
      </div>
      <div className = 'input-label'>
      <FormLabel>Product description</FormLabel>
      <input
        type="text"
        onChange={(e) => addNewProduct(e, "p_description")}
        required
      />
      </div>
      </div>
      <div className = 'label-row'>
    <div className = 'input-label'>
      <FormLabel>Quantity</FormLabel>
      <input
        type="Number"
        onChange={(e) => addNewProduct(e, "p_quantity")}
        required
      />
      </div>
      <div className = 'input-label'>
      <FormLabel>Product image </FormLabel>
      <input
        type="textarea"
        onChange={(e) => addNewProduct(e, "p_image")}
        required
      />
      </div>
      </div>
      <div className = 'label-row'>
      <div className = 'input-label'>
      <FormLabel>Price </FormLabel>
      <input
        type="number"
        onChange={(e) => addNewProduct(e, "p_price")}
        required
            /></div>
            </div>
      <div className = 'label-row'>
      <input className ="newProduct--button" type="submit" value="Add New " /> </div>
    </form>
    </div>
  );
};

export default Form;
