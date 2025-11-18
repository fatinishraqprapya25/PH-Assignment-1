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


interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

const filterActiveUsers = (users: User[]): User[] => {
    return users.filter(user => user.isActive);
}


interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (book: Book) => {
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"}`);
}

type ArrayType = number[] | string[];
type ArrayValueType = number | string;

const checkvalueIsIncludedOrNot = (array: any[], value: ArrayValueType): boolean => {
    let i: number;
    for (i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
}

const getUniqueValues = (array1: ArrayType, array2: ArrayType): ArrayType => {
    const newArr: ArrayType = [];
    const map: { [key: string]: boolean } = {};

    for (let i: number = 0; i < array1.length; i++) {
        const value = array1[i];
        const key = String(value);
        if (!map[key]) {
            map[key] = true;
            newArr[newArr.length] = value;
        }
    }

    for (let j: number = 0; j < array2.length; j++) {
        const value = array2[j];
        const key = String(value);
        if (!map[key]) {
            map[key] = true;
            newArr[newArr.length] = value;
        }
    }

    return newArr;
}

interface Product2 {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

const calculateTotalPrice = (products: Product2[]): number => {
    const totalSaleAmount = products.reduce((total: number, currentProduct: Product2) => {
        const { price, quantity } = currentProduct;

        let totalAmount = price * quantity;
        if (currentProduct?.discount) {

            total += totalAmount - ((currentProduct.discount / 100) * totalAmount);
            return total;
        } else {
            total += totalAmount;
            return total;
        }

    }, 0);
    return totalSaleAmount;
}

