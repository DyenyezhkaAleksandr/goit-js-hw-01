function getElementWidth(content, padding, border) {
    const paddingToNumber = Number.parseFloat(padding);
    const borderToNumber = Number.parseFloat(border);
    const contentToNumber = Number.parseFloat(content);
    return contentToNumber + paddingToNumber * 2 + borderToNumber * 2;
}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
