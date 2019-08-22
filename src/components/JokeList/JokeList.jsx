import React, { Component } from 'react'
import axios from 'axios'

import { Container, JokeHeader, List } from './styles'
import Joke from '../Joke/Joke';

// ! NEED ADD SCROLL AT THE LIST CONTAINER 

export class JokeList extends Component {
    static defaultProps = {
        numJokesToGet: 10
    }

    state = {
        jokes: [],
    }

    componentDidMount = async () => {
        let jokes = []
        while (jokes.length < this.props.numJokesToGet) {
            let response = await axios.get("https://icanhazdadjoke.com/", {
                headers: { Accept: 'application/json' } // How to pass something inside a header
            })
            jokes.push(response.data.joke)
        }
        this.setState({ jokes: jokes }) // The second jokes its the LET array created at begining of the componentDidMount
    }

    upvote = () => {

    }
    downvote = () => {

    }

    render() {
        return (
            <Container>
                <JokeHeader>
                    <h1>Jokes List</h1>
                    <button> GET NEW JOKES </button>
                </JokeHeader>
                <List>
                    {this.state.jokes.map(j => (
                        <Joke id={j.id} content={j} />
                    ))}
                </List>
            </Container>
        )
    }
}

export default JokeList
