import styled from "styled-components";

export const SectionNav = styled.div`
    width: 100vw;
    height: 15rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5rem;

    input {
        width: 25rem;

        @media screen and ( max-width: 1200px){
            width: 15rem;
        }

        @media screen and ( max-width: 996px){
            width: 10rem;
        }
    }

`;

export const DivLogo = styled.div`
    width: 25rem;
    height: 100%;
    margin-top: 2rem;
    padding: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 20rem;
    }
`;

interface DivButtonsProps {
    isScroll: boolean
}

export const DivButtons = styled.div<DivButtonsProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 6rem;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 2rem;
    background: ${props => props.isScroll ? 'linear-gradient(189deg, rgba(130,130,135,0.9710259103641457) 29%, rgba(72,76,136,0) 100%)' : ''};
    transition: all .8s ease;
`;