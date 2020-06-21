import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';

const Spinner = () => {
    return (
        <SpinnerWrapper>
            <Spin size = "large"></Spin>
        </SpinnerWrapper>
    )
}

export default Spinner;

const SpinnerWrapper = styled.div`
    text-align:center;
    display:flex;
    align-items:center;
    justify-content: center;
    min-height:  100vh;
`
