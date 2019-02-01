export class Product {
    constructor (price, weight, name, color, image, type, countMethod, id){
        this.price = price;
        this.weight = weight;
        this.name = name;
        this.color = color;
        this.image = image;
        this.type = type;
        this.countMethod = countMethod;
        this.id = id;
    }

        name: string;
        color: string;
        price: number;
        weight: number;
        image: string;
        type: string;
        countMethod: string;
        id: number;
}