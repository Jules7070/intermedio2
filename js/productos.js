const products = [
    {
        img: "../img/p1.jpg",  // Ruta correcta de la imagen
        desc: "Mascarilla hidratante coreana",
    },
    {
        img: "../img/p2.jpg",  // Ruta correcta de la imagen
        desc: "Limpiador facial suave",
    },
    {
        img: "../img/p3.jpg",  // Ruta correcta de la imagen
        desc: "Protector solar SPF 50+",
    },
    {
        img: "../img/p4.jpg",  // Ruta correcta de la imagen
        desc: "Tónico revitalizante",
    },
];

const gallery = document.getElementById("product-gallery");

// Generar productos
products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("producto");

    productDiv.innerHTML = `
        <img src="${product.img}" alt="${product.desc}" />
        <p>${product.desc}</p>
    `;
    gallery.appendChild(productDiv);
});


