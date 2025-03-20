function loadProducts() {
    let product1 = {"pid": 1, "name": "product1", "price": 100};
    let product2 = {"pid": 2, "name": "product2", "price": 200};    
    let product3 = {"pid": 3, "name": "product3", "price": 300};
    let product4 = {"pid": 4, "name": "product4", "price": 400};
    let product5 = {"pid": 5, "name": "product5", "price": 500};
    let product6 = {"pid": 6, "name": "product6", "price": 600};
    
    let products = [product1, product2, product3, product4, product5, product6];        // store all products in an array

    products.forEach((product) => {
        let tr = document.createElement("tr");          // row created for each product

        let td1 = document.createElement("td");             // cell created for each product attribute
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");

        let td1Text = document.createTextNode(product.pid); // contents of each cell
        let td2Text = document.createTextNode(product.name);
        let td3Text = document.createTextNode(product.price);

        td1.appendChild(td1Text);                   // contents added to the cell
        td2.appendChild(td2Text);
        td3.appendChild(td3Text);

        tr.appendChild(td1);                        // cells added to the row
        tr.appendChild(td2);
        tr.appendChild(td3);

        document.getElementsByTagName("tbody")[0].appendChild(tr);      // row added to the table
        
    });
    
    // var vs let keyword 
    // var a=10;       // int a=10;
    // var a=20;       // int a=20; // error
    // let b=10;
    //let b=20;       // error
    // for(let i=0;i<10000;i++){

    // }
    // console.log(i);
}

