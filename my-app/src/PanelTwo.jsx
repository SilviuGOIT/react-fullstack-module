import { Component } from "react";

class PanelTwo extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         counter: 5
    //     }
    // }

    static defaultProps = {
        startingValue: 0,
    }

    static title = 'Panel Two';

    state = {
        page: 1,
        title: 'Starea in React',
        counter: this.props.startingValue
    }

    handleCount = () => {
        console.dir(this)
        let step = this.state.counter;
        for(let i = 0; i < 3; i++) {
            step++;
        }

        this.setState({
            counter: step
        })
    }

    render() {
        // const title = 'PanelTwo';
        // console.dir(this);
        // const {index} = this.props;

        return (
            <div>
                <h2>{PanelTwo.title}</h2>
                <h3>Counter {this.props.counter}</h3>
                <h4>Numaratoare: {this.state.counter}</h4>
                <button onClick={this.handleCount}>Click</button>
                <p>Panel class component</p>
            </div>
        )
    }
}

export default PanelTwo;