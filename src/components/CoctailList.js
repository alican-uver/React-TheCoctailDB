import React, { useContext } from 'react';
import Coctail from './Coctail';
import { ContextCoctail } from '../context/ContextCoctail';
import { Row, Col } from 'antd';
import Spinner from './Spinner';

const CoctailList = () => {
    const { loading, coctails } = useContext(ContextCoctail);

    if (loading) {
        return <Spinner />
    }

    if (coctails.length < 1) {
        return <h1 style ={{textAlign:'center'}}>No coctails matched your search criteria</h1>
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
