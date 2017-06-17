var axios = require("axios");

var key = 'af89249b43aa4340b33ec78d9d792eae',
    endpoint = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?';


var helpers = {
    getData: function (search, start, end) {
        var queryURl = endpoint + "&api-key=" + key + "&q=" + search + "&begin_date=" + start + "&end_date=" + end;
      

        return axios.get(queryURl).then(function (val) {

            return val.data.response.docs;
        });
    }
};


module.exports = helpers;