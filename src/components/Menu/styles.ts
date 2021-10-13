import styled, { keyframes } from "styled-components";

interface IProps {
    open: boolean;
}

const translateMenu = keyframes`
  from {
    transform: translate(-200px, 0);
  }

  to {
    transform: translate(0, 0);
  }
`;

export const Menu = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Nav = styled.nav`
    ul {
        display: flex;
        align-items: center;

        li {
            > a {
                color: ${({theme}) => theme.colors.white};
                font-size: 16px;
                line-height: 20px;
                border-bottom: solid 11px transparent;
                cursor: pointer;

                &:hover {
                    color: ${({theme}) => theme.colors.tertiary};
                    background-color: transparent;
                }
            }
        }
        li > a.active {
            border-bottom: solid 11px ${({theme}) => theme.colors.tertiary};
            color: ${({theme}) => theme.colors.tertiary};
            border-radius: 0;
        }
    }
    @media screen and (max-width: 997px) {
        display: none;
    }
`;

export const Mobile = styled.nav`
    display: none;
    position: relative;

    div {
        cursor: pointer;
        margin-right: 20px;
    }

    @media screen and (max-width: 997px) {
        display: block;
    }
`;

export const Button = styled.div``;

export const IconBar = styled.span`
    width: 40px;
    height: 6px;
    border-radius: 5px;
    background-color: ${({theme}) => theme.colors.tertiary};
    margin-top: 5px;
    @media screen and (max-width: 997px) {
        display: block;
    }
`;


export const NavMobile = styled.nav`
    display: ${(props: IProps) => props.open ? 'block' : 'none'};
    background-color: rgba(0,0,0,0.9);
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: 9999;
`;

export const ContainerMenu = styled.div`
    animation: ${translateMenu} 0.2s ease-in-out;
    background-color: ${({theme}) => theme.colors.primary};
    position: fixed;
    left: 0;
    z-index: 9999;
    height: 100vh;
    padding: 20px 10px;
    width: 220px;
    top: 0;
    transition: all .2s;

    img {
        position: initial;
        margin-bottom: 25px;
    }

    ul {
        li {
            border-bottom: 11px solid transparent;
            > a {
                color: ${({theme}) => theme.colors.tertiary};
                font-weight: bold;
                letter-spacing: 1px;
                font-size: 14px;
                display: block;
                padding: 5px 0;

                &:hover {
                    color: ${({theme}) => theme.colors.tertiary};
                    background-color: transparent;
                }
            }
        }
        li.active {
            color: ${({theme}) => theme.colors.tertiary};
            a {
                color: ${({theme}) => theme.colors.tertiary};
            }
        }
    }
`;