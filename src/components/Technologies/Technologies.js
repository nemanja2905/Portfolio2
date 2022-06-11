import React from "react";
import { DiFirebase, DiReact, DiZend, DiNodejsSmall, DiBitbucket, DiTrello } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
  Btn3,
} from "../../styles/GlobalComponents";
import { CgChevronDoubleDownO } from "react-icons/cg";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";
import Link from "next/link";

const Technologies = () => (
  <Section id="tech">
    <Btn3>
      <Link href="#tech">
        <CgChevronDoubleDownO />
      </Link>
    </Btn3>
    <SectionDivider style={{ marginBottom: "3%" }} />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      My main stack is React.JS, I love it. But I am also proficient in and work
      with HTML/CSS. As for the back-end I am knowledgeable in Node.JS, Express, PHP and Laravel.
      Additionally, I am competent in API and NoSQL database (MongoDB).       
    </SectionText>
    <List>
      <ListItem>
        <DiReact
          style={{
            marginLeft: "14%",
          }}
          size="3rem"
        />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            <span
              style={{
                fontWeight: "bolder",
                fontStyle: "italic",
              }}
            >
              Experience with
            </span>{" "}
            <br />
            <br /> React.js <br /> React Native <br /> Next.js <br /> Gatsby.js <br /> HTML 5 <br /> CSS <br /> JavaScript <br />{" "}
            Redux
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejsSmall
          style={{
            marginLeft: "14%",
          }}
          size="3rem"
        />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            <span style={{ fontWeight: "bolder", fontStyle: "italic" }}>
              knowledgeable with
            </span>{" "}
            <br /> <br /> Node.js <br /> Express <br /> PHP <br /> Laravel <br /> API
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase
          style={{
            marginLeft: "14%",
          }}
          size="3rem"
        />
        <ListContainer>
          <ListTitle>DataBase</ListTitle>
          <ListParagraph>
            <span style={{ fontWeight: "bolder", fontStyle: "italic" }}>
              knowledgeable with
            </span>{" "}<br />
            <br />  MongoDB
            <br />  MySQL 
          </ListParagraph>
        </ListContainer>
        </ListItem>
        <ListItem>
          <DiTrello
            style={{
              marginLeft: "14%",
            }}
            size="3rem"
          />
          <ListContainer>
            <ListTitle>Blockchain</ListTitle>
            <ListParagraph>
              <span style={{ fontWeight: "bolder", fontStyle: "italic" }}>
                knowledgeable with
              </span>{" "}<br />
              <br />  Web3
              <br />  Solidity
              <br />  Truffle
              <br />  Smart Contract
              <br />  Dapp
            </ListParagraph>
          </ListContainer>
      </ListItem>
      
    </List>
    
    <SectionDivider />
  </Section>
);

export default Technologies;
