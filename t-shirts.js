const tshirts = [
  { title: 'Blue T-Shirt', image: 'images/blue-t-shirt.jpg', price: 7.99, stock: 4 },
  { title: 'Bright Purple T-Shirt', image: 'images/bright-purple-t-shirt.jpg', price: 5.99, stock: 1 },
  { title: 'Cobalt Blue T-Shirt', image: 'images/cobalt-blue-t-shirt.jpg', price: 9.99, stock: 5 },
  { title: 'Green T-Shirt', image: 'images/green-t-shirt.jpg', price: 6.99, stock: 0 },
  { title: 'Grey T-Shirt', image: 'images/grey-t-shirt.jpg', price: 4.99, stock: 2 }, // Remplacement correct
  { title: 'Light Green T-Shirt', image: 'images/light-green-t-shirt.jpg', price: 7.99, stock: 4 },
  { title: 'Purple T-Shirt', image: 'images/purple-t-shirt.jpg', price: 7.99, stock: 0 },
  { title: 'Red T-Shirt', image: 'images/red-t-shirt.jpg', price: 6.99, stock: 3 },
  { title: 'Teal T-Shirt', image: 'images/teal-t-shirt.jpg', price: 7.99, stock: 2 }
];

const container = document.getElementById('tshirt-container');

function renderTshirts() {
    container.innerHTML = ''; // Clear the display before reloading

    tshirts.forEach((tshirt, index) => {
        const tshirtDiv = document.createElement('div');
        tshirtDiv.classList.add('tshirt');

        tshirtDiv.innerHTML = `
            <img src="${tshirt.image}" alt="${tshirt.title}">
            <h2>${tshirt.title}</h2>
            <p>Price: $${tshirt.price.toFixed(2)}</p>
            <p>Stock: ${tshirt.stock > 0 ? tshirt.stock : '<span class="out-of-stock">Out of Stock</span>'}</p>
            ${tshirt.stock > 0 ? `
                <select id="quantity-${index}">
                    ${Array.from({ length: tshirt.stock }, (_, i) => `<option value="${i+1}">${i+1}</option>`).join('')}
                </select>
                <button onclick="buyTshirt(${index})">Buy</button>
            ` : ''}
        `;
        container.appendChild(tshirtDiv);
    });
}

function buyTshirt(index) {
    const quantity = parseInt(document.getElementById(`quantity-${index}`).value);
    
    if (tshirts[index].stock >= quantity) {
        tshirts[index].stock -= quantity;  // Reduce stock
        alert(`You bought ${quantity} ${tshirts[index].title}(s)`);
        renderTshirts();  // Refresh display
    } else {
        alert("Not enough stock available!");
    }
}

// Load t-shirts on page load
renderTshirts();
