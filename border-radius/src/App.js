import styled from 'styled-components';
import Generator from './components/Generator';
import './App.css';

function App() {
    return (
        <Container>
            <h1>Border Radius with 8 values</h1>
            <Generator />
            <h3>Created by ShinyKiwis, 01/06/2022</h3>
        </Container>
    );
}

export default App;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    h1 {
        color: gray;
    }
    h3 {
        color: gray;
        margin: 2em;
    }
`;
