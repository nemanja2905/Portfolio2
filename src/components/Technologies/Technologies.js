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
                fontSize: "23px"
              }}
            >
              Expert In
            </span>{" "}
            <br />
            <p style={{margin: "0 0 20px 0"}}><br/>React.js <br /> React Native <br /> Next.js <br /> Gatsby.js <br/> Redux</p> 
            <p style={{margin: "20px 0"}}>JavaScript <br />TypeScript</p>
            <p style={{margin: "20px 0"}}>HTML<br /> CSS<br/> Bootstrap<br/> MUI<br/> TailwindCSS<br/> Styled Component <br/>Emotion Core<br/></p>
            <p style={{margin: "20px 0"}}>RESTful API <br />GraphQL</p>
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
            <span style={{ fontWeight: "bolder", fontStyle: "italic",fontSize: "23px"}}>
              Expert In
            </span>{" "}
            <p style={{padding:"0px"}}><br /> Node.js <br /> Express <br /> Laravel <br /> Contentful <br/> Prismic <br/> Strapi <br/> Keystone <br/>Netlify <br/>Heroku <br/>Vercel <br/>Digital Ocean</p>
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
            <span style={{ fontWeight: "bolder", fontStyle: "italic", fontSize: "23px" }}>
              Expert In
            </span>{" "}<br />
            <br />  MongoDB
            <br />  MySQL 
            <br/> PostgreSOL
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
            <ListTitle>Other</ListTitle>
            <ListParagraph>
              <span style={{ fontWeight: "bolder", fontStyle: "italic", fontSize: "23px" }}>
                Versed In
              </span>{" "}<br />
               <p style={{margin: "0 0 20px 0"}}>
                 <br/>    Docker
                 <br/> AWS
              <br />  Web3
              <br />  Solidity
              <br />  Truffle
              <br />  Smart Contract
              <br />  Dapp
               </p>
         
             
             
            </ListParagraph>
          </ListContainer>
      </ListItem>
      
    </List>
    
    <SectionDivider />
  </Section>
);

export default Technologies;
