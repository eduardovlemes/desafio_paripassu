export function getPokemonId(value) {
    const urlParts = value.species.url.split('/')
    return urlParts[urlParts.length - 2]
}

export function getCapitalizeName(value) {
    return value.name.charAt(0).toUpperCase() + value.name.slice(1)
}
