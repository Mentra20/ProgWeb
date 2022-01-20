import {Iface} from "./iface";

class Klass implements Iface {
    name: string = "Me";
    id: number = 42;

    toString(): string {
        return `${this.name}.${this.id}`;
    }
}

export {Klass};