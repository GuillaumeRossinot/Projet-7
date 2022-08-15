import getData from "../utils/fetchData.js"

async function getRecipess() {
    const data = await getData()
    return { recipes: data.recipes }
}