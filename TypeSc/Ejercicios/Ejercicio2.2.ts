function padLeft(value: string, padding: number | string): string {

if (typeof padding === "number") {
    return `${Array(padding + 1).join(" ")}${value}`;
} else if (typeof padding === "string") {
    return padding + value;
}

return "";
}
