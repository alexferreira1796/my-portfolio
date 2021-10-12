import styled from "styled-components";

export const Menu = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ListMenu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    & li {
        margin-left: 40px;
    }
`

export const List = styled.li`
    a { 
        color: ${({theme}) => theme.colors.white};
        transition: all 0.2s linear;

        &:hover {
            color: ${({theme}) => theme.colors.tertiary};
        }
    
    }
    a.active {
        border-bottom: 1px solid ${({theme}) => theme.colors.tertiary};
    }
`