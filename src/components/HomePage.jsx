import React from 'react'
import { NavBar } from './NavBar'
import Footer from './Footer';
import "./Footer.css"
import "./HomePage.css"
import TextField from "@mui/material/TextField";
import circle from "../assets/circle.svg"
import plane from "../assets/plane.svg"
import Hotel from "../assets/hotel.svg"
import Attractions from "../assets/attractions.svg"
import Eats from "../assets/eats.svg"
import Commute from "../assets/Commute.svg"
import Taxi from "../assets/Taxi.svg"
import Movies from "../assets/Movies.svg"
import arrow from "../assets/arrow-right.svg"
import Bali from "../assets/bali.png"
import Swiss from "../assets/SwitzerlandImage.png"
import Boracay from "../assets/BoracayImage.png"
import Palawan from "../assets/PalawanImage.png"
import Matterhorn from "../assets/Matterhorn Suites Image.png"
import Discovery from "../assets/Discovery Shores Image.png"
import Artic from "../assets/Arctic Hut Image.png"
import Lake from "../assets/Lake Louise Image.png"
import vector from "../assets/Vector.svg"


export const HomePage = () => {

    const popularLocation = [{
        place: "Paris",
        price: "699"
    },
    {
        place: "Greece",
        price: "1079"
    },
    {
        place: "Norway",
        price: "895"
    },
    {
        place: "Tuscany",
        price: "1245"
    },]

    const RecommendedLocation = [
        { place: "Bali", n: "4D3N", price: "899", img: Bali },
        { place: "Swiss", n: "6D5N", price: "900", img: Swiss },
        { place: "Boracay", n: "5D4N", price: "699", img: Boracay },
        { place: "Palawan", n: "5D4N", price: "789", img: Palawan },
    ]

    const PopularStays = [
        { size: "Entire bungalow", place: "Matterhorn Suites", price: "$575/night", ratings: "4.9", review: "(60 reviews)", img: Matterhorn },
        { size: "2-Story beachfront suite", place: "Discovery Shores", price: "$360/night", ratings: "4.8", review: "(116 reviews)", img: Discovery },
        { size: "Single deluxe hut", place: "Arctic Hut ", price: "$420/night", ratings: "4.7", review: "(78 reviews)", img: Artic },
        { size: "Deluxe King Room", place: "Lake Louise Inn", price: "$244/night", ratings: "4.6", review: "(63 reviews)", img: Lake },
    ]

    return (
        <>
            <NavBar />
            <div style={{ zIndex: '0' }} className='bg'>
                <div style={{ paddingLeft: '140px', paddingRight: '140px' }} className='img'>
                    <div style={{ paddingTop: '167.5px' }}>
                        <p id='typo'>Let explore & travel the world</p>
                        <p id='typo2'>Find the best destinations and the most popular stays!</p>
                        {/* Search Flights */}
                        <div id='flight' style={{ padding: '20px', marginTop: '43px', background: "white", borderRadius: "10px", height: "158px", boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)" }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', width: "100%" }}>
                                <div id='flight-head'>Search flights</div>
                                <div style={{ gap: "30px", display: 'flex' }}>
                                    <div>
                                        <input type="radio" name='same' value={"Return"} /> <span style={{ marginLeft: "9px" }}>Return</span>
                                    </div>
                                    <div>
                                        <input type="radio" name='same' value={"Return"} /><span style={{ marginLeft: "9px" }}>One Way</span>
                                    </div>
                                </div>
                            </div>
                            <div style={{ gap: '10px', marginTop: '23px', display: 'flex', justifyContent: 'space-evenly', width: '100%' }}>
                                <TextField
                                    required
                                    fullWidth
                                    name="dep"
                                    label="Departure"
                                    type="text"
                                    id="dep"
                                    autoComplete="Singapore  (SN)"
                                    value="Singapore (SN)"
                                />
                                <TextField
                                    required
                                    fullWidth
                                    name="arr"
                                    label="Arrival"
                                    type="text"
                                    id="arr"
                                    autoComplete="Los Angeles (LA)"
                                    value="Los Angeles (LA)"
                                />
                                <TextField
                                    required
                                    fullWidth
                                    name="dep"
                                    label="Departure"
                                    type="date"
                                    id="dep"
                                    autoComplete="Singapore  (SN)"
                                    value="Singapore (SN)"
                                />
                                <button style={{ width: '164px', color: 'white', borderRadius: '4px', minWidth: '164px', height: '56px', border: 'none', outline: 'none', backgroundColor: "#F99A0E" }}>
                                    SEARCH FLIGHTS
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Recent Searches */}
                <div style={{ marginTop: '69px', marginLeft: '80px', marginRight: '80px' }}>
                    <div style={{
                        color: '#303030',
                        fontFamily: "Roboto",
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: 'normal',
                        letterSpacing: '0.72px', textTransform: "uppercase"
                    }}>Recent Searches</div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', marginBottom: '20px' }}>

                        <div className='faint-border' style={{ marginRight: '15px', padding: '20px', width: '100%' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className='searches-text' style={{ width: "44.727px" }}>SIN</div>
                                <div style={{ display: "flex", marginTop: '7.33px', marginBottom: '6.77px' }}>
                                    <img style={{ marginRight: '37.75px' }} src={circle} alt="" />
                                    <img src={plane} style={{ marginRight: '37.75px' }} alt="" />
                                    <img src={circle} alt="" />
                                </div>
                                <div className='searches-text'>LAX</div>
                            </div>
                            <div style={{ textAlign: 'center', marginTop: '21px' }}>
                                <span style={{
                                    color: '#000',
                                    fontFamily: 'Roboto',
                                    fontSize: '20px',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    lineHeight: 'normal',
                                    letterSpacing: '0.8px',
                                    textTransform: 'capitalize'
                                }}>Depart on: </span><span style={{
                                    color: '#000',
                                    fontFamily: 'Roboto',
                                    fontSize: '20px',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    lineHeight: 'normal',
                                    letterSpacing: '0.8px',
                                    textTransform: 'capitalize',
                                }}>9 Sep 2021</span>
                            </div>
                        </div>

                        <div className='faint-border' style={{ padding: '20px', width: '100%' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className='searches-text'>MY</div>
                                <div style={{ display: "flex", marginTop: '7.33px', marginBottom: '6.77px' }}>
                                    <img style={{ marginRight: '37.75px' }} src={circle} alt="" />
                                    <img src={plane} style={{ marginRight: '37.75px' }} alt="" />
                                    <img src={circle} alt="" />
                                </div>
                                <div className='searches-text'>DUB</div>
                            </div>
                            <div style={{ textAlign: 'center', marginTop: '21px' }}>
                                <span style={{
                                    color: '#000',
                                    fontFamily: 'Roboto',
                                    fontSize: '20px',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    lineHeight: 'normal',
                                    letterSpacing: '0.8px',
                                    textTransform: 'capitalize'
                                }}>Depart on: </span><span style={{
                                    color: '#000',
                                    fontFamily: 'Roboto',
                                    fontSize: '20px',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    lineHeight: 'normal',
                                    letterSpacing: '0.8px',
                                    textTransform: 'capitalize',
                                }}>9 Sep 2021</span>
                            </div>
                        </div>
                    </div>
                    {/* JOD */}
                    <div style={{ marginTop: '36px' }}>
                        <div style={{
                            color: '#CECECE',
                            fontFamily: 'Roboto',
                            fontSize: '18px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: 'normal',
                            letterSpacing: '0.72px',
                            textTransform: 'uppercase',
                        }}> Prepare for your trip</div>
                    </div>
                    <div className='trip' style={{ marginTop: '20px' }}>
                        <div style={{}}>
                            <img style={{
                                width: "65.387px",
                                height: '65.387px'
                            }} src={Hotel} alt="" />
                            <div className='trip-text' style={{

                            }}>Hotel</div>
                        </div>
                        <div>
                            <img style={{
                                width: "65.387px",
                                height: '65.387px'
                            }} src={Attractions} alt="" />
                            <div className='trip-text'>Attractions</div>
                        </div>
                        <div>
                            <img style={{
                                width: "65.387px",
                                height: '65.387px'
                            }} src={Eats} alt="" />
                            <div className='trip-text'>Eats</div>
                        </div>
                        <div>
                            <img style={{
                                width: "65.387px",
                                height: '65.387px'
                            }} src={Commute} alt="" />
                            <div className='trip-text'>Commute</div>
                        </div>
                        <div>
                            <img style={{
                                width: "65.387px",
                                height: '65.387px'
                            }} src={Taxi} alt="" />
                            <div className='trip-text'>Taxi</div>
                        </div>
                        <div>
                            <img style={{
                                width: "65.387px",
                                height: '65.387px'
                            }} src={Movies} alt="" />
                            <div className='trip-text'>Movies</div>
                        </div>
                    </div>

                    {/* Plan Your Next Trip */}
                    <div style={{ marginTop: '80px', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div><p style={{
                                color: '#1262AE',
                                fontFamily: 'Roboto',
                                fontSize: '18px',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: 'normal',
                                letterSpacing: '0.72px',
                                textTransform: 'uppercase',
                            }}>Plan your next trip</p></div>
                            <div style={{
                                color: '#303030',
                                fontFamily: 'Roboto',
                                fontSize: '30px',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: 'normal',
                                letterSpacing: '1.2px',
                                textTransform: 'capitalize',
                            }}>Most Popular Destinations</div>
                        </div>
                        <div style={{ display: 'flex', }}><span style={{
                            color: '#1262AE',
                            textAlign: 'right',
                            fontFamily: 'Roboto',
                            fontSize: '18px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: 'normal',
                            letterSpacing: '0.72px',
                        }}>View all destinations</span><img style={{
                            width: "24px",
                            height: "24px",
                            flexShrink: '0',
                            marginLeft: '10px'
                        }} src={arrow} alt="" /></div>
                    </div>

                    <div style={{
                        paddingLeft: '16px', marginTop: '24px',
                        paddingRight: '16px', display: 'flex', justifyContent: 'space-between', gap: '20px', width: '100%'
                    }}>
                        {popularLocation.map((loc, index) => (
                            <div key={index} className={`popular popular${index + 1}`} style={{
                                paddingLeft: '16px',
                                paddingRight: '16px',
                                display: 'flex', justifyContent: 'space-between',
                                borderRadius: '5px',
                                width: '288px',
                                height: '182px',
                                flexShrink: 0,
                            }}>

                                <p style={{ marginTop: '8px' }} className='place-text'>
                                    {loc.place}
                                </p>
                                <p style={{ marginTop: '8px' }} className='place-from'>
                                    FROM
                                    <p className='place-doller'>
                                        ${loc.price}
                                    </p>
                                </p>

                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '80px' }}>
                        <div style={{
                            color: '#303030',
                            fontFamily: 'Roboto',
                            fontSize: '30px',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            lineHeight: 'normal',
                            letterSpacing: '1.2px',
                            textTransform: 'capitalize',
                        }}>
                            Recommended Holidays
                        </div>
                        <div style={{
                            paddingLeft: '16px', marginTop: '24px',
                            paddingRight: '16px', display: 'flex', justifyContent: 'space-between', gap: '20px', width: '100%'
                        }}>
                            {RecommendedLocation.map((loc, ind) => (
                                <>
                                    <div className='faint-border' key={ind}>

                                        <div style={{
                                            height: '242px',
                                            width: '288px',
                                            alignSelf: 'stretch',
                                        }}>
                                            <img src={loc.img} alt="" />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <div style={{
                                                    marginTop: '20px', color: '#424242',
                                                    fontFamily: 'Roboto',
                                                    fontSize: '20px',
                                                    fontStyle: 'normal',
                                                    fontWeight: 500,
                                                    lineHeight: 'normal',
                                                    letterSpacing: '0.4px',
                                                }}>{loc.place}</div>
                                                <div style={{
                                                    color: '#999',
                                                    fontFamily: 'Roboto',
                                                    fontSize: '16px',
                                                    fontStyle: 'normal',
                                                    fontWeight: 400,
                                                    lineHeight: 'normal',
                                                    letterSpacing: '0.32px',
                                                }}>{loc.n}</div>
                                            </div>
                                            <div style={{
                                                display: 'flex', justifyContent: 'center', color: '#1262AF',
                                                textAlign: 'right',
                                                fontFamily: 'Baloo Bhai',
                                                fontSize: '32px',
                                                fontStyle: 'normal',
                                                fontWeight: 400,
                                                lineHeight: '34px', // You can use '1.0625' instead for the percentage value
                                            }}>${loc.price}</div>
                                        </div>
                                    </div>
                                </>
                            ))}

                        </div>
                    </div>
                    <div style={{
                        marginTop: '80px',
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                    }}>
                        <div style={{
                            color: '#303030',
                            fontFamily: 'Roboto',
                            fontSize: '30px',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            lineHeight: 'normal',
                            letterSpacing: '1.2px',
                            textTransform: 'capitalize',
                        }}>
                            Popular Stays
                        </div>
                        <div style={{ display: "flex" }}>
                            <div style={{
                                color: '#1262AE',
                                textAlign: 'right',
                                fontFamily: 'Roboto',
                                fontSize: '18px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: 'normal',
                                letterSpacing: '0.72px',
                                marginRight: "15px"
                            }}>
                                View all stays
                            </div>
                            <div><img src={arrow} alt="" /></div>
                        </div>


                    </div>
                    <div style={{ marginLeft: "12px", display: "flex", marginRight: '12px', marginTop: "20px", gap: "20px", justifyContent: "space-between" }}>
                        {PopularStays.map((loc, ind) => (
                            <>
                                <div key={ind}>
                                    <div style={{ paddingTop: '15px', paddingLeft: '13px', paddingRight: '13px', marginBlock: '23px', }}>
                                        <div><img src={loc.img} alt="" /></div>
                                        <div>
                                            <div style={{
                                                marginTop: '23px', color: '#8E8E94',
                                                fontFamily: 'Roboto',
                                                fontSize: '16px',
                                                fontStyle: 'normal',
                                                fontWeight: 400,
                                                lineHeight: 'normal',
                                                letterSpacing: '0.32px',
                                            }}>{loc.size}</div>
                                            <div style={{
                                                color: '#303030',
                                                fontFamily: 'Roboto',
                                                fontSize: '22px',
                                                fontStyle: 'normal',
                                                fontWeight: 700,
                                                lineHeight: 'normal',
                                                letterSpacing: '0.88px',
                                                textTransform: 'capitalize',
                                            }} >{loc.place}</div>
                                            <div style={{
                                                color: '#303030',
                                                fontFamily: 'Roboto',
                                                fontSize: '18px',
                                                fontStyle: 'normal',
                                                fontWeight: 400,
                                                lineHeight: 'normal',
                                                letterSpacing: '0.72px',
                                            }}>{loc.price}</div>
                                        </div>

                                        <div style={{ marginTop: "23px", display: "flex" }}>
                                            <div><img src={vector} alt="" /></div>
                                            <div style={{
                                                color: '#303030',
                                                fontFamily: 'Roboto',
                                                fontSize: '16px',
                                                fontStyle: 'normal',
                                                fontWeight: 500,
                                                lineHeight: 'normal',
                                                letterSpacing: '0.64px',
                                            }}>{loc.ratings}</div>
                                            <div style={{
                                                color: '#1262AF',
                                                fontFamily: 'Roboto',
                                                fontSize: '16px',
                                                fontStyle: 'normal',
                                                fontWeight: 400,
                                                lineHeight: 'normal',
                                                letterSpacing: '0.64px',
                                            }}>{loc.review}</div>
                                        </div>
                                        <div style={{
                                            marginTop: '23px', display: 'flex',
                                            height: '46px',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            alignSelf: 'stretch',
                                            borderRadius: '4px',
                                            border: '1px solid #CCDCEC',
                                        }}>
                                            <button style={{
                                                color: '#1262AF',
                                                fontFeatureSettings: "'clig' off, 'liga' off",
                                                fontFamily: 'Roboto',
                                                fontSize: '15px',
                                                fontStyle: 'normal',
                                                fontWeight: 500,
                                                lineHeight: '26px', // You can use '1.73333' instead for the percentage value
                                                letterSpacing: '0.46px',
                                                textTransform: 'uppercase',
                                            }}>
                                                MORE DETAILS
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>

                </div>
                {/* Footer */}
                <Footer />
            </div>


        </>

    )
}
