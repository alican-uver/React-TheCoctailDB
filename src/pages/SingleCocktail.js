import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { Row, Col, Button, Badge, Modal } from 'antd';
import styled from 'styled-components';
import { HomeFilled } from '@ant-design/icons';

const SingleCocktail = props => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [cocktail, setCocktail] = useState(null);
    const [visible, setVisible] = useState(false);

    // Modal Functions
    const showModal = () => {
        setVisible(true)
    };

    const handleOk = () => {
        setVisible(false)
    }

    const handleCancel = () => {
        setVisible(false)
    }

    useEffect(() => {
        setLoading(true);
        async function getSingleCocktail() {
            try {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
                const data = await response.json();
                console.log(data.drinks)
                if (data.drinks) {
                    const { strDrink: name,
                        strDrinkThumb: image,
                        strAlcoholic: info,
                        strCategory: category,
                        strGlass: glass,
                        strInstructions: instructions,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5
                    } = data.drinks[0];
                    const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5];
                    const newCocktail = { name, image, info, category, glass, instructions, ingredients }
                    setCocktail(newCocktail);
                }
                else {
                    setCocktail(null);
                }
            }
            catch (error) {
                console.log(error);
            }
            setTimeout(() => {
                setLoading(false);       
            }, 500);
        }
        getSingleCocktail();
    }, [id])
    
    if (loading) {
        return <Spinner />
    }
    
    if (!cocktail) {
        return <h2> no cocktail to display </h2>
    }
    else {
        const { name, image, category, info, glass, instructions, ingredients } = cocktail;
        return (
            <SingleCocktailWrapper>
                <Link to ="/" className = "go-back-link">
                    <Button icon = {<HomeFilled />} type ="primary" shape ="round"> Back Home </Button>
                </Link>
                <Row gutter = {[20,0]} align ="middle">
                    {/* Left Side */}
                    <Col sm= {12}>
                        <div className = "cocktail-img-container">
                            <img className = "cocktail-img" src= {image} alt="singleCocktail"/>
                        </div>
                    </Col>
                    {/* Right Side */}
                    <Col sm = {12}>
                            <div>Name: <span className = "cocktail-d"> {name} </span> </div>
                            <div>Category: <span className = "cocktail-d"> {category} </span> </div> 
                            <div>Glass: <span className = "cocktail-d"> {glass} </span> </div> 
                            <div>Info: <span className = "cocktail-d"> {info} </span> </div> 
                        {/* Modal */}
                        <Button style= {{marginTop: '15px'}} type ="default" onClick = {showModal}> Show Instructions </Button>
                        <Modal
                            title = "Instructions and Ingredients"
                            visible = {visible}
                            onOk = {handleOk}
                            onCancel = {handleCancel}
                        >
                        <div>{instructions}</div>
                        {
                            ingredients.map((item, index) => {
                                return <Badge 
                                key = {index} 
                                count = {item} 
                                style = {{backgroundColor: '#55B4F8', margin: '5px'}}>
                                </Badge>
                            })
                        }
                        </Modal>
                    </Col>
                </Row>
            </SingleCocktailWrapper>
        )
    }
}

export default SingleCocktail;

const SingleCocktailWrapper = styled.div`
    width:100%;
    max-width:80%;
    margin:auto;
    .cocktail-img-container{
        padding: 10px;
        background-color:#f1f1f1;
        border-radius: 10px;
        max-width:400px;
        margin:auto;
    }
    .cocktail-img {
        width:100%;
        height:auto;
        object-fit:cover;
        border-radius:10px;
    }
    .go-back-link {
        text-align:center;
        display: block; 
        margin: 30px 0 30px 0;
    }
    
    .cocktail-d{
        font-weight:700;
        padding-left: 10px;
    }

`