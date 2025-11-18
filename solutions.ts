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
    for (let x = 0; x < array1.length; x++) {
        newArr[x] = array1[x];
    }
    let index = newArr.length;
    for (let i = 0; i < array2.length; i++) {
        if (!checkvalueIsIncludedOrNot(newArr, array2[i])) {
            newArr[index] = array2[i];
            index++;
        }
    }
    return newArr;
}