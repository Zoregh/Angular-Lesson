export class Product {
    constructor (price, weight, name, color, image, type, countMethod){
        this.price = price;
        this.weight = weight;
        this.name = name;
        this.color = color;
        this.image = image;
        this.type = type;
        this.countMethod = countMethod;
    }

        name: string;
        color: string;
        price: number;
        weight: number;
        image: string;
        type: string;
        countMethod: string;
}