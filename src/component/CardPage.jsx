import React, { useState } from 'react';
import './card.css';
import { Card } from 'react-bootstrap';
import { toast } from 'react-toastify';
//IMPORT ICONS
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
//import { setProducts } from '../redux/productSlice';
import { deleteProduct, updateProduct } from '../redux/productSlice';

function CardPage({ id , name, stock, price, category , description }) {

    const dispatch = useDispatch();

    const [update, setUpdate] = useState(false);
    const [remove, setRemove] = useState(false);

    const [inputs, setInputs] = useState({
        'name': name,
        'stock': stock,
        'price': price,
        'description' : description,
        'category': category
    });

    const onSubmit = async ( id) => {
        //e.preventDefault();

        updateRemove(false);

        console.log(inputs);

        if (name === '' && stock === '' && price === '' && category === '') {
            toast.error('Please fill in all fields');
            return ;
        }

        if (id && name && stock && price && description && category) {

            dispatch(updateProduct({
                id ,
                name: inputs.name,
                stock: inputs.stock,
                price: inputs.price,
                description: inputs.description,
                category: inputs.category
            }));

            toast.success('Product updated seccessfully completed');

        } else {
            toast.error('Product updated failed');
        }


    }

    const deleteItems = async (id) => {
        removeDelete();

        console.log('product id ==========>' + id);

        if (id) {
            dispatch(deleteProduct(id));
            toast.success('Product deleted seccessfully completed');
        }

    }

    const updateToggle = async () => {
        setUpdate(!update);

    }

    const updateRemove = () => {
        setUpdate(false)

    }

    const removeToggle = async () => {
        setRemove(!remove);

    }

    const removeDelete = async () => {
        setRemove(false);

    }

    return (
        <div className='card-home'>
            <Card className='card-margin'>
                <Card.Body className='cardBody'>
                    <ul className='card-ul'>
                        <li className='card-text'>Name : {name}</li>
                        <li className='card-text'>Price : {price}</li>
                        <li className='card-text'>Stock : {stock}</li>
                        <li className='card-text'>Category : {category}</li>
                        <li className='card-text'>description : {description}</li>
                    </ul>
                    <div className='two-buttons'>
                        <button className='card-button' onClick={(() => updateToggle())}> Update </button>
                        <button className='cardDelete-button' onClick={(() => removeToggle())}> Delete </button>
                    </div>
                </Card.Body>
            </Card>


            {/* UPDATE POPUP CARD */}

            {update && (

                <div className='updateProfile-margin' style={{ display: 'flex', justifyContent: 'center', zIndex: '1', width: '100%' }}>

                    <Card >
                        <Card.Body className='cardUpdateBody '>
                            <Card.Text>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                                    <div style={{ display: 'flex', alignSelf: 'end' }}>
                                        <AiFillCloseCircle className='close-card' onClick={(() => updateRemove())} />
                                    </div>

                                    <form className='form-update' onSubmit={(() => onSubmit(id))}>
                                        <div className='scroll-update'>
                                            <div className='inputDiv-update'>
                                                <span className='card-text'>Name</span>
                                                <input type="text" name='date' className='input-update' defaultValue={inputs.name} onChange={(e) => setInputs({ ...inputs, name: e.target.value })} required/>
                                            </div>
                                            <div className='inputDiv-update'>
                                                <span className='card-text'>Stock</span>
                                                <input type="number" name='date' className='input-update' defaultValue={inputs.stock} onChange={(e) => setInputs({ ...inputs, stock: e.target.value })} required/>
                                            </div>
                                            <div className='inputDiv-update'>
                                                <span className='card-text'>Price</span>
                                                <input type="text" name='date' className='input-update' defaultValue={inputs.price} onChange={(e) => setInputs({ ...inputs, price: e.target.value })} required/>
                                            </div>
                                            <div className='inputDiv-update'>
                                                <span className='card-text'>Description</span>
                                                <input type="text" name='date' className='input-update' defaultValue={inputs.description} onChange={(e) => setInputs({ ...inputs, description: e.target.value })} required/>
                                            </div>
                                            <div className='inputDiv-update'>
                                                <span className='card-text'>Category</span>
                                                <select id="Quantity" name="shopName" className='input-update'
                                                    defaultValue={inputs.category}
                                                    onChange={(e) => setInputs({ ...inputs, category: e.target.value })}
                                                    required>
                                                    <option value='' style={{ fontSize: '13px', fontWeight: '500' }}>Select option</option>
                                                    <option value='Car' style={{ fontSize: '12px', fontWeight: '500' }}>Car</option>
                                                    <option value='Bike' style={{ fontSize: '12px', fontWeight: '500' }}>Bike</option>
                                                    <option value='Technical Items' style={{ fontSize: '12px', fontWeight: '500' }}>Technical Items</option>
                                                    <option value='Shoes' style={{ fontSize: '12px', fontWeight: '500' }}>Shoes</option>
                                                    <option value='Jeep' style={{ fontSize: '12px', fontWeight: '500' }}>Jeep</option>
                                                </select>
                                            </div>

                                        </div>
                                        <div className='two-buttons'>
                                            <button className='card-button' > Update </button>
                                        </div>
                                    </form>


                                </div>

                            </Card.Text>
                        </Card.Body>
                    </Card>

                </div>

            )}


            {/* DELETE POPUP CARD */}

            {remove && (

                <div className='userProfile-margin' style={{ display: 'flex', justifyContent: 'center', zIndex: '1' }}>

                    <Card className='card-allDetails'>
                        <Card.Body className='cardUpdateBody '>
                            <Card.Text>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

                                        <RiDeleteBin5Fill style={{ width: '24px', height: '24px' }} />
                                        <span>Are You Sure?</span>
                                        <span>Do you want to Delete?</span>
                                    </div>



                                    <div className='two-buttons'>
                                        <button className='card-button' onClick={(() => removeDelete())}> No</button>
                                        <button className='cardDelete-button' onClick={(() => deleteItems(id))}>Yes</button>
                                    </div>
                                </div>

                            </Card.Text>
                        </Card.Body>
                    </Card>

                </div>

            )}


        </div>
    )
}

export default CardPage
