import React, { useState, useEffect, useRef } from "react";
import { requestPage } from "../../services/request";

import HomeStepper from '../../components/homeStepper/HomeStepper';
import ImageBall from '../../components/imageBall/ImageBall';

import { InnerContainer, PageContainer } from './homePageStyles';

function Home() {
    const containerRef = useRef(null);
    const divRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
    const [opacities, setOpacities] = useState([1, 0, 0, 0, 0]);
    const [stepInfo, setStepInfo] = useState([]);

    const fetchData = async () => {
        try {
            const data = await requestPage();
            setStepInfo(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        // Get data
        fetchData();

        // Scrolling
        const handleScroll = () => {
            const containerRect = containerRef.current.getBoundingClientRect();
            const containerTop = containerRect.top;
            const containerBottom = containerRect.bottom;

            const newOpacities = divRefs.map((ref, index) => {
                const divRect = ref.current.getBoundingClientRect();
                const divTop = divRect.top;
                const divBottom = divRect.bottom;

                if (divBottom < containerTop || divTop > containerBottom) {
                    return 0;
                } else {
                    const opacity = 1 - (Math.abs(containerTop - divTop) / (0.8 * containerRect.height));
                    return opacity;
                }
            });

            setOpacities(newOpacities);
        }

        containerRef.current.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <PageContainer>
            <InnerContainer>
                <HomeStepper containerRef={containerRef} divRefs={divRefs} opacities={opacities} />
                {stepInfo?.map((entry, i) => {
                    return (
                        <ImageBall key={i} entry={entry} index={i} opacities={opacities} />
                    );
                })}
            </InnerContainer>
        </PageContainer>
    );
}

export default Home;