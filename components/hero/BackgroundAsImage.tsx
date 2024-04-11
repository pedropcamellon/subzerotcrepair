import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

const Container = styled.div`
  ${tw`relative -mx-8 bg-center bg-cover`}
  background-image: url('/images/subzero3.jpg');
`

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-300 opacity-50`

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`
const LeftColumn = tw.div`flex flex-col items-center lg:block`
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-primary-900 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`

const SlantedBackground = styled.span`
  ${tw`relative text-primary-500 px-4 -mx-4 py-2`}
  &::before {
    content: '';
    ${tw`absolute inset-0 bg-gray-100 -z-10 rounded`}
  }
`

const PrimaryButton = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-900 font-black rounded shadow transition duration-300 hocus:bg-primary-900 hocus:text-gray-100 focus:shadow-outline`

export default function hero({
  phoneNumber = '(786) 543-9382',
  primaryButtonUrl = `tel:${phoneNumber}`,
  primaryButtonText = phoneNumber,
  buttonRounded = true,
}) {
  const buttonRoundedCss = buttonRounded && tw`rounded-2xl`

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <TwoColumn>
          <LeftColumn>
            <Heading>
              <SlantedBackground>
                Let Us Keep
                <br />
                Your Appliances Cool!
              </SlantedBackground>
            </Heading>

            <PrimaryButton
              as="a"
              href={primaryButtonUrl}
              css={buttonRoundedCss}
            >
              {primaryButtonText}
            </PrimaryButton>
          </LeftColumn>
          <RightColumn>{/* TODO: Empty */}</RightColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  )
}
