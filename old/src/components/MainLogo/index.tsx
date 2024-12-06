import "./index.css";

export default function MainLogo({ showShadow }: { showShadow?: boolean }) {
  const clssArr = ["dft-main-logo flex aictr"];
  if (showShadow) {
    clssArr.push("show-shadow");
  }

  return (
    <div className={clssArr.join(" ")}>
      <div className="img left"></div>
      <div className="text flex aictr coll">
        <div>Google Developer Groups</div>
        <div className="flex aictr subtext" style={{ gap: 8 }}>
          <div style={{ color: "#4185f4" }}>On Campus</div>
          <div>&bull;</div>
          <div>FPT University HCMC</div>
        </div>
      </div>
      <div className="img right"></div>
      <div className="status-bar"></div>
    </div>
  );
}
