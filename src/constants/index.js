export const marcas = [
    { id:1, nombre :'BMW'},
    { id:2, nombre :'Mercedes'},
    { id:3, nombre :'Porsche'},
]

const yearmax = new Date().getFullYear();

 export const years = Array.from(new Array(20), (valor, index) => yearmax - index );

 export const planes = [
    { id:1, nombre :'Básico'},
    { id:2, nombre :'Todo Riesgo'}
    
]