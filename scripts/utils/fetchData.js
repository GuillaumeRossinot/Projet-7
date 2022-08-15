export default async function getData () {

    const localeURL = './data/recipes.json'

    const response = await fetch(localeURL)

    const data = await response.json()

    return data
}