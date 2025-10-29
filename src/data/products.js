

const products = [
    {
        id: 1,
        name:"Alambrado",
        description:"Malbec mendocino joven, de color violáceo intenso. Aromas a ciruela y violetas, con taninos amables y final medio. Ideal para carnes rojas y pastas con salsas rojas.",
        cepa:"Malbec",
        marca:"Las Perdices",
        category:"Vinos",
        stock:"5",
        image:"/image/alambradoMalbec.png",
        price:"8000",
    },
    {
        id: 2,
        name:"Norton Select",
        description:"Cabernet Sauvignon de perfil clásico: notas de morrones asados, especias y frutas negras. Paso por roble integrado que aporta vainilla y estructura.",
        cepa:"Cabernet Sauvignon",
        marca:"Bodega Norton",
        category: "Vinos",
        stock:"10",
        image:"/image/nortonSelectCavernetSauvignon.png",
        price:"11500",
    },
    {
        id: 3,
        name:"Paula",
        description:"Chardonnay fresco y aromático. Notas cítricas, manzana verde y un toque floral. Boca equilibrada, acidez vivaz y final limpio.",
        cepa:"Chardonnay",
        marca:"Doña Paula",
        category: "Vinos",
        stock:"10",
        image:"/image/paulaChardonnay.png",
        price:"10500",
    },
    {
        id: 4,
        name:"Emilia",
        description:"Rosé de color tenue, aromas a frutilla y cereza, con una boca ligera y refrescante. Excelente para aperitivos y comidas ligeras.",
        cepa:"Rosé",
        marca: "Nieto Senetiner",
        category:"Vinos",
        stock:"10",
        image:"/image/emilia_Rose.png",
        price:"10500",
    },
    {
        id: 5,
        name:"Nieto Senetiner",
        description:"Pinot Noir delicado, con notas a frutos rojos y sutiles especias. Taninos muy suaves y final sedoso.",
        cepa:"Pinot Noir",
        marca: "Nieto Senetiner",
        category:"Vinos",
        stock:"10",
        image:"/image/nietoSenetinerPinotNoir.png",
        price:"10500",
    },
    {
        id: 6,
        name:"Ala Colorada",
        description:"Cabernet Franc expresivo: hierbas frescas, pimiento rojo, frutas negras y leve toque especiado. Taninos firmes y final persistente.",
        cepa:"Cabernet Franc",
        marca:"Las Perdices",
        category:"Vinos",
        stock:"5",
        image:"/image/alaColoradaCabernetFranc.png",
        price:"8000",
    },
    {
        id: 7,
        name:"Alaris",
        description:"Versión blanca de Cabernet Sauvignon elaborada con prensado suave. Aromas a cítricos y flores blancas; boca fresca y ligera.",
        cepa:"Cabernet Sauvignon Blanco",
        marca:"Trapiche",
        category:"Vinos",
        stock:"5",
        image:"/image/alarisCabernetBlanco.png",
        price:"8000",
    },
    {
        id: 8,
        name:"Los Cardos",
        description:"Blanco de cuerpo medio, notas cítricas y frutales, con una acidez equilibrada que lo vuelve muy bebible.",
        cepa:"Cabernet Sauvignon Blanco",
        marca:"Doña Paula",
        category:"Vinos",
        stock:"5",
        image:"/image/losCardosCabernetBlanco.png",
        price:"8000",
    },


    {
        id: 9,
        name:"Gancia Americano",
        description:"Clásico aperitivo argentino de perfil cítrico y herbal. Ideal para tragos frescos como Gancia con soda o tónica y rodaja de limón.",
        cepa:"—",
        marca:"Gancia",
        category:"Aperitivos",
        stock:"12",
        image:"/image/ganciaAmericano.png",
        price:"7500",
    },
    {
        id: 10,
        name:"Fernet Branca 750 ml",
        description:"Aperitivo amargo de hierbas, muy aromático y persistente. Infaltable en el clásico Fernet con cola.",
        cepa:"—",
        marca:"Branca",
        category:"Aperitivos",
        stock:"15",
        image:"/image/fernetBranca.png",
        price:"13500",
    },

    {
        id: 11,
        name:"Quilmes Cristal 1 L",
        description:"Lager argentina de buen equilibrio, refrescante y de amargor suave. Perfecta bien fría para acompañar picadas.",
        cepa:"—",
        marca:"Quilmes",
        category:"Cervezas",
        stock:"20",
        image:"/image/quilmes1L.png",
        price:"2500",
    },
    {
        id: 12,
        name:"Patagonia Amber Lager 740 ml",
        description:"Amber Lager con notas a caramelo y leve tostado, cuerpo medio y final redondo. Excelente maridaje con carnes y hamburguesas.",
        cepa:"—",
        marca:"Patagonia",
        category:"Cervezas",
        stock:"16",
        image:"/image/patagoniaAmber740.png",
        price:"4200",
    },

    {
        id: 13,
        name:"Licor de Dulce de Leche 750 ml",
        description:"Licor cremoso elaborado a base de dulce de leche argentino. Textura suave, dulce equilibrado y final lácteo. Ideal para postres y cafés.",
        cepa:"—",
        marca:"Cusenier",
        category:"Licores",
        stock:"8",
        image:"/image/licorDulceDeLeche.png",
        price:"9800",
    },
    {
        id: 14,
        name:"Licor de Huevo 750 ml",
        description: "Licor cremoso elaborado a base de yema de huevo, leche y un toque de vainilla. Suave, dulce y aterciopelado en boca, ideal para disfrutar bien frío, solo o acompañado de postres.",
        cepa:"—",
        marca:"Cusenier",
        category:"Licores",
        stock:"6",
        image:"/image/licorHuevo.png",
        price:"10200",
    }
];



const getProducts = () => {
    return new Promise ((resolve) => {
        
        setTimeout(()=>{
            resolve(products)
        }, 3000)
        
    })
}

export default getProducts;
