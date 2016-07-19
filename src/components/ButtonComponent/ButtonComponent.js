/**
 * Created by UCHATNU on 7/9/2016.
 */


import  React,{Component} from 'react';

class ButtonComponent extends Component{

    constructor(props){
        super(props);
        this.state={
          count:0
        };
        //call for bindings
        this.bind();
    }

    bind(){
        this.doCount=this.doCount.bind(this);
    }

    doCount(){

        let count = this.state.count+1
        this.setState({
            count:count
        })
    }

    render(){
        return(
          <div>
              <button ref="cntBtn" onClick={this.doCount}>{this.props.name}</button>
              <p>count : {this.state.count}</p>
          </div>

        );
    }

}

export default ButtonComponent;