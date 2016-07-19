import React,{Component} from 'react';

export default class CheckboxWithLabel extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        };
        this.init();
    }

    /*
    * bind all component level methods with events
    * */
    init(){
        this.onChange = this.onChange.bind(this);// bind the events
    }

    onChange() {
        this.setState({isChecked: !this.state.isChecked});
    }

    render() {
        return (
            <label>
                <input
                    type="checkbox"
                    checked={this.state.isChecked}
                    onChange={this.onChange}
                />
                {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
            </label>
        );
    }
}