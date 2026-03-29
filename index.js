const articles_data = [
    {
        id: 1,
        title: "Moldura Portobella Adaptable 1.20 - 1.30 MT",
        price: "$335.000 COP",
        image: "https://dcdn-us.mitiendanube.com/stores/006/600/945/products/product_317203588_3-2a3f4ec7f66b85dc7117741181824073-1024-1024.webp",
        productUrl: "https://casaglamour.shop/productos/moldura-portobella-adaptable-pared-de-1-20-y-1-30-de-ancho-1b1pr/"
    },
    {
        id: 2,
        title: "Moldura Eco 78cm x 78cm",
        price: "$177.000 COP",
        image: "https://dcdn-us.mitiendanube.com/stores/006/600/945/products/product_320334402_1-e7b42195b594166d2017741182829094-1024-1024.webp",
        productUrl: "https://casaglamour.shop/productos/moldura-eco-medida-de-78-x-78-lopca/"
    },
    {
        id: 3,
        title: "MOLDURA FIORY",
        price: "$273.000 COP",
        image: "https://dcdn-us.mitiendanube.com/stores/006/600/945/products/product_320926298_1-2eef25640cdaa88a0d17741183081956-1024-1024.webp",
        productUrl: "https://casaglamour.shop/productos/producto-de-prueba-1g5k6/"
    },
    {
        id: 4,
        title: "Moldura Palazo Adaptable 90cm - 1.00 MT",
        price: "$274.000 COP",
        image: "https://dcdn-us.mitiendanube.com/stores/006/600/945/products/product_317235119_1-10aedf56c846b74adb17741181954450-1024-1024.webp",
        productUrl: "https://casaglamour.shop/productos/moldura-palazo-adaptable-pared-de-90-cm-y-1-00-mt-de-ancho-1sl49/"
    },
    {
        id: 5,
        title: "Moldura Dante Adaptable 1.80 - 2.00 MT",
        price: "$325.000 COP",
        image: "https://dcdn-us.mitiendanube.com/stores/006/600/945/products/product_320321577_2-508f9c0cc9b3e58c2517741182709177-1024-1024.webp",
        productUrl: "https://casaglamour.shop/productos/moldura-dante-1-80de-ancho-a-2-00-mt-de-ancho-x-2-40-altura-adaptable-1yjkq/"
    },
    {
        id: 6,
        title: "Moldura Pryce Adaptable 1.80 - 2.00 MT",
        price: "$331.500 COP",
        image: "https://dcdn-us.mitiendanube.com/stores/006/600/945/products/genai_image_e36561b3331141cd8134264d0aee0f13_1767914539_00001-1-c4a8a60b5085eca1de17748073225929-1024-1024.webp",
        productUrl: "https://casaglamour.shop/productos/moldura-pryce-adatable-a-pared-de-1-80-y-2-00-gl721/"
    },
    {
        id: 7,
        title: "Moldura Zafary Adaptable 2.30 - 2.50 MT",
        price: "$387.000 COP",
        image: "https://dcdn-us.mitiendanube.com/stores/006/600/945/products/genai_image_44fc92cab36642dcab3e54c4fbe670fd_1767923036_00001-38d408d6a16240502017679233869761-480-0.webp",
        productUrl: "https://casaglamour.shop/productos/moldura-zafary-adaptable-a-pared-de-2-30-y-2-50-de-ancho-6ijd1/"
    },
    {
        id: 8,
        title: "Moldura Vis-Famy 2.50 - 3.00 MT",
        price: "$457.000 COP",
        image: "https://dcdn-us.mitiendanube.com/stores/006/600/945/products/product_320345405_4-2fe4889a6e9120cbb517741183033033-1024-1024.webp",
        productUrl: "https://casaglamour.shop/productos/moldura-vis-famy-pared-de-2-50-mt-de-ancho-a-3-00-mt-de-ancho-10x9e/"
    },
    {
        id: 9,
        title: "Moldura Sinfonia Adaptable 4.00 - 4.50 MT",
        price: "$493.000 COP",
        image: "https://dcdn-us.mitiendanube.com/stores/006/600/945/products/product_318483547_1-022546c532a2a2e99817741182449082-1024-1024.webp",
        productUrl: "https://casaglamour.shop/productos/moldura-sinfonia-adaptable-pared-de-4-00-a-4-50-e5fa0/"
    },
    {
        id: 10,
        title: "Moldura Dulcinea 3.00 - 3.50 MT",
        price: "$835.000 COP",
        image: "https://dcdn-us.mitiendanube.com/stores/006/600/945/products/product_320249011_2-445b7cc8552000bd7217741182588236-1024-1024.webp",
        productUrl: "https://casaglamour.shop/productos/moldura-dulcinea-3-00-mt-a-3-50-mt-de-ancho-uxp51/"
    },
    {
        id: 11,
        title: "Molduras Joshua 3.50 - 4.00 MT",
        price: "$864.000 COP",
        image: "https://dcdn-us.mitiendanube.com/stores/006/600/945/products/product_318456269_1-6548f7e1325ff1aab017741182339600-1024-1024.webp",
        productUrl: "https://casaglamour.shop/productos/molduras-joshua-pared-de-3-50-y-4-00-mt-de-ancho-2s12s/"
    }
];

const productIds = {
    'moldura-portobella-adaptable-pared-de-1-20-y-1-30-de-ancho-1b1pr': '317203588',
    'moldura-eco-medida-de-78-x-78-lopca': '320334402',
    'moldura-palazo-adaptable-pared-de-90-cm-y-1-00-mt-de-ancho-1sl49': '317235119',
    'moldura-dante-1-80de-ancho-a-2-00-mt-de-ancho-x-2-40-altura-adaptable-1yjkq': '320321577',
    'moldura-pryce-adatable-a-pared-de-1-80-y-2-00-gl721': '318417884',
    'moldura-zafary-adaptable-a-pared-de-2-30-y-2-50-de-ancho-6ijd1': '317242500',
    'moldura-vis-famy-pared-de-2-50-mt-de-ancho-a-3-00-mt-de-ancho-10x9e': '320345405',
    'moldura-sinfonia-adaptable-pared-de-4-00-a-4-50-e5fa0': '318483547',
    'moldura-dulcinea-3-00-mt-a-3-50-mt-de-ancho-uxp51': '320249011',
    'molduras-joshua-pared-de-3-50-y-4-00-mt-de-ancho-2s12s': '318456269',
    'producto-de-prueba-1g5k6': '320926298',
};

function handleCheckout(productUrl) {
    if (!productUrl) return;

    // Extraer el ID del producto de la URL
    const urlParts = productUrl.split('/');
    const productSlug = urlParts[urlParts.length - 2] || urlParts[urlParts.length - 1];
    
    const productId = productIds[productSlug];

    if (!productId) {
        window.location.href = productUrl;
        return;
    }

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://casaglamour.shop/comprar/';
    form.target = '_self';

    const fields = {
        add_to_cart: productId,
        quantity: '1',
        add_to_cart_enhanced: '1'
    };

    Object.entries(fields).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
}

const productsGrid = document.getElementById('products-grid');
if (productsGrid) {
    const htmlContent = articles_data.map(article => `
        <article class="product-card group bg-white overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 opacity-0 relative border border-stone/10 flex flex-col">
            <div class="aspect-square overflow-hidden bg-stone/5 relative">
                <img src="${article.image}"
                    alt="${article.title}"
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[800ms] ease-out">
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="p-6 md:p-8 flex flex-col justify-between flex-1 relative z-10 bg-white">
                <div class="mb-4">
                    <h3 class="text-lg md:text-xl font-semibold text-matte-black leading-tight group-hover:text-stone transition-colors duration-300" style="font-family: 'Playfair Display', serif;">
                        ${article.title}
                    </h3>
                </div>
                <div class="mt-auto">
                    <p class="text-xl md:text-2xl font-extrabold text-charcoal mb-5">
                        ${article.price}
                    </p>
                    <div class="flex flex-col md:flex-row gap-3">
                        <a href="${article.productUrl}"
                            target="_blank" class="view-detail-button flex items-center justify-center rounded-xl bg-stone/10 text-stone hover:bg-stone hover:text-white transition-all duration-300 px-4 py-3 shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                        </a>
                        <a href="${article.productUrl}"
                            class="buy-button flex-1 text-sm md:text-base inline-flex items-center justify-center text-center bg-matte-black text-bone px-6 py-3 font-medium uppercase tracking-wider rounded-xl hover:bg-stone hover:shadow-lg transition-all duration-300">
                            Comprar Ahora
                        </a>
                    </div>
                </div>
            </div>
        </article>
    `).join('');
    
    productsGrid.innerHTML = htmlContent;
}

// Attach checkout events
const buyButtons = document.querySelectorAll('.buy-button');
buyButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const url = button.getAttribute('href');
        handleCheckout(url);
    });
});
