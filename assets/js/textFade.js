// banner.js

window.onload = () => {
    // Animation Timelines
    let animationA = gsap.timeline();
    let animationB = gsap.timeline()
    let animationC = gsap.timeline();

    // Select Elements
    const Title = document.querySelector(".title");
    const SubTitle = document.querySelector(".subtitle");
    const Button = document.querySelectorAll(".buttons");

    // Text Arrays
    const textA = ["HYPNOTIC", "TECH", "LIQUID", "EUPHORIC", "MELODIC", "MINIMAL", "NEURO", "GOA PSY", "DARK", "DEEP", "FUNKY", "PROGRESSIVE", "DRIVING", "ACID", "INTELLIGENT", "VOCAL" ];
    const textB = ["TECHNO", "HOUSE", "DRUM&BASS", "TRANCE"];
    let textIndexA = 0;
    let textIndexB = 0;

    // Button
    animationC.fromTo(Button,
        { x: "0px", opacity: 0 },
        { x: "0px", opacity: 1, stagger: 0, duration: 2 },
        "+=0"
    );

    mainLoop();

    // Fade Animation
    function mainLoop() {
        animationA.fromTo(Title,
            { x: "0px", opacity: 0 },
            { x: "0px", opacity: 1, stagger: 0, duration: 2.5 },
            "+=0"
        );
        animationA.to(Title,
            { y: "0px", opacity: 0, stagger: 0, duration: 1.5, onComplete: textLoopA },
            "+=0"
        );
        animationB.fromTo(SubTitle,
            { x: "0px", opacity: 0 },
            { x: "0px", opacity: 1, stagger: 1, duration: 2.5 },
            "+=0.5"
        );
        animationB.to(SubTitle,
            { y: "0px", opacity: 0, stagger: 1, duration: 1.5, onComplete: textLoopB },
            "+=0"
        );

        // Repeat Animation
        animationB.eventCallback("onComplete", () => {
            gsap.delayedCall(0.5, mainLoop);
        });
    }

    function textLoopA() {
        textIndexA = (textIndexA + 1) % textA.length;
        Title.textContent = textA[textIndexA];
    }

    function textLoopB() {
        textIndexB = (textIndexB + 1) % textB.length;
        SubTitle.textContent = textB[textIndexB];
    }


};