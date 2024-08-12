import { useEffect, useRef } from "react";

import { videos } from "../../constants";

import {
  StartVideoContainer,
  VideoTextBox,
  VideoTextBoxParagraph,
  VideoTextBoxTitle,
  VisitStoreContainer,
  VisitStoreLinkContainer,
  VisitShopLinkContainer,
  VisitStoreLinkTextContainer,
  VisitStoreArrowContainer,
} from "./StartVideo.styles";

const StartVideo = () => {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <StartVideoContainer>
      <video
        className="bg-vid"
        playsInline
        loop
        muted
        alt="MultiStore Demo Video"
        src={videos.startVideoBg}
        ref={videoEl}
      />

      <VideoTextBox>
        <VideoTextBoxTitle>MultiStore-24 Exclusive Deal</VideoTextBoxTitle>
        <VideoTextBoxParagraph>
          MultiStore Exclusive Deal Discover the epitome of style with
          MultiStore Exclusives. Elevate your wardrobe with premium brands,
          where luxury meets fashion. Immerse yourself in a world of
          unparalleled elegance. Explore now!
        </VideoTextBoxParagraph>

        <VisitStoreContainer>
          <VisitStoreLinkContainer to="/store">
            <VisitStoreLinkTextContainer>
              Visit Design Store
            </VisitStoreLinkTextContainer>
            <VisitStoreArrowContainer>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                color="rgb(255, 255, 255)"
              >
                <path d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"></path>
              </svg>
            </VisitStoreArrowContainer>
          </VisitStoreLinkContainer>
        </VisitStoreContainer>
        <VisitStoreContainer>
          <VisitShopLinkContainer to="/shop">
            <VisitStoreLinkTextContainer>
              Visit Design Shop
            </VisitStoreLinkTextContainer>
            <VisitStoreArrowContainer>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                color="rgb(255, 255, 255)"
              >
                <path d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"></path>
              </svg>
            </VisitStoreArrowContainer>
          </VisitShopLinkContainer>
        </VisitStoreContainer>
      </VideoTextBox>
    </StartVideoContainer>
  );
};

export default StartVideo;
