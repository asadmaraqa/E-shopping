import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { modifyProduct } from '../../../redux/slices/products';
import { AppState, Inputs, ProductTypes, SelectedValue } from '../../../globalTypes';
import { catergoryOptions, sizeOptions, variantOptions } from '../AddProductForm/options';
import Select from '../AddProductForm/Select';

const ModifyProductForm = () => {
  const [success, setSuccess] = useState(false);
  const products = useSelector((state: AppState) => state.products.listOne)
  const { name, _id, price, stock, description, } = products as any[""]
  const [inputs, setInputs] = useState<any>({
    name: "",
    price: "",
    stock: "",
    description: "",
    img: "",
    sizes: [{ label: "", value: "" }],
    variants: [{ label: "", value: "" }],
    categories: [{ label: "", value: "" }],
  });

  const [selectedSize, setSelectedSize] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const handlePhoto = async (e: any ) => {
    setInputs({ ...inputs, img: e.target.files[0] })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values:any) => ({ ...values, [name]: value }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    if (inputs.img !== "") { formData.append("img", inputs.img); }
    if (inputs.name !== "") formData.append("name", inputs.name)
    if (inputs.price !== "") formData.append("price", inputs.price.toString())
    if (inputs.stock !== "") formData.append("stock", inputs.stock.toString())
    console.log(typeof inputs.stock)
    if (inputs.description !== "") formData.append("description", inputs.description)
    selectedSize.map((val: SelectedValue) => { if (val.value !== null) formData.append("sizes", JSON.stringify(val['value'])) });
    selectedVariant.map((val: SelectedValue) => { if (val.value !== null) formData.append("variants", JSON.stringify(val['value']))});
    selectedCategory.map((val: SelectedValue) => { if (val.value !== null) formData.append("categories", JSON.stringify(val['value'])) });
    dispatch(modifyProduct(formData, _id))
    setSuccess(true)
  }
  const dispatch = useDispatch();
  return (
    <>


      <form onSubmit={handleSubmit} className="form" encType="multipart/form-data" method="post">
        {success ? <h2>Product modified</h2> : ""}
        <label>Name:
          <input
            type="text"
            name="name"
            value={inputs.name}
            onChange={handleChange}
            placeholder={name}

          />
        </label>
        <label>Description:
          <textarea
            name="description"
            value={inputs.description}
            onChange={handleChange}
            placeholder={description}

          />
        </label>
        <label>Price:
          <input
            type="number"
            name="price"
            value={inputs.price || ""}
            placeholder={String(price)}
            onChange={handleChange}
          />
        </label>
        <label>stock:
          <input
            type="number"
            name="stock"
            value={inputs.stock || ""}
            placeholder={String(stock)}
            onChange={handleChange}
          />
        </label>
        <Select options={sizeOptions} value={selectedSize}
          onChange={setSelectedSize} labelledBy="Select size"
          label="sizes:" />
        <Select options={variantOptions} value={selectedVariant}
          onChange={setSelectedVariant} labelledBy="Select variant"
          label="Variants:" />
        <Select options={catergoryOptions} value={selectedCategory}
          onChange={setSelectedCategory} labelledBy="Select categroy"
          label="Categories:" />
        <input type="file" name="img" onChange={handlePhoto} />
        <input type="submit" className='button' />
      </form>
    </>
  )
}

export default ModifyProductForm