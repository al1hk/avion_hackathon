import { groq } from 'next-sanity';

export const allProductsQuery = groq`*[_type == "product"]`;

export const furniture = groq`*[_type == "product"]`;