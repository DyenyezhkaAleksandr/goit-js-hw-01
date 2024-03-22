function getElementWidth(content, padding, border) {
    const paddingToNumber = Number.parseFloat(padding);
    const borderToNumber = Number.parseFloat(border);
    const contentToNumber = Number.parseFloat(content);
    const getElementWidth = Number.parseFloat(contentToNumber + paddingToNumber * 2 + borderToNumber * 2);
    console.log(getElementWidth)

}
getElementWidth(`50px`, `8px`, `4px`);
getElementWidth("60px", "12px", "8.5px");
getElementWidth("200px", "0px", "0px");
