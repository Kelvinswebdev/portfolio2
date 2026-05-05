const services = [
    { name: "A4 lanscape company profile print", rate: 85 },
    { name: "White Mug with branding", rate: 30 },
    { name: "Plastic Pens Branded", rate: 15 },
    { name: "Branded T-shirts", rate: 60 },
    { name: "Baseball Caps with embroidery", rate: 50 },
    { name: "Baseball caps with print", rate: 40 },
    { name: "Paper bags A3", rate: 30 },
    { name: "Tote bags with branding", rate: 60 },
    { name: "Key rings or holders", rate: 15 },
    { name: "Key ring engraved", rate: 20 },
    { name: "Quality polo shirts printed", rate: 70 },
    { name: "Quality polo shirt embroidered", rate: 75 }
];

const tableBody = document.getElementById('tableBody');

function renderTable() {
    tableBody.innerHTML = services.map((item, index) => `
        <tr>
            <td data-label="Item">${item.name}</td>
            <td data-label="Rate">GHS ${item.rate.toFixed(2)}</td>
            <td data-label="Qty"><input type="number" value="1" min="1" oninput="updateTotal(${index}, this.value)"></td>
            <td data-label="Total" id="total-${index}">GHS ${item.rate.toFixed(2)}</td>
        </tr>
    `).join('');
}

function updateTotal(index, qty) {
    // Basic validation to prevent empty or negative values
    const quantity = qty > 0 ? qty : 0;
    const totalElement = document.getElementById(`total-${index}`);
    const newTotal = services[index].rate * quantity;
    totalElement.innerText = `GHS ${newTotal.toFixed(2)}`;
}

renderTable();