import React from 'react'
import Image1 from '../images/PngItem_6386654.png'
import Image2 from '../images/PngItem_4046228.png'
import Image3 from '../images/PngItem_1180019.png'
import Image4 from '../images/PngItem_5852061.png'
import Image5 from '../images/PngItem_2182838.png'
import Image6 from '../images/PngItem_1302708.png';
import Image7 from '../images/PngItem_4046189.png';
import Image8 from '../images/PngItem_5136838.png';



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
    return (
        <div>
            <div className="letest-product">
                <div className="catagories">
                    <h2>Catagories</h2>
                    <hr />
                </div>
                <div className="catagories-list-product">
                    <div className="catagories-list">
                        <Button className={classes.catagoryBtn} variant="outlined">For male</Button>
                        <div className="catagories-img">
                            <img src={Image1} alt=""/>
                        </div>
                    </div>
                    <div className="catagories-list c2">
                        <Button className={classes.catagoryBtn} variant="outlined">For Female</Button>
                        <div className="catagories-img">
                            <img src={Image2} alt=""/>
                        </div>
                    </div>
                    <div className="catagories-list c3">
                        <Button className={classes.catagoryBtn} variant="outlined">Traditional</Button>
                        <div className="catagories-img">
                            <img src={Image3} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="catagories-list-product">
                    <div className="catagories-list c1">
                        <Button className={classes.catagoryBtn} variant="outlined">Well Known Brand</Button>
                        <div className="catagories-img">
                            <img src={Image4} alt=""/>
                        </div>
                    </div>
                    <div className="catagories-list c4">
                        <Button className={classes.catagoryBtn} variant="outlined">Winter Clothes</Button>
                        <div className="catagories-img">
                            <img src={Image5} alt=""/>
                        </div>
                    </div>
                    <div className="catagories-list ">
                        <Button className={classes.catagoryBtn} variant="outlined">Summer Clothes</Button>
                        <div className="catagories-img">
                            <img src={Image6} alt=""/>
                        </div>
                    </div>
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
