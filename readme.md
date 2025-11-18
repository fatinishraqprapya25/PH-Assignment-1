# Keyof Operator in TypeScript

`TypeScript` এ `keyof` অপারেটর খুব গুরুত্বপুর্ণ। আমাদের অনেক সময় একটি অব্জেক্ট টাইপ বা ইন্টারফেস এর প্রপার্টিগুলোকে ইউনিয়ন টাইপ হিসেবে দরকার হয়। তখন আমরা এই মেথডটি ব্যবহার করে ওই অব্জেক্ট এর প্রপার্টিগুলোকে নিয়ে একটী কাস্টম ইউনিয়ন টাইপ বানাতে পারি। 

<b>উদাহরণঃ </b>

```tsx
type User2 = {
    name: string;
    age: number;
}

type UserKeys2 = keyof User2;

```

সহজ ভাষায় বললে `keyof` ব্যবহার করলে কোনো টাইপ বা ইন্টার্ফেস এর সকল প্রপার্টিকে নিয়ে আরেকটি ইউনিয়ন টাইপ বানানো যায়।

<b>কখন ব্যবহার করা হয়ঃ </b>

⇒ যখন আমরা কোনো অব্জেক্টের প্রপার্টীগুলোকে নিয়ে একটী ইউনিয়ন টাইপ বানাতে চাই।

⇒ যখন আমরা কোনো ফাংশনের মধ্যে কোনো নির্দিষ্ট কি গুলোকে ইনপুট হিসেবে নিতে চাই।

<b>উদাহরণঃ </b>

```tsx
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
```