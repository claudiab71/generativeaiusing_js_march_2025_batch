function getProductDetails() {
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(products => {
            // Create a container div for styling
            const container = document.createElement("div");
            container.className = "product-container";

            products.forEach(product => {
                // Create a card for each product
                const card = document.createElement("div");
                card.className = "product-card";

                // Product ID
                const productId = document.createElement("p");
                productId.textContent = `ID: ${product.id}`;
                productId.className = "product-id";

                // Product Title
                const productTitle = document.createElement("h3");
                productTitle.textContent = product.title;
                productTitle.className = "product-title";

                // Product Price
                const productPrice = document.createElement("p");
                productPrice.textContent = `Price: $${product.price}`;
                productPrice.className = "product-price";

                // Product Image
                const productImage = document.createElement("img");
                productImage.src = product.image;
                productImage.alt = product.title;
                productImage.className = "product-image";

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