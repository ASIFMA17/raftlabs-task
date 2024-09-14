import React, { useState } from 'react';
import './addProduct.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { IoArrowBackCircle } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/productSlice';

function AddProduct() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [focus, setFocus] = useState({
        'errName': false,
        'errStock': false,
        'errPrice': false,
        'errCategory': false
    })

    const [inputs, setInputs] = useState({
        'name': '',
        'stock': '',
        'price': '',
        'category': ''
    });

    const onSubmit = async (e) => {
        e.preventDefault();

        console.log(inputs);

        const generateRandomId = () => {
            return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
        };
        
        console.log(generateRandomId()); // Example output: 'a1b2c3d4e'

        // Create the new product object from form inputs
        const newProduct = {
            id: generateRandomId(),
            name: inputs.name,
            stock: inputs.stock,
            price: inputs.price,
            category: inputs.category
        };

        // Dispatch the action to add the new product to the Redux store
        if (newProduct) {
            navigate(`/products/${newProduct.category}`);
            dispatch(addProduct(newProduct));

            console.log("New Product Added:", newProduct);
        }

        // Optionally close the form or update the UI as needed
        //setUpdate(false);

    }

    return (
        <div className='singup-restaurent'>
            <Container>
                <form className='singup-list' onSubmit={onSubmit}>
                    <Row>
                        <div>
                            <Link style={{ display: 'flex', justifyContent: 'start' }} to='/'>
                                <IoArrowBackCircle style={{ width: '24px', height: '24px', color: '#fff' }} />
                            </Link>
                            <h2 className='singup-head'>Add Product</h2>
                            <span className='singup-mainHead'>Enter product details below</span>
                        </div>
                        <Col lg={4} sm={6}>
                            <div>
                                <span className='signupList-Head'>Name :-</span>
                                <input type="text" placeholder='Name' className='inpuBox-singup' id='name' name='name' value={inputs.name} onChange={(e) => setInputs({ ...inputs, name: e.target.value })} onBlur={() => setFocus({ ...focus, errName: true })} focus={focus.errName.toString()} required />
                                <span className='error-signup'>Enter product name</span>
                            </div>
                        </Col>
                        <Col lg={4} sm={6}>
                            <div>
                                <span className='signupList-Head'>Stock :-</span>
                                <input type="number" placeholder='Stock' className='inpuBox-singup' id='stock' name='stock' value={inputs.stock} onChange={(e) => setInputs({ ...inputs, stock: e.target.value })} onBlur={() => setFocus({ ...focus, errStock: true })} focus={focus.errStock.toString()} required />
                                <span className='error-signup'>Enter product stock</span>
                            </div>
                        </Col>
                        <Col lg={4} sm={6}>
                            <div>
                                <span className='signupList-Head'>Price :-</span>
                                <input type="text" placeholder='Price' className='inpuBox-singup' id='price' name='price' value={inputs.price} onChange={(e) => setInputs({ ...inputs, price: e.target.value })} onBlur={() => setFocus({ ...focus, errPrice: true })} focus={focus.errPrice.toString()} required />
                                <span className='error-signup'>Enter product price</span>
                            </div>
                        </Col>
                        <Col lg={4} sm={6}>
                            <div>
                                <span className='signupList-Head'>Category :-</span>

                                <select id="category" name="category" className='inpuBox-singup'
                                    onChange={(e) => setInputs({ ...inputs, category: e.target.value })}
                                    onBlur={() => setFocus({ ...focus, errCategory: true })} focus={focus.errCategory.toString()}
                                    defaultValue={inputs.category}
                                    required>
                                    <option value='' style={{ fontSize: '13px', fontWeight: '500' }}>Select option</option>
                                    <option value='Car' style={{ fontSize: '12px', fontWeight: '500' }}>Car</option>
                                    <option value='Bike' style={{ fontSize: '12px', fontWeight: '500' }}>Bike</option>
                                    <option value='Technical Items' style={{ fontSize: '12px', fontWeight: '500' }}>Technical Items</option>
                                    <option value='Shoes' style={{ fontSize: '12px', fontWeight: '500' }}>Shoes</option>
                                    <option value='Jeep' style={{ fontSize: '12px', fontWeight: '500' }}>Jeep</option>
                                </select>

                                <span className='error-signup'>Enter product category</span>
                            </div>
                        </Col>

                        <Col xs={12}>
                            <div className='singupList-ButtonDiv'>
                                <button className='singupList-Button'>Add Product</button>
                            </div>
                        </Col>
                    </Row>
                </form>
            </Container>
        </div>
    )
}

export default AddProduct
