import React, { Component } from 'react'
import axios from 'axios'

import { Container, JokeHeader, List } from './styles'
import Joke from '../Joke/Joke';

import { FaLaugh } from 'react-icons/fa'

export class JokeList extends Component {
    static defaultProps = {
        numJokesToGet: 10
    }

    state = {
        jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
        loading: false
    }

    componentDidMount = () => {
        if (this.state.jokes.length === 0) {
            this.getJokes()
        }
    }

    getJokes = async () => { //! Changed let to newJokes to be explicit
        let newJokes = []
        this.setState({ loading: true })
        while (newJokes.length < this.props.numJokesToGet) {
            let response = await axios.get("https://icanhazdadjoke.com/", {
                headers: { Accept: 'application/json' } // How to pass something inside a header
            })
            newJokes.push({ id: response.data.id, text: response.data.joke, votes: 0 })
        }
        this.setState(existingState => ({ // ! Just changed the oldState to existingState to keep clear what i'm doing
            loading: false,
            jokes: [...existingState.jokes, ...newJokes] // Putting inside state jokes, all the existing jokes and the new jokes
        }),
            () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
        )
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({ loading: true }, this.getJokes)
    }

    handleVote = (id, delta) => {
        this.setState(
            oldState => ({
                jokes: oldState.jokes.map(j =>
                    j.id === id ? { ...j, votes: j.votes + delta } : j
                )
            }),
            () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
        )
    }

    render() {
        let sortedJokes = this.state.jokes.sort((a, b) => b.votes - a.votes);

        return (
            <Container>
                <JokeHeader>
                    <h1> <p>DAD</p>Jokes</h1>
                    <span>
                        <p>
                            🤣
                        </p>
                    </span>
                    <button onClick={this.handleClick}>NEW JOKES </button>
                </JokeHeader>
                {this.state.loading ?
                    <List>
                        <section>
                            <FaLaugh color={'#fff'} size={80} />
                            <h1>Loading...</h1>
                        </section>
                    </List>
                    :
                    <List>
                        {sortedJokes.map(j => (
                            <Joke key={j.id}
                                id={j.id}
                                text={j.text}
                                votes={j.votes}
                                upvote={() => this.handleVote(j.id, 1)}
                                downvote={() => this.handleVote(j.id, -1)}
                            />
                        ))}
                    </List>}
            </Container>
        )
    }
}

export default JokeList