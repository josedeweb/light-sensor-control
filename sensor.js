var five = require("johnny-five"), 
    motor;

five.Board().on("ready", function(){
    var sensor = new five.Sensor("A0");
    motor = new five.Motor({
        pin: 9
    });

    board.repl.inject({
        motor: motor
    }); 

    var state = true;
    sensor.on("data", function(){
        if(this.value<1023 && state){
            motor.start(200);
            console.log(this.value);
            state = false;
        }
        else if(value>=1023){
            state=true;
            console.log("detenido");
            motor.stop();
        }
    });

    motor.on("start", function(err, timestamp){
        console.log("motor iniciado");
    });
});
