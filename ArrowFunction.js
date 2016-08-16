// syntactic difference
var createGreeting = function(message, greeting){
    return message + greeting;
}

var arrowGreeting = (message, greeting) => message + greeting;

console.log('createGreeting: ', createGreeting('you', 'hello'));
console.log('arrowGreeting: ', arrowGreeting('you', 'Hello'));

// this that scenario
var deliveryBoy = {
    name: 'john',
    handleMessage: function(message, handler) {
        handler(message);
    },
    receive : function () {
        var that = this;
        this.handleMessage('Hello ', function (message) {
            that.name;
            console.log(message + that.name);
        })
    }
}

deliveryBoy.receive();

// new ES6 syntax
var es6DeliveryBoy = {
    name: 'Ryan',
    handleMessage: (message, handler) => {
        handler(message);
    },
    receive : function () {
        this.handleMessage('Hello ', message => console.log(message + this.name))
    }
}

es6DeliveryBoy.receive();