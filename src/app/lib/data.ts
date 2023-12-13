import { vehiculo } from "./types"
export const dataProtejeTuAuto = [
    {
        title: 'Llanta robada',
        description: 'He salido de casa a las siete de la mañana para ir a la universidad (UC, en Puente Bárbula) con mi carro, llego a la universidad que está en Naguanagua y lo dejo donde siempre en el estacionamiento de la facultad...',
        src: '/llantaRobada.svg'
    },
    {
        title: 'Choque y/o pasarte la luz roja',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales elit elit, at pharetra purus bibendum sit amet. In eget sollicitudin massa, et ullamcorper sapien. Nullam ut euismod urna, vel consequat nulla. Ut vel nunc quam. Nam mi augue, porttitor vel nulla ut, gravida vehicula arcu. Aenean suscipit interdum lobortis. Nullam placerat varius neque a auctor.',
        src: '/choque.svg'
    },
    {
        title: 'Atropello en la vía Evitamiento',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales elit elit, at pharetra purus bibendum sit amet. In eget sollicitudin massa, et ullamcorper sapien. Nullam ut euismod urna, vel consequat nulla. Ut vel nunc quam. Nam mi augue, porttitor vel nulla ut, gravida vehicula arcu. Aenean suscipit interdum lobortis. Nullam placerat varius neque a auctor.',
        src: '/atropello.svg'
    },
]

export const dataProtejeOtros = [
    {
        title: 'Opcion 1 Proteje a otros',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales elit elit, at pharetra purus bibendum sit amet. In eget sollicitudin massa, et ullamcorper sapien. Nullam ut euismod urna, vel consequat nulla. Ut vel nunc quam. Nam mi augue, porttitor vel nulla ut, gravida vehicula arcu. Aenean suscipit interdum lobortis. Nullam placerat varius neque a auctor.',
        src: '/llantaRobada.svg'
    },
    {
        title: 'Opcion 2 Proteje a otros',
        description: 'Nunc pretium porta metus consequat hendrerit. Ut sed consequat mauris, quis aliquet sem. Vivamus eu laoreet nibh. Maecenas fringilla diam faucibus commodo consectetur. Phasellus lacinia gravida elit vel molestie. Maecenas tincidunt orci leo, vitae euismod tortor elementum in. In in dui consectetur, imperdiet turpis in, elementum est.',
        src: '/choque.svg'
    },
    {
        title: 'Opcion 3 Proteje a otros',
        description: 'Praesent ornare pulvinar lectus, vel ultrices orci sagittis vel. Praesent et urna elit. Pellentesque quis tempus libero, vitae imperdiet nunc. Sed et accumsan elit, ut gravida risus. Etiam ut tincidunt urna. Aliquam mollis, lectus in eleifend fermentum, eros odio efficitur lectus, eu placerat sem purus id orci. Quisque consectetur pretium leo. Nulla facilisi.',
        src: '/atropello.svg'
    },
]


export const dataMejora = [
    {
        title: 'Opcion 1 Mejora',
        description: 'Quisque sodales odio vitae ipsum accumsan tempus. Fusce elementum, felis in imperdiet feugiat, metus arcu lacinia erat, non aliquet tortor erat nec turpis. Curabitur quis iaculis nisl. Phasellus dui sem, semper faucibus ex et, malesuada vulputate magna.',
        src: '/llantaRobada.svg'
    },
    {
        title: 'Opcion 2 Mejora',
        description: 'Lorem consectetur pretium leo. Nulla facilisi. Nunc imperdiet rhoncus cursus. Nulla facilisi. Etiam enim ipsum, rutrum suscipit aliquet quis, consequat a sapien. Proin id lacus vestibulum, ultrices mi quis, vehicula risus. Curabitur placerat sagittis sem ac finibus. Etiam tristique convallis est a ullamcorper.',
        src: '/choque.svg'
    },
    {
        title: 'Opcion 3 Mejora',
        description: 'Praesent ornare pulvinar lectus, vel ultrices orci sagittis vel. Praesent et urna elit. Pellentesque quis tempus libero, vitae imperdiet nunc. Sed et accumsan elit, ut gravida risus. Etiam ut tincidunt urna. Aliquam mollis, lectus in eleifend fermentum, eros odio efficitur lectus, eu placerat sem purus id orci. Quisque consectetur pretium leo. Nulla facilisi.',
        src: '/atropello.svg'
    },
]

export const planesCobertura = {
    montoBase: 20.00,
    llantaRobada: 15.00,
    choqueRoja: 20.00,
    atropello: 50.00
}

export const vehiculos: vehiculo[] = [
    {
        id: 0,
        marca: 'Wolskwagen',
        modelo: 'Golf',
        anio: '2019'
    },
    {
        id: 1,
        marca: 'Wolskwagen',
        modelo: 'Crossfox',
        anio: '2017'
    },
    {
        id: 2,
        marca: 'Toyota',
        modelo: 'Corolla',
        anio: '2020'
    },
    {
        id: 3,
        marca: 'Toyota',
        modelo: '4Runner',
        anio: '2022'
    },
    {
        id: 4,
        marca: 'Ford',
        modelo: 'FX4',
        anio: '2007'
    },
    {
        id: 5,
        marca: 'Honda',
        modelo: 'Civic',
        anio: '2020'
    },
    {
        id: 6,
        marca: 'Mazda',
        modelo: 'Mazda3',
        anio: '2013'
    },
    {
        id: 7,
        marca: 'Chevrolet',
        modelo: 'Corsa',
        anio: '2006'
    },
    {
        id: 8,
        marca: 'Jeep',
        modelo: 'Grand Cherokee',
        anio: '2012'
    },
    {
        id: 9,
        marca: 'Reanult',
        modelo: 'Symbol',
        anio: '2017'
    }
]