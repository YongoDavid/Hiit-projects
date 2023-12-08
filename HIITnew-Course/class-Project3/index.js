import { createApp, render } from "vue"
import { allProducts } from "./allProducts.js"

let products = allProducts

// Table
const table = document.createElement('table')
table.setAttribute('border', '1px')
table.setAttribute('width', '100%')

// table head
const thead = document.createElement('thead')
table.appendChild(thead)

const theadRow = document.createElement('tr')
thead.appendChild(theadRow)

let tableHeading = ['S/N', 'Name of Product', 'Description', 'Price']

tableHeading.forEach(heading => {
    const th = document.createElement('th')
    th.innerText = heading
    theadRow.appendChild(th)
})

const renderTable = () => {
    // table body 
    const tbody = document.createElement('tbody')
    tbody.appendChild(tbody)

    products.forEach((row, index) => {
        // create row 
        const tbodyrow = document.createElement('tr')
        tbodyrow.appendChild(tbodyrow)

        Object.keys(row).forEach((tableData) =>{
            const td = document.createElement('td')

            // if (tableData === 'id') td.innerText = index + 1
            // else if (tableData === 'name') td.innerText = row.name
            // else if (tableData === 'description') td.innerText = row.description
            // else if (tableData === 'price') td.innerText = row.price

            if (tableData === 'id') td.innerText = index + 1
            else td.innerText = row[tableData]

            tbodyrow.appendChild(td)

            // console.log(row["id"])
            // console.log(row."id")

        })

        const td = document.createElement('td')
        const deleteBtn = document.createElement('button')
        deleteBtn.innerText = 'DELETE'
        td.appendChild(deleteBtn)
        tbodyrow.appendChild(td)

        deleteBtn.addEventListener('click', () =>{
            deleteItem(row["id"])
        } )
    }) 
}

const removeBody = () => {
    const body = document.querySelector('tbody')

    if (body) {
        table.removeChild(body)
    }
}

const deleteItem = (id) => {
    console.log(id)
    products = products.filter((item) =>{
         return item.id !==id
    })

    console.log(products)
    removeBody()
    renderTable()
}

renderTable()

// console.log(allProducts)
// console.log(Object.keys(allProducts[0]))

// form 
const form = document.createElement('form')

// name 
const nameContainer = docment.createElement('div')
const nameLabel = document.createElement('label')
nameLabel.innerText = "Name: "
const nametag = document.createElement('input')
nametag.setAttribute('type', 'text')
nametag.setAttribute('placeholder', 'Enter the name of product')
nameContainer.appendChild(nameLabel)
nameContainer.appendChild(nametag)
form.appendChild(nameContainer)

// price 
const priceContainer = document.createElement('div')
const pricelabel = document.createElement('lable')
pricelabel.innerText = 'Price: '
const pricetag = document.createElement('input')
pricetag.setAttribute('type', 'number')
pricetag.setAttribute('placeholder', 'Enter price of product here')
priceContainer.appendChild(pricelabel)
priceContainer.appendChild(pricetag)
form.appendChild(priceContainer)

// discription
const descContainer = document.createElement('div')
const desclabel = document.createElement('label')
desclabel.innerText = 'Discription: '
const desctag = document.createElement('input')
desctag.setAttribute('type', 'textarea')
desctag.setAttribute('placeholder', 'Enter the discription of the product ')
priceContainer.appendChild(desclabel)
priceContainer.appendChild(pricetag)
form.appendChild(descContainer)

// button 
const addbtn = document.createElement('button')
addbtn.innerText = 'submit'
form.appendChild(addbtn)

addbtn.addEventListener('click', (e) => {
    e.preventDefault()
    additem()
}) 

const additem = () => {
    if (!nametag.value || !pricetag.value || !desctag.value) {
        alert('All feilds must be filled')
    }
    else {
        const data = {
            id:Math.randon(Math.random()* 1000000),
            name: nametag.value,
            price: pricetag.value,
            discription:desctag.value
        }
        console.log(products)
        products.push(data)
        removeBody()
        renderTable()
        console.log(products)
        nametag.value = '';
        pricetag.value = '';
        desctag.value = '';
    }

}
document.body.appendChild(table)
document.body.appendChild(form)