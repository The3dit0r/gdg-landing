import { useEffect, useState } from "react";
import MainLogo from "../components/MainLogo";
import AboutUs from "./AboutUs";

export default function MainSection() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const root = document.getElementById("root");
    if (!root) return;

    function handleScroll() {
      setScroll(root?.scrollTop || 0);
    }

    root.addEventListener("scroll", handleScroll);

    return () => {
      root.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="section"
      style={
        {
          height: "300%",

          "--scroll": scroll,
          "--height": window.innerHeight,
        } as any
      }
    >
      <div className="flex jcctr" style={{ marginTop: 60 }}>
        <div className="main-banner"></div>
      </div>
      <div style={{ height: 64 }} className="flex jcctr aiend">
        WELCOME TO
      </div>
      <MainLogo showShadow={scroll > 600} />
      <div style={{ height: 120 }}></div>

      <AboutUs />
    </div>
  );
}
