import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    svg {
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
    & svg {
        margin-left: 10px;
    }
    svg path {
        opacity: 0.8;
        filter: grayscale(100%);
        -webkit-filter: grayscale(100%);
    }
    svg.active path {
        opacity: 1;
        filter: grayscale(0%);
        -webkit-filter: grayscale(0%);
    }
`;

export const Button = styled.a``