import React, { Component } from 'react'
import axios from 'axios'

import { Container, JokeHeader, List } from './styles'
import Joke from '../Joke/Joke';



export class JokeList extends Component {
    static defaultProps = {
        numJokesToGet: 10
    }

    state = {
        jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
    }

    componentDidMount = () => {
        if (this.state.jokes.length === 0) {
            this.getJokes()
        }
    }

    getJokes = async () => {
        let jokes = []
        while (jokes.length < this.props.numJokesToGet) {
            let response = await axios.get("https://icanhazdadjoke.com/", {
                headers: { Accept: 'application/json' } // How to pass something inside a header
            })
            jokes.push({ id: response.data.id, text: response.data.joke, votes: 0 })
        }
        this.setState({ jokes: jokes }) // The second jokes its the LET array created at begining of the componentDidMount
        window.localStorage.setItem("jokes", JSON.stringify(jokes)) // Putting jokes on localStorage. Needs to convert JSON to strings
    }

    handleVote = (id, delta) => {
        this.setState(
            oldState => ({
                jokes: oldState.jokes.map(j =>
                    j.id === id ? { ...j, votes: j.votes + delta } : j
                )
            })
        )
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
                        <Joke key={j.id}
                            id={j.id}
                            text={j.text}
                            votes={j.votes}
                            upvote={() => this.handleVote(j.id, 1)}
                            downvote={() => this.handleVote(j.id, -1)}
                        />
                    ))}
                </List>
            </Container>
        )
    }
}

export default JokeList
