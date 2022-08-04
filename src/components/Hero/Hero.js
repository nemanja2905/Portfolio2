import React, { Component, useEffect, useRef } from "react";
import { init } from "ityped";
import {
  Section,
  SectionText,
  SectionTitle,
  SectionText2,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Span, Span2 } from "./HeroStyles";

function Hero() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      typeSpeed: 120,
      backSpeed: 30,
      loop: true,
      strings: ["Front-End", "Back-End", "FullStack"],
    });
  }, []);
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
                    
          <Span>Nemanja Petrovic</Span> <br />
          Web Developer
          <Span2 style={{ marginLeft: "2rem" }} ref={textRef}></Span2>
        </SectionTitle>
        <SectionText2>
          I’m highly responsible and communicative so you can trust me with your project and I will provide you with the best, high-quality results, in a prompt manner and respecting the deadline. 
          <br />
        </SectionText2>
      </LeftSection>
    </Section>
  );
}

export default Hero;
