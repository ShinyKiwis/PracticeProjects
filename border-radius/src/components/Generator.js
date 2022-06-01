import styled from 'styled-components';
import { useState } from 'react';

function Generator() {
    const [borderValues, setBorder] = useState({
        a: 50,
        b: 50,
        c: 50,
        d: 50,
        e: 50,
        f: 50,
        g: 50,
        h: 50,
    });
    const handleInputTop = (e) => {
        setBorder({
            a: e.target.value,
            b: 100 - e.target.value,
            c: borderValues.c,
            d: borderValues.d,
            e: borderValues.e,
            f: borderValues.f,
            g: borderValues.g,
            h: borderValues.h,
        });
    };
    const handleInputBottom = (e) => {
        setBorder({
            a: borderValues.a,
            b: borderValues.b,
            c: 100 - e.target.value,
            d: e.target.value,
            e: borderValues.e,
            f: borderValues.f,
            g: borderValues.g,
            h: borderValues.h,
        });
    };
    const handleInputLeft = (e) => {
        setBorder({
            a: borderValues.a,
            b: borderValues.b,
            c: borderValues.c,
            d: borderValues.d,
            e: e.target.value,
            f: borderValues.f,
            g: borderValues.g,
            h: 100 - e.target.value,
        });
    };

    const handleInputRight = (e) => {
        setBorder({
            a: borderValues.a,
            b: borderValues.b,
            c: borderValues.c,
            d: borderValues.d,
            e: borderValues.e,
            f: e.target.value,
            g: 100 - e.target.value,
            h: borderValues.h,
        });
    };

    return (
        <Container>
            <input
                id="top"
                type="range"
                min="0"
                max="100"
                onChange={(e) => {
                    handleInputTop(e);
                }}
            />
            <input
                id="bottom"
                type="range"
                min="0"
                max="100"
                onChange={(e) => {
                    handleInputBottom(e);
                }}
            />
            <input
                id="left"
                type="range"
                min="0"
                max="100"
                onChange={(e) => {
                    handleInputLeft(e);
                }}
            />
            <input
                id="right"
                type="range"
                min="0"
                max="100"
                onChange={(e) => {
                    handleInputRight(e);
                }}
            />
            <Wrapper>
                <Circle borderValues={borderValues} />
            </Wrapper>
            <Output>
                <p>Border Radius:</p>
                <span>
                    {borderValues.a}% {borderValues.b}% {borderValues.c}% {borderValues.d}% / {borderValues.e}% {borderValues.f}% {borderValues.g}% {borderValues.h}%
                </span>
                <Button
                    onClick={()=>{navigator.clipboard.writeText(
                        `${borderValues.a}% ${borderValues.b}% ${borderValues.c}% ${borderValues.d}% / ${borderValues.e}% ${borderValues.f}% ${borderValues.g}% ${borderValues.h}%`
                    )}}
                >
                    Copy
                </Button>
            </Output>
        </Container>
    );
}

export default Generator;

const Button = styled.button`
    cursor: pointer;
    margin-top: 1em;
    height: 5vh;
    width: 10vh;
    font-size: 18px;
    background-color: #ccc;
    border-radius: 4px;
`;

const Output = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    color: gray;
    span {
        display: flex;
        align-items: center;
        padding: 10px;
        margin-top: 1em;
        border-radius: 4px;
        height: 5vh;
        background-color: #ccc;
    }
    margin-top: 3em;
`;

const Container = styled.div`
    position: relative;

    input[type='range'] {
        -webkit-appearance: none;
    }
    input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none;
        border: none;
        height: 16px;
        width: 16px;
        background: white;
        border: 2px black solid;
    }

    #top {
        width: 100%;
        background: transparent;
        color: transparent;
        cursor: pointer;
        position: absolute;
        top: -1rem;
    }
    #bottom {
        width: 100%;
        background: transparent;
        color: transparent;
        cursor: pointer;
        position: absolute;
        top: 22.6rem;
    }
    #left {
        width: 100%;
        transform: rotate(90deg);
        background: transparent;
        color: transparent;
        cursor: pointer;
        position: absolute;
        top: 10.8rem;
        left: -11.8rem;
    }
    #right {
        width: 100%;
        transform: rotate(90deg);
        background: transparent;
        color: transparent;
        cursor: pointer;
        position: absolute;
        top: 10.8rem;
        left: 11.8rem;
    }
`;

const Wrapper = styled.div`
    z-index: -1;
    display: flex;
    flex-direction: column;
    border: 2px gray dashed;
    padding: 4px;
`;

const Circle = styled.div.attrs((props) => ({
    style: {
        borderRadius: props.borderValues
            ? `${props.borderValues.a}% ${props.borderValues.b}% ${props.borderValues.c}% ${props.borderValues.d}% / ${props.borderValues.e}% ${props.borderValues.f}% ${props.borderValues.g}% ${props.borderValues.h}%`
            : '0',
    },
}))`
    width: 350px;
    height: 350px;
    background-image: linear-gradient(-125deg, #0022b8, #8694d1);
    box-shadow: -40px 40px rgba(30, 30, 31, 0.2);
`;
