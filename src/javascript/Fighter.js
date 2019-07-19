class Fighter {
    constructor(name, health, attack, defense) {
        this.name = name;
        this. health = health;
        this.attack = attack;
        this.defense = defense;
    }
    getHitPower() {
        var min = 1; 
        var max = 2;  
        var criticalHitChance = Math.random() * (max - min) + min;
        return this.attack * criticalHitChance;
    }
    getBlockPower(){
        var min = 1; 
        var max = 2;  
        var dodgeChance = Math.random() * (max - min) + min;
        return this.defense * dodgeChance;
    }
}