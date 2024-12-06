import { useEffect, useState } from "react";
import { getRoot } from "../../util";
import Icon from "../Icon";
import "./index.css";

export default function NavToTop() {
  const [state, setState] = useState(false);

  useEffect(() => {
    const r = getRoot();

    function onScroll() {
      const scr = r?.scrollTop || 0;
      setState(scr > 100 ? true : false);
    }

    r?.addEventListener("scroll", onScroll);

    return () => {
      r?.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className="nav-to-top flex aictr jcctr clickable"
      style={{ transform: state ? "" : "scale(0)" }}
      onClick={() => {
        getRoot()?.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <Icon name="keyboard_arrow_up" color="#fff" />
    </div>
  );
}
