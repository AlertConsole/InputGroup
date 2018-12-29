import React from 'react';
import './index.css';
export default class InputGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boxLength: [],
            numList: [],
            isFocus: false,
            num: ''
        };
        this.textChange = this.textChange.bind(this);
        this.inputFocus = this.inputFocus.bind(this);
    }
    textChange(e) {
        const value = e.target.value.replace(/[^\d]/g, '')
        this.props.getValue(value)
        this.setState({
            num: value
        })
        setTimeout(() => {
            this.setState({
                numList: this.state.num.split('')
            })
        }, 100);
    }
    inputFocus() {
        this.refs.focus()
        this.setState({ isFocus: true })
    }
    componentDidMount() {
        const { length } = this.props;
        switch (length) {
            case 4:
                this.setState({
                    boxLength: [0, 1, 2, 3]
                })
                break;
            case 6:
                this.setState({
                    boxLength: [0, 1, 2, 3, 4, 5]
                })
                break;
            default:
                this.setState({
                    boxLength: [0, 1, 2, 3, 4, 5]
                })
        }
    }
    render() {
        const { length, type } = this.props;
        const { num, numList, isFocus, boxLength } = this.state;
        return (
            <div >
                {
                    type === 'line' ?
                        <div onClick={this.inputFocus} className="box-root-container">
                            <input
                                ref={ref=>this.refs=ref}
                                className="box-input"
                                maxLength={length}
                                value={num}
                                onChange={this.textChange}
                                onBlur={() => this.setState({ isFocus: false })}
                            />
                            <div className="box-containers">
                                {boxLength.map((item, index) => {
                                    return (
                                        <div key={index} >{numList[item]}<span className="shake" style={{ display: item === numList.length && isFocus ? 'block' : 'none' }}>|</span> </div>
                                    )
                                })}
                            </div>
                        </div>
                        : ''
                }
                {
                    type === 'box' ?
                        <div onClick={this.inputFocus} className="box-root-container">
                            <input
                                ref={ref=>this.refs=ref}
                                className="box-input"
                                maxLength={length}
                                value={num}
                                onChange={this.textChange}
                                onBlur={() => this.setState({ isFocus: false })}
                            />
                            <div className="box-container">
                                {boxLength.map((item, index) => {
                                    return (
                                        <div key={index} >{numList[item]}<span className="shake" style={{ display: item === numList.length && isFocus ? 'block' : 'none' }}>|</span> </div>
                                    )
                                })}
                            </div>
                        </div>
                        : ''
                }
            </div>
        );
    }
}