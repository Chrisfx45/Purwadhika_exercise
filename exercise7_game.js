class player {
    constructor (name){
        this.name = name;
        this.hp = 100
        this.pwr = 10

    }
    get_hit(Enemy_power){
        this.hp -= Enemy_power
    }
    use_item (item){
        this.hp += item.hp
        this.pwr += item.pwr
    }
    status (){
        return {
            name : this.name,
            hp : this.hp,
            pwr : this.pwr
        }
    }
}
const player1 = new player("Chris")
const player2 = new player("Nick")

class game {
    constructor(p1, p2){
        this.p1 = p1;
        this.p2 = p2
    }
    get_item(){
        let item ={}
        const  power =[{hp: 10, pwr : 0 },
        {hp:0, pwr :10},
        {hp :0, pwr: 0}]
        let index = Math.floor(Math.random() *3 )
        item = power[index]
        return item
    }
    start(){
        while (this.p1.hp > 0 && this.p2.hp > 0 ){
            console.log(this.p1.status())
            console.log(this.p2.status())

            let item1 = this.get_item()
            let item2 = this.get_item()

            this.p1.use_item(item1)
            this.p2.use_item(item2)

            this.p1.get_hit(this.p2.pwr)
            this.p2.get_hit(this.p1.pwr)

            console.log(this.p1.status())
            console.log(this.p2.status())

        }
        if (this.p2.hp > 0 && this.p1.hp <= 0){
            console.log ("the winner is" ,this.p2.name)
        }else if (this.p1.hp > 0 && this.p2.hp <= 0){
            console.log ("the winner is" ,this.p2.name)
        }else{
            console.log ("It is a draw")
        }
    }
 
}
const round1 = new game(player1, player2)

console.log(round1.start());