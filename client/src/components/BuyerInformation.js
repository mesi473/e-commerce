import React,{useState} from 'react';
import Header from './Header';
import MapPicker from 'react-google-map-picker';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'

const DefaultLocation = { lat: 8.9806, lng: 38.7578};
const DefaultZoom = 13;

export default function BuyerInformation() {
    const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

    const [location, setLocation] = useState(defaultLocation);
    const [zoom, setZoom] = useState(DefaultZoom);

    function handleChangeLocation (lat, lng){
        setLocation({lat:lat, lng:lng});
    }
    
    function handleChangeZoom (newZoom){
        setZoom(newZoom);
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
    const [value, setValue] = useState()
    return (
        <div>
            <Header/>
            <div className="buyer-info-area">
                <div className="buyer-info">
                    <h1>Information</h1>
                    <div style={{display:"flex",flexDirection:'row'}}>
                        <div style={{display:"flex",flexDirection:'column'}}>
                            <input placeholder="first name" />
                            <input placeholder="last name" />
                            <input placeholder="country" />
                            <input placeholder="street/ሰፈር"/>
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
                            onChange={setValue}
                            />
                            <select>
                                <option disabled>Choose deposit provider</option>
                                <option>CBE Birr</option>
                                <option>Hello Cash</option>
                            </select>
                            <input type='text' value={`deposit amount:${zoom}`}/>
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
