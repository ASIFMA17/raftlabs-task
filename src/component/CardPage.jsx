import React, { useState } from 'react';
import './card.css';
import { Card } from 'react-bootstrap';
//IMPORT ICONS
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
//import { setProducts } from '../redux/productSlice';
import { appData } from '../appData';
import { deleteProduct, setProducts, updateProduct } from '../redux/productSlice';

function CardPage({ id , name, stock, price, category }) {

    const dispatch = useDispatch();
    const productsDetails = useSelector((state) => state.products?.product ?? []);
    //console.log(productsDetails);

    const [update, setUpdate] = useState(false);
    const [remove, setRemove] = useState(false);

    const [inputs, setInputs] = useState({
        'name': name,
        'stock': stock,
        'price': price,
        'category': category
    });

    const onSubmit = async ( id) => {
        //e.preventDefault();

        updateRemove(false);

        console.log(inputs);

        // Get index of the object where the brand is 'Maruti'
        //const index = productsDetails.findIndex(element => element.name === name && element.stock === stock);
        //console.log(index);

        if (id) {

            dispatch(updateProduct({
                id ,
                name: inputs.name,
                stock: inputs.stock,
                price: inputs.price,
                category: inputs.category
            }));
            //setProductUpdate(true);

            console.log('updated appData ==========>');   
            console.log(appData);

        }

        //productsDetails[index] = input;
        //const newProducts = productsDetails.slice(index, 1, input);
        //console.log(newProducts);
        //dispatch(setProducts(newProducts));


    }

    const deleteItems = async (id) => {
        removeDelete();

        console.log('product id ==========>' + id);

        if (id) {
            dispatch(deleteProduct(id));
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
                {/* <div className='image-margin'> */}
                {/*<Card.Img variant="top" src={image} className='card-img' /> */}
                {/* </div> */}
                <Card.Body className='cardBody'>
                    {/* <Card.Title className='card-head'>{ }</Card.Title> */}
                    {/* <Card.Text> */}
                    <ul className='card-ul'>
                        <li className='card-text'>Name : {name}</li>
                        <li className='card-text'>Price : {price}</li>
                        <li className='card-text'>Stock :- {stock}</li>
                        <li className='card-text'>Category : {category}</li>
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
                                                <input type="text" name='date' className='input-update' defaultValue={inputs.name} onChange={(e) => setInputs({ ...inputs, name: e.target.value })} required />
                                            </div>
                                            <div className='inputDiv-update'>
                                                <span className='card-text'>Stock</span>
                                                <input type="number" name='date' className='input-update' defaultValue={inputs.stock} onChange={(e) => setInputs({ ...inputs, stock: e.target.value })} required />
                                            </div>
                                            <div className='inputDiv-update'>
                                                <span className='card-text'>Price</span>
                                                <input type="text" name='date' className='input-update' defaultValue={inputs.price} onChange={(e) => setInputs({ ...inputs, price: e.target.value })} required />
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
                                                {/* <input type="text" style={{ border: 'solid 1px #000000', borderRadius: '6px', padding: '3px 15px', outline: 'none' }} /> */}
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
