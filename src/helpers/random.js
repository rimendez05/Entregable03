export const getRandomDimension = () => {
    //? Esta función devuelve un número aleatorio entre 1 y 126 que representa una dimención
    return Math.floor(Math.random() * 126) + 1;
}