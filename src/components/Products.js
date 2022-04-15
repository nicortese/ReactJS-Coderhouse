const products = [
    {
        id: 0,
        name: "Remera AntiSocialClub",
        price: "15.00",
        image: "https://drops-ba.com/wp-content/uploads/2021/08/Anti-Social-Social-Club-Kkoch-Tee-Black-1.jpg",
        stock: 10,
        category: "remeras",
        stock: 10,
    },
    {
        id: 2,
        name: "Remera AntiSocialClub",
        price: "15.00",
        image: "https://drops-ba.com/wp-content/uploads/2022/01/ANTI-SOCIAL-SOCIAL-CLUB-Kkoch-White-Tee.jpg",
        category: "remeras",
        stock: 10,
    },
    {
        id: 3,
        name: "Remera AntiSocialClub",
        price: "15.00",
        image: "https://drops-ba.com/wp-content/uploads/2021/12/Anti-Social-Social-Club-Logo-2-Tee-SS20-Black.jpg",
        category: "remeras",
        stock: 10,
    },
    {
        id: 4,
        name: "Remera AntiSocialClub",
        price: "15.00",
        image: "https://drops-ba.com/wp-content/uploads/2022/03/Anti-Social-Social-Club-Cancelled-Again-T-shirt-Black.jpg",
        category: "remeras",
        stock: 10,
    },
    {
        id: 5,
        name: "Hoodie AntiSocialClub",
        price: "15.00",
        image: "https://drops-ba.com/wp-content/uploads/2022/04/Anti-Social-Social-Club-ASSC-Cherry-Red-Hoodie.jpg",
        category: "hoodies",
        stock: 10,
    },
    {
        id: 6,
        name: "Hoodie AntiSocialClub",
        price: "15.00",
        image: "https://drops-ba.com/wp-content/uploads/2022/04/Anti-Social-Social-Club-In-The-Lead-Members-Only-Hoodie-Black.jpg",
        category: "hoodies",
        stock: 10,
    },
    {
        id: 7,
        name: "Hoodie AntiSocialClub",
        price: "15.00",
        image: "https://drops-ba.com/wp-content/uploads/2021/08/Anti-Social-Social-Club-Kkoch-Black-Hoodie.jpg",
        category: "hoodies",
        stock: 10,
    } 
]
const productDetail = [
    {
        id:1,
        name: 'REMERA NIKE',
        price: '$10.00',
        img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ac89d319-a3e1-47ab-b253-89c00401ecd6/playera-de-entrenamiento-dri-fit-legend-knTPqEkv.png'
    },
]


export const traerProductos = (categoryId) => {
    return new Promise((resolve, reject) =>{
        const productosFiltrados = products.filter((products)=> products.category === categoryId)
        setTimeout(() => {
            if (categoryId){
                resolve(productosFiltrados);
            }else{
                resolve(products);
            }
        }, 2000);
    });
};

export const traerProducto = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(productDetail);
        }, 2000);
    });
};