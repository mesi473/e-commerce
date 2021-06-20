import React,{useState} from 'react';
import Header from './Header';
import MapPicker from 'react-google-map-picker';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import {useMutation} from '@apollo/client';
import {CustomerBillInfo} from '../apollo-client/Mutation';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import {useQuery} from '@apollo/client';
import {ProductQuery} from '../apollo-client/Query';
import {useSelector} from 'react-redux'

const DefaultLocation = { lat: 8.9806, lng: 38.7578};
const DefaultZoom = 13;

export default function BuyerInformation() {
    const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);
    const [add_customer_bill_info]=useMutation(CustomerBillInfo);
    console.log(add_customer_bill_info);
    const [location, setLocation] = useState(defaultLocation);
    const [zoom, setZoom] = useState(DefaultZoom);
    const [value, setValue] = useState()
    function makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
        for (var i = 0; i < 5; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      
        return text;
      }
    const [state,setState]=useState({
        firstName:'',
        lastName:'',
        country:'',
        region: '',
        street:'',
        latitute:location.lat,
        longitute:location.lng,
        zoom:zoom,
        phoneNumber:value,
        secrateKey:makeid(),
        cartItem:[],
        banktype:''
    })
    function selectCountry (val) {
        setState({...state, country: val });
    }
    
    function selectRegion (val) {
        setState({...state, region: val });
    }
    function handleChangeLocation (lat, lng){
        setLocation({lat:lat, lng:lng});
        setState({...state,latitute:lat,longitute:lng});
    }
    
    function handleChangeZoom (newZoom){
        setZoom(newZoom);
        setState({...state,zoom:newZoom});
    }

    function handleResetLocation(){
        setDefaultLocation({ ... DefaultLocation});
        setZoom(DefaultZoom);
    }
    React.useEffect(()=>{
        window.addEventListener('scroll',function(){
            var header=document.getElementsByClassName("header1");
            header[0].classList.toggle('sticky',window.scrollY>0);
            var header1=document.getElementsByClassName("header2");
            header1[0].classList.toggle('stickyup',window.scrollY>0);
            var header2=document.getElementsByClassName("search-input");
            header2[0].classList.toggle('sticky-search',window.scrollY>0);
            var sign_up_btn=document.getElementsByClassName("sign-in-btn");
            sign_up_btn[0].classList.toggle('sticky',window.scrollY>0);
        });
    })
    
    const CartItems=useSelector(state=>state.increaseCartNumber.cart_ids);
    const {data,error,loading}=useQuery(ProductQuery);
    function total(){
        let total=0;
        data.product.map(product=>{
            CartItems.map((item,index)=>{
                if(product._id===item.item_id){
                    total=total+CartItems[index].qty*product.selling_price
                }
            })
        })
        return total;
    }
    return (
        <div>
            <Header/>
            <div className="buyer-info-area">
                <div className="buyer-info">
                    <h1>Information</h1>
                    <div style={{display:"flex",flexDirection:'row'}}>
                        <div style={{display:"flex",flexDirection:'column'}}>
                            <input placeholder="first name"
                            value={state.firstName}
                            onChange={(e)=>{
                                setState({firstName:e.target.value})
                            }} 
                            />
                            <input placeholder="last name"
                            value={state.lastName}
                            onChange={(e)=>{
                                setState({lastName:e.target.value})
                            }} 
                            />
                            <CountryDropdown
                            style={{width:"200px"}}
                            value={state.country}
                            onChange={(val) => selectCountry(val)} />
                            <RegionDropdown
                            style={{width:"200px"}}
                            country={state.country}
                            value={state.region}
                            onChange={(val) => selectRegion(val)} />
                            <input placeholder="street/ሰፈር"
                            value={state.street}
                            onChange={(e)=>{
                                setState({street:e.target.value})
                            }} 
                            />
                        </div>
                        <div style={{display:"flex",flexDirection:'column'}}>
                            <input type='text' value={`Latitute:${location.lat}`} disabled/>
                            <input type='text' value={`Longitute:${location.lng}`} disabled/>
                            <input type='text' value={`Zoom:${zoom}`} disabled/>
                            <button onClick={handleResetLocation}>Reset Location</button>
                        </div>
                        <div style={{display:"flex",flexDirection:'column'}}>
                            <PhoneInput
                            international
                            defaultCountry="ET"
                            value={value}
                            onChange={(e)=>setState(setValue)}
                            />
                            <select
                            value={state.banktype}
                            onChange={(e)=>{
                                setState({banktype:e.target.value})
                            }} 
                            >
                                <option disabled>Choose deposit provider</option>
                                <option value="CBE">CBE Birr</option>
                                <option value="HelloCash">Hello Cash</option>
                            </select>
                            <input type='text' value={`deposit amount:${total()+total()*0.15}`}/>
                            <input type="text" value="secret key=dlsjf232dk"/>
                            <p>please dont forget your secrate key</p>
                        </div>
                    </div>
                    <div>
                        <button>clear</button>
                        <button>buy</button>
                    </div>
                </div>
                <div className="map">
                
                    <MapPicker defaultLocation={defaultLocation}
                    zoom={zoom}
                    style={{width:"100%",height:"100%"}}
                    onChangeLocation={handleChangeLocation} 
                    onChangeZoom={handleChangeZoom}
                    apiKey='AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8'/>
                </div>
            </div>
        </div>
    )
}
