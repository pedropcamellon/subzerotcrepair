import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, 
  // Subheading as SubheadingBase 
} from "./../../components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "./../../components/misc/Buttons.js";

// import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
// import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
// import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";

import { BiHdd } from "react-icons/bi";
import { BiBriefcaseAlt2 } from "react-icons/bi";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.img(props => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Heading = tw(
  SectionHeading
)`mt-4 font-black text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight text-primary-900`;
const Description = tw.p`mt-8 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Features = tw.div`mx-auto md:mx-0 flex flex-col lg:flex-row max-w-xs lg:max-w-none`;
const Feature = tw.div`mt-10 lg:mt-8 flex flex-1 items-center md:items-start flex-col md:mr-8 last:mr-0`;

const FeatureHeadingContainer = tw.div`flex items-center`;
const FeatureIconContainer = styled.div`
  ${tw`mx-auto inline-block border border-primary-500 text-primary-500 text-center rounded p-2 flex-shrink-0`}
  ${props => [
    props.iconRoundedFull && tw`rounded-full`,
    props.iconFilled && tw`border-0 bg-primary-500 text-gray-100`
  ]}
  svg {
    ${tw`w-5 h-5`}
  }
`;
const FeatureHeading = tw.div`ml-3 font-bold text-xl text-primary-500`;

const FeatureDescription = tw.div`mt-4 text-center md:text-left text-gray-600 leading-relaxed`;

const PrimaryButton = styled(PrimaryButtonBase)(props => [
  tw`mt-12 text-sm inline-block mx-auto md:mx-0 bg-primary-900`,
  props.buttonRounded && tw`rounded-full`
]);

export default function whoWeAre({
  heading = (
    <>
      We Are a Team of Experienced Professionals
    </>
  ),
  description = "We are a refrigerator service company specialized in SubZero Refrigerators repair and maintenance. Providing superior technical and customer service throughout many years has enabled us to gain the trust and credibility with our valuable customers. We understand the critical importance of refrigerated storages for our clients, that’s why we strive to get your refrigerator up and running as quick as possible. We provide repair to all major SubZero appliances including fridges, freezers and wine coolers. We attend at both residential and commercial locations.",
  
  phoneNumber = "(786) 543-9382",
  primaryButtonUrl = `tel:${phoneNumber}`,
  primaryButtonText = phoneNumber,
  buttonRounded = true,
  
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  
  textOnLeft = true,
  
  iconRoundedFull = true,
  iconFilled = true,
  iconContainerCss = null
}) {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  /*
   * Change the features variable as you like, add or delete objects
   * `icon` must be a React SVG component. See how BriefcaseIcon is imported above. For a full list of available icons, see Feather Icons.
   */
  const features = [
    {
      Icon: <BiBriefcaseAlt2 />,
      title: "Professionalism",
      description: "All of our technicians have many years of experience, so you can rest easy knowing that your appliances are in capable hands and will surely restore your unit to normal.",
      iconContainerCss: tw`bg-teal-300 text-teal-800`
    },
    {
      Icon: <BiHdd />,
      title: "Genuine Parts",
      description: "At SubZero TC Repair we install genuine appliance parts to ensure that your appliance performs at an optimum level.",
      iconContainerCss: tw`bg-teal-300 text-red-800`
    }
  ];

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image 
            src='/images/subzero_technician.jpg' 
            alt="Subzero technician doing a repair task"
            imageBorder={imageBorder} 
            imageShadow={imageShadow} 
            imageRounded={imageRounded}     
          />
        </ImageColumn>

        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <Features>
              {features.map((feature, index) => (
                <Feature key={index}>
                  <FeatureHeadingContainer>
                    <FeatureIconContainer
                      iconFilled={iconFilled}
                      iconRoundedFull={iconRoundedFull}
                      css={feature.iconContainerCss || iconContainerCss}
                    >
                      {feature.Icon}
                    </FeatureIconContainer>
                    <FeatureHeading>{feature.title}</FeatureHeading>
                  </FeatureHeadingContainer>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </Feature>
              ))}
            </Features>

            <PrimaryButton buttonRounded={buttonRounded} as="a" href={primaryButtonUrl}>
              {primaryButtonText}
            </PrimaryButton>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
