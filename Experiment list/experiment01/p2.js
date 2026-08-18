import EventEmitter from "events";

class Button extends EventEmitter {

    click() {
        console.log("Button was clicked");

        this.emit("click");
    }
}

const button = new Button();

button.on("click", function () {
    console.log("Event Triggered");
});

button.click();