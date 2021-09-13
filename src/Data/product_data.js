const products = [
    {
        id: 1,
        name: "Pulseras",
        productType: "Accesorios",
        price: 1.50,
        rating: 2.5,
        image:
            "https://i.ebayimg.com/thumbs/images/g/8HQAAOSwYT1dA1US/s-l300.jpg",
        description:
            "Pulsera unisex, te vas a ver genial con esta pulsera"
    },
    {
        id: 2,
        name: "Sombreros",
        productType: "Vestimenta",
        price: 5.00,
        rating: 5,
        image:
            "https://cdn.shopify.com/s/files/1/2070/3205/products/sombreroolimpico_A1_300x300.jpg?v=1627313953",
        description:
            "Sombrero 100% original, fabricado en Ecuador es ideal para las playas y hacerte lucir en ellas"
    },
    {
        id: 3,
        name: "Collar de joyas",
        productType: "Accesorios",
        price: 3.20,
        rating: 4,
        image:
            "https://i.ebayimg.com/thumbs/images/g/RYsAAOSwuuVdoGgp/s-l300.jpg",
        description:
            "Un hermoso collar con piedras preciosas no te lo puedes perder"
    },
    {
        id: 4,
        name: "Zapatos",
        productType: "Vestimenta",
        price: 7.00,
        rating: 4,
        image:
            "https://cdn.shopify.com/s/files/1/0130/7741/3952/products/JGR_0021_300x300.jpg?v=1618519583",
        description:
            "Zapato totelmente artesanal fabicado con manos de Ecuatorianas, hecho con cuero fino y de calidad"
    },
    {
        id: 5,
        name: "Collar de garra",
        productType: "Accesorios",
        price: 3.00,
        rating: 5,
        image:
            "https://essentiabijoux.com/wp-content/uploads/2020/05/collar-colmillo-resina-300x200.jpg",
        description:
            "Collar hermoso y perfecto para la playa"
    },
    {
        id: 6,
        name: "Collar de piedras",
        productType: "Accesorios",
        price: 4.00,
        rating: 3,
        image:
            "https://essentiabijoux.com/wp-content/uploads/2020/12/Collar-piedra-ojo-de-gato-marron-y-agata-amarillo-300x200.jpg",
        description:
            "Collar diseñado con piedras preciosas"
    },
    {
        id: 7,
        name: "Poncho de lana",
        productType: "Vestimenta",
        price: 4.00,
        rating: 5,
        image:
            "https://artesaniasdelecuador.com/wp-content/uploads/2021/06/poncho-alpaca-ecuador-300x200.jpg",
        description:
            "Poncho fabricado con lana y algodon, ideal para noches frias"
    },
   
    {
        id: 8,
        name: "Jarra de barro",
        productType: "Utensilios ",
        price: 5.00,
        rating: 5,
        image:
            "https://i.pinimg.com/474x/b0/8b/43/b08b43e7b706adb35635fe994aa8c10e.jpg",
        description:
            "Jarra fabricada 100% a barro y con manos Ecuatorianas"
    },
   
    {
        id: 9,
        name: "Pulseras de pez",
        productType: "Accesorios",
        price: 1.00,
        rating: 4.5,
        image:
            "https://store.sailandtrip.com/wp-content/uploads/2017/04/pulsera-pez-300x200.jpg",
        description:
            "Pulsera realizada con piedras preciosas y ping de pez ideal para hacerce lucir"
    },
   
    {
        id: 10,
        name: "Pulseras de hilo",
        productType: "Accesorios",
        price: 0.50,
        rating: 3,
        image:
            "https://www.pulserasamano.com/wp-content/uploads/2018/12/MG_7116-300x200.jpg",
        description:
            "Pulserar fabricadas con hilo, puede elejir entre varios colores"
    },
   
    {
        id: 11,
        name: "Aretes ",
        productType: "Accesorios",
        price: 2.00,
        rating: 4.5,
        image:
            "data:image/jpeg;base64,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",
        description:
            "Aretes de forma ovalada para mujer diseñado con colores tipicos y figuras geometricas"
    },
    {
        id: 12,
        name: "Aretes",
        productType: "Accesorios",
        price: 2.00,
        rating: 4.5,
        image:
            "data:image/jpeg;base64,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c71XAalGuS9Ii97NliP3MwKi6kEn5l9Be1rTKcfbNYung5bvtvr40/D9WausREqLTclmZkGZAUElAcACbm297SXHSVlyqZgKbfOgvl/7Lb+t5HeH62jQTxFCu+GLqm7riewb9vW+4km4jxmlS0wqtVXBwtyq3YBh3AHb0nDz4ZXL18/2tMZjdW+UO1D0/JXdCwbJHC5Fhe4IS3lW3W08cb4kjoyUaTVFHzVGZkszKgICXFxZFOJG33l7WcQoCp5N1qr5rA3K4/OUG/pvYGWeGFmBVU/UujABKa3Do91GRNrstuvtN+LdkmkzkvFhv3N/lhaFcNO5d2p2ZXxQjIjIFbqx8y3F7XnQvh5ys2Z4hqCzFix09NhiER92cJ0Um5tbt9Zs+Bcqu2D6oLitilAAEA2/3H/dY9FG3reTUCdOPHJduS55ZW2/VQJWImipERAREQEREBERAREQEREBERASkrEClp4emCLEAj0O4/EuRA1r8E07bmhT/wCoH9p703CaCfJRpr9EF/zaZ8SNQUtFpWJIREQERKAwFparUFZSrKGB6gi4l6IEZ1nJmme9s6dzeyNtf6EGYdXkOmwANaoQBaxWmf7rJlKStxl9p2hum+HekUgsalSwsAz2FvSy229pJeH8Lo0FxpU1pj+UW/J6mZsSdQ2WgSsSUEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA//2Q==",
        description:
            "Aretes de forma circular para mujer diseñado con colores tipicos y figuras geometricas"
    },
   
    
    ];
    export default products;