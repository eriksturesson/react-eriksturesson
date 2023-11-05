import CookieConsent from "react-cookie-consent";
import { getAnalytics } from "firebase/analytics";
import { app } from "./firebaseFunctions";

export default function CookieConsentBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      cookieName="standardCookies"
      style={{ background: "#2B373B" }}
      buttonStyle={{ background: "green", color: "white" }}
      expires={150}
      enableDeclineButton
      onDecline={() => {
        console.log("CookieConsentBanner.tsx: onDecline()");
      }}
      onAccept={(acceptedByScrolling) => {
        if (acceptedByScrolling) {
          // triggered if user scrolls past threshold
          //It does not feel valid to use analytics if user does not accept
          //const analytics = getAnalytics(app);
        } else {
          // triggered if user clicks accept button
          const analytics = getAnalytics(app);
          //TODO: Add analytics
        }
      }}
    >
      This website uses cookies to enhance the user experience.{" "}
    </CookieConsent>
  );
}
