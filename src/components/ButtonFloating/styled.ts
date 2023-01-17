import styled from "styled-components";

interface DivButtonFloatingProps {
    display: string
}

export const DivButtonFloating = styled.div<DivButtonFloatingProps>`
    display: ${porps => porps.display};
    position: fixed;
    right: 0;
    bottom: 0;
    margin-right: 2rem;
    margin-bottom: 2rem;
    z-index: 999;

    svg {
        font-size: 2rem;
    }
`;
