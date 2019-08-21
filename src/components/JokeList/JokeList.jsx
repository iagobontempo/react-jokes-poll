import React, { Component } from 'react'

import { Container } from './styles'
import Joke from '../Joke/Joke';

export class JokeList extends Component {
    render() {
        return (
            <Container>
                <h1>Jokes List</h1>
                <Joke />
            </Container>
        )
    }
}

export default JokeList
