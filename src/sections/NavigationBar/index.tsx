import { useEffect, useState } from "react";
import "./index.css";

import { getRoot } from "../../util";
import { useChatContext } from "../ChattingSection/context";

const availableNav = [
  { name: "Members", id: "section-members" },
  { name: "Events", id: "section-events" },
  { name: "Gallery", id: "section-gallery" },
  { name: "FAQ", id: "section-faq" },
];

export default function NavigationBar() {
  const { setShowChat } = useChatContext();

  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const root = getRoot();

    function handleScroll() {
      if (!root) return;

      if (root.scrollTop > window.innerHeight - 250) {
        setOpacity(1);
      } else {
        setOpacity(0);
      }
    }

    root?.addEventListener("scroll", handleScroll);

    return () => {
      root?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="dft-nav-bar"
      style={{
        boxShadow: opacity
          ? "#32325d40 0px 2px 5px -1px, #603b3b4d 0px 1px 3px -1px"
          : "",
      }}
    >
      <img src={window.location.origin + "/logo.svg"} className="logo" />

      <div className="flex flexing spbtw" style={{ height: "100%" }}>
        <div
          className="logo-banner flex jcctr coll"
          style={{ opacity, transition: "opacity 0.2s" }}
        >
          <h1>Google Development Group</h1>
          <div className="flex aictr g10">
            <span style={{ color: "var(--gg-blue)" }}>On Campus</span>
            <span>&bull;</span>
            <span>FPT University HCMC</span>
          </div>
        </div>

        <div className="opts flex aictr testing-opts">
          {availableNav.map((a) => {
            return (
              <div
                className="opt center"
                key={a.id}
                onClick={() => {
                  const target = document.getElementById(a.id);
                  if (!target) return;

                  const off = target.offsetTop;
                  getRoot()?.scrollTo({ top: off - 120, behavior: "smooth" });
                }}
              >
                {a.name}
              </div>
            );
          })}

          <div className="opt center" onClick={() => setShowChat(true)}>
            <img src={window.location.origin + "/assist.png"} width={40} />
          </div>
        </div>
      </div>
    </div>
  );
}
