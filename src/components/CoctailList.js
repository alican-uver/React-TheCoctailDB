import React, { useContext } from 'react';
import Coctail from './Coctail';
import { ContextCoctail } from '../context/ContextCoctail';
import { Row, Col, Spin } from 'antd';
import styled from 'styled-components';
import Spinner from './Spinner';

const CoctailList = () => {
    const { loading, coctails } = useContext(ContextCoctail);

    if (loading) {
        return <Spinner />
    }

    if (coctails.length < 1) {
        return <h2>no coctails matched your search criteria</h2>
    }

    return (
        <Row gutter={[24, 40]} style={{ width: '90%', margin: 'auto' }}>
            {
                coctails.map(item => {
                    return <Col lg={6} md={8} xs={12} key={item.id} >
                        <Coctail {...item} />
                    </Col>
                })
            }
        </Row>
    )
}

export default CoctailList

const SpinnerWrapper = styled.div`
    text-align:center;
    min-height: calc(100vh - 46px); /* For now */
    display:flex;
    justify-content:center;
    align-items:center;
    
`