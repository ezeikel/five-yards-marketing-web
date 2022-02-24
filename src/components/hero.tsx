import { useState } from "react";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GenericModal from "./modals/GenericModal/genericModal";
import SignupForm from "./forms/SignUpForm/signupForm";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = async () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="lg:grid lg:grid-cols-12 lg:gap-8 pb-16 sm:pb-24 lg:pb-32">
        <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
          <h1>
            <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
              Coming soon
            </span>
            <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
              <span className="block text-gray-900">Traditional wear.</span>
              <span className="block text-[#1C77C3]">
                An untraditional approach.
              </span>
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Discover how easy it can be to wear traditional without breaking the
            bank or your head. Find inspiration, fabrics and tailors right at
            your fingertips and manage the whole process effortlessly on one
            platform.
          </p>
          <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
            <p className="text-base font-medium text-gray-900">
              Sign up to get notified when it’s ready.
            </p>
            <SignupForm openModal={openModal} />
            <p className="mt-3 text-sm text-gray-500">
              We care about the protection of your data. Read our &nbsp;
              <a href="#" className="font-medium text-gray-900 underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
        <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
          <div className="aspect-w-16 aspect-h-9 w-full">
            <iframe
              src="https://www.youtube.com/embed/KSwiOUnSKxA"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <GenericModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        heading="Join the waitlisy"
        contentLabel=""
        close={closeModal}
      >
        <div>
          <div>Welcome to the Tribe!</div>
          <p>
            You are now on the waitlist. We'd really appreciate if you could
            spread the word
          </p>
          <ul>
            <li className="twitter">
              <OutboundLink
                href="http://twitter.com/share?text=I just became part of the @fiveyardsapp tribe. You should join too! - &url=https://get.fiveyards.app&hashtags=fiveyards,africantailor,africanfabric"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={["fab", "twitter"]}
                  color="var(--color-white)"
                  size="lg"
                />
                Twitter
              </OutboundLink>
            </li>
            <li className="facebook">
              <OutboundLink
                href="https://www.facebook.com/sharer/sharer.php?u=https://get.fiveyards.app"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={["fab", "facebook-f"]}
                  color="var(--color-white)"
                  size="lg"
                />
                Facebook
              </OutboundLink>
            </li>
            <li className="whatsapp">
              <OutboundLink
                href="whatsapp://send?text=I just became part of the Five Yards tribe. You should join too! https://get.fiveyards.app"
                data-action="share/whatsapp/share"
              >
                <FontAwesomeIcon
                  icon={["fab", "whatsapp"]}
                  color="var(--color-white)"
                  size="lg"
                />
                WhatsApp
              </OutboundLink>
            </li>
          </ul>
        </div>
      </GenericModal>
    </>
  );
};

export default Hero;
