import React, { useEffect, useState } from 'react';
import './card.css';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CardPage from './CardPage';
import { useParams } from 'react-router-dom';
// IMPORT ICONS
import { IoArrowBackCircle } from "react-icons/io5";

function Bike() {

    const dispatch = useDispatch();
    const [details, setDetails] = useState([]);

    const { category } = useParams();
    //console.log(category);

    const productsDetails = useSelector((state) => state.products?.product ?? []);
    //console.log(productsDetails);

    useEffect(() => {

        const carDetails = async () => {

            if (productsDetails) {
                //console.log(productsDetails);

                const carDetails = productsDetails.filter((item) => item.category === category);
                //console.log('filter Details' + carDetails);
                setDetails(carDetails);
                //console.log('state value' + details);

            }

        }

        carDetails();

    }, [productsDetails, details, dispatch, category]);

    return (
        <div>

            <Container >

                <div style={{ display: 'flex', gap: '5px', marginBottom: '10px', marginTop: '40px' }}>
                    <Link style={{ display: 'flex', justifyContent: 'start' }} to='/'>
                        <IoArrowBackCircle style={{ width: '24px', height: '24px', color: '#4E342E' }} />
                    </Link>
                    <span className='head'>Product Listing</span>
                </div>

                <Row>

                    {details && details.map((element, index) => {

                        return (

                            <Col lg={4} sm={6} key={index}>

                                <CardPage name={element.name} stock={element.stock} price={element.price} category={element.category} description={element.description} />

                            </Col>

                        )

                    })}

                </Row>

            </Container>

        </div>
    )
}

export default Bike
