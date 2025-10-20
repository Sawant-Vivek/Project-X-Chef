import { pipeline } from '@huggingface/transformers';

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they don't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.
`;

let generator = null;

export async function getRecipeFromMistral(ingredientsArr) {
    if (!generator) {
        generator = await pipeline('text-generation', 'Xenova/gpt2');
    }
    const ingredientsString = ingredientsArr.join(", ");
    const prompt = `${SYSTEM_PROMPT}\nI have ${ingredientsString}. Please give me a recipe you'd recommend I make!`;

    const result = await generator(prompt, { 
      max_new_tokens: 20,
      do_sample: true,
      top_k: 5 ,});
    return console.log(result);   
}