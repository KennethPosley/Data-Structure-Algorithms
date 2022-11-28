class Human{
    constructor(height){
        this.height = height
    }
    getHeight() {
        return this.height
    }
    setHeight() {
        return this.height
    }
}

let humanOne = new Human("Tall")

let humanTwo = new Human("Short")

humanOne.getHeight()
humanOne.setHeight('Medium')
