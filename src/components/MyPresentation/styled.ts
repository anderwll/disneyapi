import styled from "styled-components";

export const Main = styled.div`
    width: 100%;
    height: 100vh;

    video {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const Content = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: flex-end;

    button {
        width: 15rem;
        font-size: 1.6rem;
        font-family: 'Pacifico', cursive;
        color: #cccccc;
        animation: showButton 30s ease;

        &:hover {
            font-size: 1.8rem;
            background-color: transparent;
        }
    }



    @keyframes showButton {
        0% {
            opacity: 0;
            font-size: 2rem;
        }
        50% {
            opacity: 0;
            font-size: 1.8rem;
        }
        100% {
            opacity: 1;
            font-size: 1.6rem;
        }
    }
`;