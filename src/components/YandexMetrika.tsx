import { useEffect } from "react";

const YandexMetrika = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://mc.yandex.ru/metrika/tag.js";
    document.head.appendChild(script);

    script.onload = () => {
      if (window.ym) {
        window.ym(100420905, "init", {
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true,
        });
      }
    };

    return () => {
      // Cleanup script on component unmount
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/100420905"
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
};

export default YandexMetrika;
