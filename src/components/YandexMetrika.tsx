"use client";
import { useEffect } from "react";
import Script from "next/script";
import Image from "next/image";

const YandexMetrika = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.ym = window.ym || function (...args: any) {
        (window.ym.a = window.ym.a || []).push(args);
      };
      window.ym(100420905, "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
      });
    }
  }, []);

  return (
    <>
      <Script
        id="yandex-metrika"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(m, e, t, r, i, k, a) {
              m[i] = m[i] || function(...args) {
                (m[i].a = m[i].a || []).push(args);
              };
              m[i].l = 1 * new Date();
              k = e.createElement(t), a = e.getElementsByTagName(t)[0];
              k.async = 1, k.src = r, a.parentNode.insertBefore(k, a);
            })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
            
            ym(100420905, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });
          `,
        }}
      />
      <noscript>
        <div>
          <Image
            src="https://mc.yandex.ru/watch/100420905"
            alt="Yandex Metrika"
            width={1}
            height={1}
            style={{ position: "absolute", left: "-9999px" }}
          />
        </div>
      </noscript>
    </>
  );
};

export default YandexMetrika;
