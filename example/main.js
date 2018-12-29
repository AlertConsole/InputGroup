import React from 'react'
import ReactDOM from 'react-dom'
import InputGroup from '../src/InputGroup' 
/**
 * type:'line' or 'box';
 * length:4 or 6 ;
 * getValue: 获取返回值的方法
 */
export class Inputarea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.getValue = this.getValue.bind(this)
    }
    getValue(value) {
        console.log(value)
    }
    render() {
        return (
          <div>
            <InputGroup
                getValue={this.getValue}
                length={4}
                type={'box'}
            />
          </div>
        );
    }
}
ReactDOM.render(
  <Inputarea/>, document.getElementById('app'));