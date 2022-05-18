import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

// import Header, { NavLink, NavLinks, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";

// const StyledHeader = styled(Header)`
//   ${tw`pt-8 max-w-none`}
//   ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
//     ${'' /* ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`} */}
//     ${tw`text-primary-900 hover:border-gray-300 hover:text-gray-300`}
//   }
//   ${NavToggle}.closed {
//     ${tw`text-gray-100 hover:text-primary-500`}
//   }
// `;

const Container = styled.div`
  ${tw`relative -mx-8 bg-center bg-cover`}
  background-image: url('/images/subzero3.jpg');
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-300 opacity-50`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-primary-900 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-primary-500 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 -z-10 rounded`}
  }
`;

// const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;

const PrimaryButton = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-900 font-black rounded shadow transition duration-300 hocus:bg-primary-900 hocus:text-gray-100 focus:shadow-outline`;

export default ({
  phoneNumber = "(786) 543-9382",
  primaryButtonUrl = `tel:${phoneNumber}`,
  primaryButtonText = phoneNumber,
  buttonRounded = true
}) => {
  const buttonRoundedCss = buttonRounded && tw`rounded-2xl`;
  // const navLinks = [
  //   <NavLinks key={1}>
  //     <NavLink href="#">
  //       About
  //     </NavLink>
      
  //     {/* TODO */}
  //     {/* <NavLink href="#">
  //       Blog
  //     </NavLink>
  //     <NavLink href="#">
  //     <NavLink href="#">
  //       Blog
  //     </NavLink> */}
      
  //     <NavLink href="#">
  //       Locations
  //     </NavLink>
  //     <NavLink href="#">
  //       Pricing
  //     </NavLink>
  //   </NavLinks>,
    // <NavLinks key={2}>
    //   <PrimaryLink href="/#">
    //     Call Us Now
    //   </PrimaryLink>
    // </NavLinks>
  // ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <TwoColumn>
          <LeftColumn>
            
            {/* <Notification>We have now launched operations in Europe.</Notification> */}
            
            <Heading>
              {/* <span>Are Your Refrigerator Getting Warmer?</span>
              <br />
              <SlantedBackground>Let Us Keep It Cool!</SlantedBackground> */}
              
              <SlantedBackground>
                Let Us Keep
                <br />
                Your Appliances Cool!
              </SlantedBackground>
            </Heading>
            
            {/* <PrimaryAction>Read Customer Stories</PrimaryAction> */}
            {/* <PrimaryAction>Call Us Now</PrimaryAction> */}
            {/* <PrimaryButton>(786) 543-9382</PrimaryButton> */}

            <PrimaryButton as="a" href={primaryButtonUrl} css={buttonRoundedCss}>
                {primaryButtonText}
            </PrimaryButton>
          </LeftColumn>
          <RightColumn>
            {/* TODO: Empty */}
          </RightColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
