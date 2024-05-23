class Player {
    constructor(name, health = 100, power = 10) {
        this.name = name;
        this.health = health;
        this.power = power;
    }

    hit(player) {
        player.health -= this.power;
        console.log(`${this.name} hits ${player.name} with ${this.power} damage`)
        player.showStatus();
    }

    useItem(item) {
        const itemPower = Math.random() < 0.5 ? 0 : 10;
        if (item === "health") {
            this.health += itemPower
            console.log(`${this.name} gets +${itemPower} ${item}`)
            this.showStatus();
        } else if (item === "power") {
            this.power += itemPower
            console.log(`${this.name} gets +${itemPower} ${item}`)
            this.showStatus();
        }
    }

    showStatus() {
        console.log(`${this.name} (Health => ${this.health}, Power => ${this.power})`);
    }
}

class ShootingGame {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    getRandomItem() {
        return Math.random() < 0.5 ? "health" : "power";
    }

    start() {
        while (this.player1.health > 0 && this.player2.health > 0) {
            
            console.log(`\n${player1.name} Turns!`);
            this.player1.useItem(this.getRandomItem());
            this.player1.showStatus();
            this.player1.hit(this.player2);
            if (this.player2.health <= 0) {
                console.log(`\n${this.player1.name} wins!`);
                break;
            }

            console.log(`\n${player2.name} Turns!`);
            this.player2.useItem(this.getRandomItem());
            this.player2.showStatus();
            this.player2.hit(this.player1);
            if (this.player1.health <= 0) {
                console.log(`\n${this.player2.name} wins!`);
                break;
            }
        }
    }
}

const player1 = new Player("Player A");
const player2 = new Player("Player B");

const game = new ShootingGame(player1, player2);
game.start();