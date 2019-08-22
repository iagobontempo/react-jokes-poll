import React, { Component } from 'react'

import { Container, ActionDiv, ReactionDiv, JokeDiv } from './styles'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'

export class Joke extends Component {
    render() {
        return (
            <Container>
                <ActionDiv>
                    <button onClick={this.props.upvote}>
                        <FaAngleUp size={24} />
                    </button>
                    <div>
                        <p>{this.props.votes}</p>
                    </div>
                    <button onClick={this.props.downvote}>
                        <FaAngleDown size={24} />
                    </button>
                </ActionDiv>

                <JokeDiv>
                    <p>{this.props.text}</p>
                </JokeDiv>

                <ReactionDiv>
                    <span>😁</span>
                </ReactionDiv>

            </Container>
        )
    }
}

export default Joke
