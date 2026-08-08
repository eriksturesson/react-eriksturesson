import { useEffect } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";

const COOKIE_NAME = "standardCookies";

function updateConsent(granted: boolean) {
  window.gtag?.("consent", "update", {
    ad_storage: granted ? "granted" : "denied",
    ad_user_data: granted ? "granted" : "denied",
    ad_personalization: granted ? "granted" : "denied",
    analytics_storage: granted ? "granted" : "denied",
  });
}

export default function CookieConsentBanner() {
  useEffect(() => {
    // Re-apply a previously stored choice on every load, since the banner
    // (and its onAccept handler) only renders once and won't fire again.
    const stored = getCookieConsentValue(COOKIE_NAME);
    if (stored === "true") {
      updateConsent(true);
    }
  }, []);

  return (
    <CookieConsent
      location="bottom"
      buttonText="Acceptera"
      declineButtonText="Neka"
      cookieName={COOKIE_NAME}
      style={{ background: "white", color: "black" }}
      buttonStyle={{ background: "green", color: "white" }}
      declineButtonStyle={{ background: "#555", color: "white" }}
      expires={150}
      enableDeclineButton
      onDecline={() => updateConsent(false)}
      onAccept={() => updateConsent(true)}
    >
      Den här sajten använder cookies via Google Tag Manager för besöksstatistik. Ingen spårning sker
      förrän du accepterar.
    </CookieConsent>
  );
}
