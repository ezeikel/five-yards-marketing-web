import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SubscriptionSuccessfulModal = ({ isOpen, closeModal }) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div>
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <CheckIcon
                    className="h-6 w-6 text-green-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-medium text-gray-900"
                  >
                    Welcome to the Tribe 🥳
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 mb-8">
                      You are now on the waitlist. We'd really appreciate if you
                      could spread the word
                    </p>
                    <ul className="space-x-6 flex justify-center">
                      <li className="twitter">
                        <OutboundLink
                          href="http://twitter.com/share?text=I just became part of the @fiveyardsapp tribe. You should join too! - &url=https://get.fiveyards.app&hashtags=fiveyards,africantailor,africanfabric"
                          target="_blank"
                        >
                          <FontAwesomeIcon
                            icon={["fab", "twitter"]}
                            className="text-[#1DA1F2]"
                            size="2x"
                          />
                        </OutboundLink>
                      </li>
                      <li className="facebook">
                        <OutboundLink
                          href="https://www.facebook.com/sharer/sharer.php?u=https://get.fiveyards.app"
                          target="_blank"
                        >
                          <FontAwesomeIcon
                            icon={["fab", "facebook-f"]}
                            size="2x"
                            className="text-[#4267B2]"
                          />
                        </OutboundLink>
                      </li>
                      <li className="whatsapp">
                        <OutboundLink
                          href="whatsapp://send?text=I just became part of the Five Yards tribe. You should join too! https://get.fiveyards.app"
                          data-action="share/whatsapp/share"
                        >
                          <FontAwesomeIcon
                            icon={["fab", "whatsapp"]}
                            size="2x"
                            className="text-[#25D366]"
                          />
                        </OutboundLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                  onClick={() => closeModal()}
                >
                  Close
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default SubscriptionSuccessfulModal;
