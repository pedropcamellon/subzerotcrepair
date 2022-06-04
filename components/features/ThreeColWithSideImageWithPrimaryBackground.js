import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "../misc/Headings.js";
import { SectionDescription } from "../misc/Typography.js";

import { BiBadgeCheck } from "react-icons/bi";
import { BiTimeFive } from "react-icons/bi";
import { BiBuildingHouse } from "react-icons/bi";
import { BsLightningCharge } from "react-icons/bs";
import { BiWrench } from "react-icons/bi";
import { BiSync } from "react-icons/bi";

const Container = tw.div`relative bg-primary-900 -mx-8 px-8 text-gray-100`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
// const Subheading = tw(SubheadingBase)`mb-4 text-gray-100`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center text-gray-300`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-xs`}
`;

const Card = styled.div`
  ${tw`flex flex-col items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${'' /* ${tw`bg-gray-100 text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    } */}
    ${tw`bg-gray-100 text-center rounded-full p-5 flex-shrink-0`}
    svg {
      ${tw`text-primary-800 text-lg`}
    }
  }

  .textContainer {
    ${tw`mt-6`}
  }

  .title {
    ${tw`tracking-wider font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-2 font-normal text-gray-400 leading-snug`}
  }
`;

export default ({
  cards = [],
  heading = "Amazing Features",
  // subheading = "",
  description = "Providing superior technical and customer service throughout many years has enabled us to gain the trust and credibility with our valuable customers."
}) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  cards = [
    {
      icon: <BiBadgeCheck />,
      title: "High Quality Service", 
      description: "Our experts are courteous and highly trained"
    },
    {
      icon: <BiTimeFive />,
      title: "24/7 Repair Service", 
      description: "We are always here to help. Do not doubt to call us if you have an emergency"
    },
    { 
      icon: <BiBuildingHouse />, 
      title: "Commercial and Residential",
      description: "We offer both commercial and residential service"
    },
    { 
      icon: <BsLightningCharge />, 
      title: "Fast",
      description: "We will get back to you quickly and then dispatch a technician to perform the repair"
    },
    { 
      icon: <BiWrench />, 
      title: "On-Site Repairs",
      description: "We will come to your location and provide courteous and friendly service"
    },
    { 
      icon: <BiSync />, 
      title: "Follow Up",
      description: "Our service department will gladly keep you well informed during every step of the repair or maintenance process"
    }
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        {/* {subheading && <Subheading>{subheading}</Subheading>} */}
        
        <Heading>{heading}</Heading>
        
        {description && <Description>{description}</Description>}
        
        <VerticalSpacer />
        
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                {card.icon}
              </span>
              <span className="textContainer">
                <span className="title">{card.title}</span>
                <p className="description">
                  {card.description}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
    </Container>
  );
};
