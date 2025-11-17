type FormatValueTypes = number | string | boolean;

const formatValue = (value: FormatValueTypes): FormatValueTypes => {
    if (typeof value === "number") {
        return value * 10;
    } else if (typeof value === "string") {
        return value.toUpperCase();
    } else {
        return !value;
    }
}

const getLength = (value: string | any[]): number => {
    if (typeof value === "string") {
        return value.length;
    }
    if (Array.isArray(value)) {
        return value.length;
    }
    throw new Error("invalid type");
}

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

interface Product {
    title: string;
    rating: number;
}

const filterByRating = (products: Product[]): Product[] => {
    const selectedProducts = products.filter(product => product.rating >= 4);
    return selectedProducts;
}