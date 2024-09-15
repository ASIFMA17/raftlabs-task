import React, { useEffect } from 'react';
import './home.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { setProducts } from '../redux/productSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
// IMPORT ICONS
import { MdArrowCircleRight } from "react-icons/md";
import { Link } from 'react-router-dom';
// IMPORT IMAGE
import Image1 from '../images/car.png';
import Image2 from '../images/bike.png';
import Image3 from '../images/tv.png';
import Image4 from '../images/shoes.png';
import Image5 from '../images/jeep.png';

function Home() {

  const dispatch = useDispatch();

  useEffect(() => {

    const getDetails = async () => {
      try {

        axios.get("products.json")

        //.then((res) => console.log(res.data.products))
        .then((res) => dispatch(setProducts(res.data.products)))
        .catch((err) => console.log(err));

      } catch (error) {
        console.log(error.message);
      }
    }

    getDetails();

  }, [dispatch]);

  return (
    <div className='dashHome-margin'>
      <Container>
        <div className='product-Head-div-home'>
          <span className='product-Head-home'>Our Products</span>
        </div>
        <Row>

          <Col lg={4} md={6}>
            <div className='card-dashHome cardTow-dashHome'>
              <Card style={{ width: '18rem' }} className='card-dashHome card-bg'>
                <div className='cardImg-div'>
                  <img src={Image1} alt="cardImage" className='img-dashHome' />
                </div>
                <Card.Body className='cardBtn-dashHome'>
                  <div >
                    <MdArrowCircleRight className='rightArrow' />
                    <Link to={`/products/${'Car'}`} className='productLink'> Car</Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <div className='card-dashHome cardTow-dashHome'>
              <Card style={{ width: '18rem' }} className='card-bg'>
                <div className='cardImg-div'>
                  <img src={Image2} alt="cardImage" className='img-dashHome' />
                </div>
                <Card.Body className='cardBtn-dashHome'>
                  <div >
                    <MdArrowCircleRight className='rightArrow' />
                    <Link to={`/products/${'Bike'}`} className='productLink'> Bike</Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <div className='card-dashHome cardTow-dashHome'>
              <Card style={{ width: '18rem' }} className='card-bg'>
                <div className='cardImg-div'>
                  <img src={Image3} alt="cardImage" className='img-dashHome' />
                </div>
                <Card.Body className='cardBtn-dashHome'>
                  <div >
                    <MdArrowCircleRight className='rightArrow' />
                    <Link to={`/products/${'Technical Items'}`} className='productLink'> Technical Items</Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <div className='card-dashHome cardTow-dashHome'>
              <Card style={{ width: '18rem' }} className='card-bg'>
                <div className='cardImg-div'>
                  <img src={Image4} alt="cardImage" className='img-dashHome' />
                </div>
                <Card.Body className='cardBtn-dashHome'>
                  <div >
                    <MdArrowCircleRight className='rightArrow' />
                    <Link to={`/products/${'Shoes'}`} className='productLink'> Shoes</Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>


          <Col lg={4} md={6}>
            <div className='card-dashHome cardTow-dashHome'>
              <Card style={{ width: '18rem' }} className='card-bg'>
                <div className='cardImg-div'>
                  <img src={Image5} alt="cardImage" className='img-dashHome' />
                </div>
                <Card.Body className='cardBtn-dashHome'>
                  <div >
                    <MdArrowCircleRight className='rightArrow' />
                    <Link to={`/products/${'Jeep'}`} className='productLink'> Jeep</Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default Home
