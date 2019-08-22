import React, { Component } from 'react'

import { Container, ActionDiv, ReactionDiv, JokeDiv } from './styles'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'

export class Joke extends Component {

    getColor = () => {
        if (this.props.votes >= 15) {
            return "#4CAF50";
        } else if (this.props.votes >= 12) {
            return "#8BC34A";
        } else if (this.props.votes >= 9) {
            return "#cddc39";
        } else if (this.props.votes >= 6) {
            return "#ffeb3b";
        } else if (this.props.votes >= 3) {
            return "#ffc107";
        } else if (this.props.votes >= 0) {
            return "#ff9800";
        } else {
            return "#f44336";
        }
    }

    getEmoji = () => {
        if (this.props.votes >= 15) {
            return "🤣";
        } else if (this.props.votes >= 12) {
            return "😂";
        } else if (this.props.votes >= 9) {
            return "😄";
        } else if (this.props.votes >= 6) {
            return "🙂";
        } else if (this.props.votes >= 3) {
            return "😐";
        } else if (this.props.votes >= 0) {
            return "😕";
        } else {
            return "😠";
        }
    }

    render() {
        return (
            <Container>
                <ActionDiv>
                    <button onClick={this.props.upvote}>
                        <FaAngleUp size={24} />
                    </button>
                    <div style={{ borderColor: this.getColor() }}>
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
                    <span>{this.getEmoji()}</span>
                </ReactionDiv>

            </Container>
        )
    }
}

export default Joke
