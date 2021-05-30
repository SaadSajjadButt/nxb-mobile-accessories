import { CardContent,Typography,Checkbox } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { FormControlLabel } from "@material-ui/core";
import {categoryTitles} from "../../data/categories";


function CategoryFilterItem(props){
 const {category,onChangeCategory} = props;
 return(
    <FormControlLabel
    control = {
        <Checkbox
        onChange = {event => onChangeCategory(category,event.target.checked)}
        />
    }
    label = {category}
    />
    );
}




export default function CategoryFilter(props){
    const {onChangeCategory} =props;
    return(
        <Card>
        <CardContent>
        <Typography variant="h6">Category</Typography>
        {
            categoryTitles.map(category => (
                <CategoryFilterItem
                key={category}
                category={category}
                onChangeCategory={onChangeCategory}
                />
            ))
        }
        </CardContent>
        </Card>
    );

}