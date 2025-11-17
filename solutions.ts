type FormatValueTypes = number | string | boolean;

const formatValue = (value: FormatValueTypes): FormatValueTypes => {
    if (typeof value === "number") {
        return value * 10;
    } else if (typeof value === "string") {
        return value.toUpperCase();
    } else if (typeof value === "boolean") {
        return !value;
    } else {
        return false;
    }
}