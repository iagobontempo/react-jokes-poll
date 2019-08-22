import React, { Component } from 'react'

import { Container, ActionDiv, ReactionSpan, JokeDiv } from './styles'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'

export class Joke extends Component {
    render() {
        return (
            <Container>
                <ActionDiv>
                    <button onClick={this.props.upvote}>
                        <FaAngleUp />
                    </button>
                    <div>
                        <p>{this.props.votes}</p>
                    </div>
                    <button onClick={this.props.downvote}>
                        <FaAngleDown />
                    </button>
                </ActionDiv>
                <JokeDiv>
                    <p>{this.props.text}</p>
                </JokeDiv>
                <ReactionSpan role="img" aria-label="smile">
                    😁
                </ReactionSpan>
            </Container>
        )
    }
}

export default Joke
