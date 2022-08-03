client = new Paho.MQTT.Client("d57a0d1c39d54550b147b58411d86743.s2.eu.hivemq.cloud", 8884, "mqttsend");
client.connect({
    onSuccess: onConnect,
    userName: "robot",
    password: "P@ssW0rd!",
    useSSL: true
});

function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("onConnect");
  

    client.onMessageArrived = onMessageArrived;
    function onMessageArrived(message) {

        console.log("onMessageArrived:" + message.destinationName);
        console.log("onMessageArrived:" + message.payloadString);
    }

}
document.querySelector(".submit-btn").addEventListener("click", function () {
    message = new Paho.MQTT.Message(document.querySelector("#message").value);
    message.destinationName = "/row/1/message";
    client.send(message);
    input.value="";

})



