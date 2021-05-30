import {products} from "../data/products";

export const getVisibleProducts = (selectedCategories) => {
    if(!selectedCategories.length)
        {
            return products;
        }
    else
    {
        return products.filter(product => selectedCategories.includes(product.category));
    }    
    }