class Klass {
    constructor() {
        this.name = "Me";
        this.id = 42;
    }
    toString() {
        return `${this.name}.${this.id}`;
    }
}
export { Klass };
