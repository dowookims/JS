import React, { Component } from 'react'
import PropTypes from 'prop-types'

class MyComponent extends Component {
    static defaultProps = {
        name : '기본 이름'
    }

    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number.isRequired
    }

    state = {
        number : 0
    }

    constructor(props) {
        super(props);
        this.state = {
            name : '도우',
            number : 0
        }
    }

    render() {
        return (
            <div>
                <p>하잇, 보쿠노 나마에와 {this.state.name}인 데스웅?</p>
                <p>와타시와 {this.state.number}사이 데스웅</p>
                <button onClick={() => {
                    this.setState({
                        name : this.state.name + 5,
                        number: this.state.number + 1
                    })
                }
            }
            >벗은</button>
        </div>
        )
    }
}

export default MyComponent;