var React = require("react");


var Search = require("./Search");
var Result = require("./Result");



class Main extends React.Component{
    constructor(){
        super();

        this.state = {
            topic:'',
            startYear: 0,
            endYear:'',
            data: []
        };
        this.setParent = this.setParent.bind(this);
    }

    setParent(data){
        this.setState({data: data});
        console.log(this.state.data);

        
    }


    render(){
        return(
            <div>
                <div className="jumbotron">
                    <h1>New York Times Article Search</h1>
                    <hr/>
                    
                </div>

                <Search setParent = {this.setParent}/>
                <Result results = {this.state.data}/>
                

            </div>
        );
    }
}


module.exports = Main;