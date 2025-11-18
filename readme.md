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

# Difference between `any`, `unknown` and `never` types in TypeScript.

আমরা মুলত টাইপস্ক্রিপ্ট ব্যবহার করি টাইপ সেফটির জন্য। যদি আমরা ভুল টাইপের ডাটা ইউজ করি, তাহলে কুখনো কখনো ইরোর আসতে পারে। সেই ইরোরকে ঠেকাতেই মুলত আমরা টাইপস্ক্রিপ্ট ব্যাবহার করি। টাইপ্সক্রিপ্ট আমাদের অনেক ধরনের টাইপ অফার করে। তার মধ্যে কয়েকটি `any`, `unknow` এবং `never` টাইপ।

`any`: এর মানে, এই টাইপ যেখানে ব্যবহার করা হবে সেখানে সব ধরনের মান ব্যবহার করা যাবে। এটি ব্যবহার করলে টাইপস্ক্রিপ্ট আর কোনো টাইপ চেক করে না। এটি ব্যবহারের ফলে আমরা যেকোনো কাজ করতে পারি, এমনকি ভুল কাজও করতে পারি।

let value: any;
value = "prapya"
value = 17;
value.toUpperCase();

`unknown`: any এবং unknown এর ব্যবহার কিছুটা কাছাকাছি। তবে any ব্যবহার করা মানে, ওই ভেরিএবল সব ধরনের ডাটা নিতে পারে, তবে কিছু করার আগে আমাদেরকে অবশ্যই টাইপ চেক করতে হবে। 

```tsx
let value: unknown;
value = true;
if (typeof value === "string") {
    value.toUpperCase();
}
```

`never`: এটি এমন টাইপ যেটি কোনো ভ্যালু ধারণ করে না। যখন কোনো ফাংশন কিছু রিটার্ন করে না তখন আমরা এই টাইপ ব্যবহার করি।

```tsx
const throwNewError = (message: string): never => {
    throw new Error(message);
}
```