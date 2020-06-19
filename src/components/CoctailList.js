import React, { useContext } from 'react';
import Coctail from './Coctail';
import { ContextCoctail } from '../context/ContextCoctail';
import { Row, Col } from 'antd';

const CoctailList = () => {
    const { loading, coctails } = useContext(ContextCoctail);

    if (loading) {
        return <h2 style={{ textAlign: 'center' }}>Loading Coctails ...</h2>
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
