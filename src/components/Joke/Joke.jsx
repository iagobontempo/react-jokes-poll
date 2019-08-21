import React, { Component } from 'react'

import { Container, ActionDiv, ReactionDiv, JokeDiv } from './styles'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'

export class Joke extends Component {
    render() {
        return (
            <Container>
                <ActionDiv>
                    <FaAngleUp />
                    <div>STATUS</div>
                    <FaAngleDown />
                </ActionDiv>
                <JokeDiv>
                    <p>Joke blablabalbalblablalbalbalabl</p>
                </JokeDiv>
                <ReactionDiv>
                    😁
                </ReactionDiv>
            </Container>
        )
    }
}

export default Joke
