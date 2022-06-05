import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SectionHeading } from "./../misc/Headings.js";

import Image from 'next/image';

import SZFridgeImage from "./../../public/images/subzero_fridge.jpg";
import SZFreezerImage from "../../public/images/subzero_freezer.jpg";
import SZMarineImage from "../../public/images/subzero_yatch_5.jpg";
import SZWineCoolerImage from "../../public/images/wine_cooler_2.png";
import SZIceMakerImage from "../../public/images/subzero_icemaker.webp";


const Container = tw.div`relative`;
const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full text-primary-900`;
const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;
const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-primary-500 rounded-lg mt-12`}
  ${'' /* .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  } */}

  .imageContainer {
    ${tw`text-center p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-56 h-56`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-primary-500`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

// import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";
const DecoratorBlob = null;
// const DecoratorBlob = styled(SvgDecoratorBlob3)`
//   ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
// `;


export default function services() {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cards = [
    { imageSrc: SZFridgeImage, title: "SubZero Fridge Repair"},
    { imageSrc: SZFreezerImage, title: "SubZero Freezer Repair" },
    { imageSrc: SZMarineImage, title: "SubZero Marine Repair" },
    { imageSrc: SZWineCoolerImage, title: "SubZero Wine Cooler Repair" },
    { imageSrc: SZIceMakerImage, title: "SubZero Ice Maker Repair" },
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>Our Professional Services</Heading>
        
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <Image
                  src={card.imageSrc} // Route of the image file
                  height={224} // Desired size with correct aspect ratio
                  width={224} // Desired size with correct aspect ratio
                  alt={card.title}
                />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                
                {/* TODO */}
                
                {/* <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel."}
                </p> */}
                
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      {/* <DecoratorBlob /> */}
    </Container>
  );
};
