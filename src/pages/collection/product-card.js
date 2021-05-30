import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";


const useStyles = makeStyles ({
    media:{
        width:'auto',
        height:'200px'
    },
    content:{
        height:'100px'
    }
}); 



export default function ProductCard(props){
    const {image , title , description , price} = props.product
    const classes = useStyles();
    return(
        <Card>
            <CardActionArea>
                <CardMedia
                   className={classes.media}
                   image={image}
                />
                 <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                       Rs. {price}
                    </Typography>
                </CardContent>
                
            </CardActionArea>

        </Card>    
    );
}