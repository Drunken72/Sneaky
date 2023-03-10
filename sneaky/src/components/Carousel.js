import { useState } from "react";
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CarouselImg=()=>{
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return(
    
    <>
      <Carousel indicators={false} activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                 <img
                className="d-block w-100 h-10 caroimg"
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d4c3ab4b-99ba-456e-b931-a61e7df92750/df67ki9-a8847db8-3a18-4e34-b526-ac450ae14107.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q0YzNhYjRiLTk5YmEtNDU2ZS1iOTMxLWE2MWU3ZGY5Mjc1MFwvZGY2N2tpOS1hODg0N2RiOC0zYTE4LTRlMzQtYjUyNi1hYzQ1MGFlMTQxMDcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-JyR_JY-2i9ltHV3yZ_L9Y3eKbyMps3yM-drfLOCy-c"
                alt="First slide"
                />
                <Carousel.Caption>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 h-10 caroimg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ZmPEbn8jvbNx8T92oEfNvuFCXh2gFKoSTA&usqp=CAU"
                alt="Second slide"
                />

                <Carousel.Caption>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 caroimg"
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4635bcd4-4a1d-4e83-bbe4-9edf40e125d0/dbr74uh-ce8fcd0e-8957-4f3d-bca2-0fe216ec5f72.jpg/v1/fill/w_1192,h_670,q_70,strp/volkswagen_combi_bus_wallpaper_by_rogue_rattlesnake_dbr74uh-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ0MCIsInBhdGgiOiJcL2ZcLzQ2MzViY2Q0LTRhMWQtNGU4My1iYmU0LTllZGY0MGUxMjVkMFwvZGJyNzR1aC1jZThmY2QwZS04OTU3LTRmM2QtYmNhMi0wZmUyMTZlYzVmNzIuanBnIiwid2lkdGgiOiI8PTI1NjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.T0nblTimgevgKl8kXIQLf4k414x4ox4Sdhdmrn9g15Y"
                alt="Third slide"
                />

                <Carousel.Caption>
                
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
    </>
       
    );
}

export default CarouselImg