class Item{
    code:number | null;
    name:string;
    price:number;

    constructor(code:number | null,name:string,price:number){
        this.code=code;
        this.name=name;
        this.price=price;
    }
}

export default Item;