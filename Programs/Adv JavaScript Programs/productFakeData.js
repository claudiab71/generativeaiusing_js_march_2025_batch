function getProductDetails() {
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(products => {
            // Create a container div for styling
            const container = document.createElement("div");
            container.style.display = "grid";
            container.style.gridTemplateColumns = "repeat(auto-fit, minmax(200px, 1fr))";
            container.style.gap = "20px";
            container.style.padding = "20px";

            products.forEach(product => {
                // Create a card for each product
                const card = document.createElement("div");
                card.style.border = "1px solid #ccc";
                card.style.borderRadius = "8px";
                card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
                card.style.padding = "16px";
                card.style.textAlign = "center";
                card.style.backgroundColor = "#fff";

                // Product ID
                const productId = document.createElement("p");
                productId.textContent = `ID: ${product.id}`;
                productId.style.fontWeight = "bold";

                // Product Title
                const productTitle = document.createElement("h3");
                productTitle.textContent = product.title;
                productTitle.style.fontSize = "16px";
                productTitle.style.margin = "10px 0";

                // Product Price
                const productPrice = document.createElement("p");
                productPrice.textContent = `Price: $${product.price}`;
                productPrice.style.color = "#28a745";
                productPrice.style.fontWeight = "bold";

                // Product Image
                const productImage = document.createElement("img");
                productImage.src = product.image;
                productImage.alt = product.title;
                productImage.style.width = "100px";
                productImage.style.height = "100px";
                productImage.style.objectFit = "contain";
                productImage.style.marginBottom = "10px";

                // Append elements to the card
                card.appendChild(productImage);
                card.appendChild(productId);
                card.appendChild(productTitle);
                card.appendChild(productPrice);

                // Append the card to the container
                container.appendChild(card);
            });

            // Append the container to the body
            document.body.appendChild(container);
        })
        .catch(err => console.log(err));
}