import React, { Component } from 'react'

import { Container, ActionDiv, ReactionSpan, JokeDiv } from './styles'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'

export class Joke extends Component {
    render() {
        return (
            <Container>
                <ActionDiv>
                    <button>
                        <FaAngleUp />
                    </button>
                    <div>STATUS</div>
                    <button>
                        <FaAngleDown />
                    </button>
                </ActionDiv>
                <JokeDiv>
                    <p>{this.props.content}</p>
                </JokeDiv>
                <ReactionSpan role="img" aria-label="smile">
                    😁
                </ReactionSpan>
            </Container>
        )
    }
}

export default Joke
