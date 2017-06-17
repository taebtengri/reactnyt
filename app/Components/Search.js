var React = require("react");

var api = require("./utils/helpers");

class Search extends React.Component{
    constructor(){
        super();



        this.getValue = this.getValue.bind(this);

    }

    getValue(event){
        event.preventDefault();
        var data = {};

        for(var field in this.refs){
            data[field] = this.refs[field].value;
            this.refs[field].value = '';
        }

        api.getData(data.topic, 19940905, 20090509).then(function (data) {
         

            this.props.setParent(data);
        }.bind(this));

    }

    render(){
        return(
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Search</h3>
                </div>
                <div className="panel-body">
                    <form >
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Topic</label>
                            <input type="text" ref="topic" className="form-control" id="topic" placeholder="Topic..." name="Topic"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Start Year</label>
                            <input type="number" ref="startYear" className="form-control" id="startYear" placeholder="Start Year..." name="Start Year"/>
                        </div>


                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">End Year</label>
                            <input type="number" ref="endYear" className="form-control" id="endYear" placeholder="End Year..." name="endYear"/>
                        </div>

                        <button type="submit" className="btn btn-default" onClick={this.getValue}>Search</button>
                    </form>



                </div>
            </div>
        )
    }
};

module.exports = Search;