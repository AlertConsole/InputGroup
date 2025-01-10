import React from 'react';
import './index.css';

class InputGroup extends React.Component {
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
        const value = this.props.filter(e).substr(0,this.props.length)
        this.props?.getValue(value)
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
        const { length,value } = this.props;
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
        }
        value && this.textChange(value)
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
                                onChange={({target})=>{this.textChange(target.value)}}
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
                                onChange={({target})=>{this.textChange(target.value)}}
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
InputGroup.defaultProps ={
    length:6,
    type:'box',
    filter:value=>{
        return value.replace(/[\W+]/g, '')
    }
}
export default InputGroup
