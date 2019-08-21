import React, { Component } from 'react'

import { Container, JokeHeader, List } from './styles'
import Joke from '../Joke/Joke';

// ! NEED ADD SCROLL AT THE LIST CONTAINER 

export class JokeList extends Component {
    render() {
        return (
            <Container>
                <JokeHeader>
                    <h1>Jokes List</h1>
                    <button> GET NEW JOKES </button>
                </JokeHeader>
                <List>
                    <Joke />
                    <Joke />
                    <Joke />
                    <Joke />
                    <Joke />
                    <Joke />
                    <Joke />
                    <Joke />
                    <Joke />
                    <Joke />
                </List>
            </Container>
        )
    }
}

export default JokeList
