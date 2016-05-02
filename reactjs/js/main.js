var arraySize = 50;
var refreshSpeed = 50;

var MainApp = React.createClass({
   componentDidMount: function() {
       var that = this;
       setInterval(function name() {
           var myArr = populateArray(arraySize);
           that.setState({
               myArr: myArr
           });
       }, refreshSpeed);
   },
    
   getInitialState: function name() {
       var myArr = populateArray(arraySize);
       
       return {
           myArr: myArr
       }
   },
    
   render: function() {
       var lines = this.state.myArr.map(function(line) {
            var cells = line.map(function name(cell) {
                return <span style={{width: '30px', height: '30px', display: 'inline-block'}}>{cell}</span>
            });
            return <div>{cells}</div> 
       });
       
       return (
            <div>
                {lines}
            </div>
       );
   }
});

ReactDOM.render(
    <MainApp />,
    document.getElementById('app')
);

function populateArray(size: Number) {
    var arr = new Array();
    for (var i = 0; i < size; i++) {
        var subArr = new Array();
        for (var j = 0; j < size; j++) {
            var num = getRandomInt(1, 100);
            subArr.push(num)
        }
        
        arr.push(subArr);
    }
    return arr;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}