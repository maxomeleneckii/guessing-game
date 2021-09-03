class GuessingGame {
    constructor() {
        this.first;
        this.last;
        this.middle;
    }

    setRange(min, max) {
        this.first = min;
        this.last = max;
    }
    guess() {
        return (this.middle = Math.round((this.last + this.first) / 2));
    }
    lower() {
        this.last = this.middle;
    }
    greater() {
        this.first = this.middle;
    }
}

module.exports = GuessingGame;