/**
 * * This function calculates the total price of the products in the cart
 * 
 * @params {Array} products cart products: Array of objects 
 * @returns {number} Result of the reduce function
 */

export const totalPrice = (products) => {
    return Math.round(products.reduce((acc, product) => acc + product.price * product.quantity, 0)*100)/100;
}

/**
 * 
 *  *This function gets the current date and return it formatted
 * @param None
 * @returns {String} Formatted date
 */
export function getFormattedDate() {
    const date = new Date();
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${day}/${month}/${year}`;
}


/**
 * @param {String} The string you want to slice
 * @returns {String} the wanted substring
 */

export function getSubstringFromLink(string){
    const index = string.lastIndexOf('/') - string.length + 1;
    return string.slice(index);
}