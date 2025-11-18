type ObjectType = {
    name: string;
    age: number;
}

const object: ObjectType = {
    name: "Prapya",
    age: 12
}

type ObjectUnionType = keyof ObjectType;

function getObjectProperty(key: ObjectUnionType) {
    return object[key];
}

console.log(getObjectProperty('name'));