
class Bird {}

class Penguin extends Bird{}

const flyer ={
    fly(){
        console.log('Flying now')
    }
}

Object.assign(Bird.prototype, flyer);

const bird = new Bird();
bird.fly();

const penguin = new Penguin();
penguin.fly();