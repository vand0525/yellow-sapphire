import { useState, useRef } from 'react';

export function useCarousel() {

    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef<HTMLElement>(null);

    function goToSlide(index: number) {

        const carousel = carouselRef.current;
        if (!carousel) return;

        const card = carousel.children[index];
        if (!card) return;

        const position =
            card.getBoundingClientRect().left -
            carousel.children[0].getBoundingClientRect().left;

        carousel.scrollTo({
            left: position,
            behavior: 'smooth'
        });
    }

    function handleScroll() {

        const carousel = carouselRef.current;
        if (!carousel || !carousel.children.length) return;

        const cards = Array.from(carousel.children);
        const firstPosition = cards[0].getBoundingClientRect().left;

        let closestIndex = 0;
        let closestDistance = Infinity;

        cards.forEach((card, index) => {

            const position =
                card.getBoundingClientRect().left - firstPosition;

            const distance = Math.abs(
                position - carousel.scrollLeft
            );

            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        });

        setActiveIndex(closestIndex);
    }

    return {
        activeIndex,
        carouselRef,
        goToSlide,
        handleScroll
    };
}