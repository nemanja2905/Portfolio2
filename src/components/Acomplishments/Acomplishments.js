import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  {
    number: 2018,
    text: "Built my first react application",
  },
  { number: 2020, text: "Collaborated in developing 2 Frontend web applications" },
  {
    number: 2021,
    text: "Created Mobile REsponsive User Experince",
  },
  { number: 2022, text: "Partnered to develop first web3 Dapp" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
