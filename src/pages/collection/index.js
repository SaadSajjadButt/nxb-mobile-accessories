import Grid from "@material-ui/core/Grid";
import { useState } from "react";
import CategoryFilter from "./category-filter";
import ProductListing from "./product-listing";
import {getVisibleProducts} from "../../api/products-api";
import ButtonAppBar from "../materialui/buttonappbar";

export default function Collection(){
    const [selectedCategories , setSelectedCategories] = useState([]);

    const products = getVisibleProducts(selectedCategories)

    const onChangeCategoryHandler = (category,isChecked) => {
    if(isChecked)
        setSelectedCategories([...selectedCategories,category]);
    else
        setSelectedCategories(selectedCategories.filter(cat => cat !== category ));    
    }
    
    return (
        <div>
        <ButtonAppBar/>
        <Grid container>
        <Grid item lg={2} spacing={1}>
        <CategoryFilter
         onChangeCategory={onChangeCategoryHandler}
        />
        </Grid>
        <Grid item lg={10}>
  
        
        <ProductListing
         products={products}
        />
     
       
        </Grid>
        </Grid>   
        </div>
    );
}