import React from 'react'
import Image7 from '../images/PngItem_4046189.png';
import Image8 from '../images/PngItem_5136838.png';
import {CatagoryQuery} from '../apollo-client/Query';
import {useQuery} from '@apollo/client'



import {OutlinedInput,InputLabel,IconButton,FormControl,InputAdornment
    ,makeStyles,Button} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

const useStyles=makeStyles({
    catagoryBtn:{
        borderColor:"#5C7795"
    },
})
export default function ProductWithCatagory() {
    const classes=useStyles();
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const list=[0,1,2,3,4,5];
    const {data,error,loading}=useQuery(CatagoryQuery);
    return (
        <div>
            <div className="letest-product">
                <div className="catagories">
                    <h2>Catagories</h2>
                    <hr />
                </div>
                <div className="catagories-list-product">
                    {
                        error?<p>{error.message}</p>:loading?<p>loading ...</p>:
                        data.catagory.map((catagory,i)=>(
                            i>=6?
                            <div className={`catagories-list c${i-6}`} key={catagory._id}>
                                <Button className={classes.catagoryBtn} variant="outlined">{catagory.title}</Button>
                                <div className="catagories-img">
                                    <img src={`http://localhost:5000/${catagory.imageUrl}`} alt=""/>
                                    <p>{catagory.description}</p>
                                </div>
                            </div>:
                            <div className={`catagories-list c${i}`} key={catagory._id}>
                                <Button className={classes.catagoryBtn} variant="outlined">{catagory.title}</Button>
                                <div className="catagories-img">
                                    <img src={`http://localhost:5000/${catagory.imageUrl}`} alt=""/>
                                    <p>{catagory.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            
            <div className="description">
                <img src={Image7} alt=""/>
                <div className="news-subscribe">
                    <div>
                        <h1>Get Our Latest Offers News</h1>
                        <h4>subscribe for news</h4>
                    </div>
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel htmlFor="outlined-adornment-search">search</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-search"
                            type="text"
                            className={classes.searchInput}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="search"
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        
                                    >
                                        <SendIcon size="large"/>
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={70}
                        />
                    </FormControl>
                </div>
                <img src={Image8} alt=""/>
            </div>
        </div>
    )
}
