import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaArrowRight, FaArrowLeft  } from "react-icons/fa";
import CarouselDisplay from "./CarouselDisplay";
import "./SecondPageCarousel.css"

export default function SpotlightCarousel({ CARDS }) {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "center",
        slidesToScroll: 1,
        containScroll: false,
    });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const slidesRef = useRef([]);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((index) => emblaApi?.scrollTo(index), [emblaApi])

    useEffect(()=>{
        if(!emblaApi) return;
        const onSelect = ()=>{
        setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        emblaApi.on("select", onSelect);
        onSelect(); //initial
        return () => emblaApi.off("select", onSelect);
    }, [emblaApi])

    return (
        <div className="flex gap-28 justify-center">
        <div className="spotlight-carousel">
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
            {CARDS.map((t, i) => {
                const total = CARDS.length;
                const leftIndex = (selectedIndex - 1 + total) % total;
                const rightIndex = (selectedIndex + 1) % total;
                
                const slideClass =
                i === selectedIndex? 
                "is-selected"
                : i === leftIndex || i === rightIndex? 
                "is-adjacent"
                : "is-hidden";
                return(
                    <div 
                    key={i} 
                    className={`embla__slide ${slideClass}`}
                    ref={(el)=>(slidesRef.current[i] = el)}
                    >
                        {/* image and text with styling */}
                        <CarouselDisplay {...t}/>
                    </div>
                )
                })}
            </div>
        </div>
        <div className="carousel-buttons">
            <button onClick={scrollNext} className="nav-arrow next"><FaArrowRight className="arrow" /></button>
            <button onClick={scrollPrev} className="nav-arrow prev"><FaArrowLeft className="arrow"/></button>
        </div>
        </div>
        </div>
    );
}
