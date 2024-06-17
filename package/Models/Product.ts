export class Product {
    public name;
    public price;

    constructor(params: { [key: string]: any }) {
        this.entity = { ...params };
        this.name = params.name;
        this.price = params.price;
    }

    public tablename: string = "product"; // Set the table name as a string constant
    public entity: { [key: string]: any } = {}; // Initialize entity as an empty object
}