import { useState } from "react";
import "./index.css";
import Icon from "../../components/Icon";

const images = [
  "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,h_500,q_auto:good,w_500/v1/gcs/platform-data-goog/chapter_photos/Copy%2520of%25201_7rb6hY2.png",
  "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,h_500,q_auto:good,w_500/v1/gcs/platform-data-goog/chapter_photos/Copy%2520of%25204_LBI8aIa.png",
  "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,h_500,q_auto:good,w_500/v1/gcs/platform-data-goog/chapter_photos/Copy%2520of%25205_tlTtyCT.png",
  "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,h_500,q_auto:good,w_500/v1/gcs/platform-data-goog/chapter_photos/Copy%2520of%25208_r7rneAI.png",
  "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,h_500,q_auto:good,w_500/v1/gcs/platform-data-goog/chapter_photos/Copy%2520of%25203_ZXutMXi.png",
  "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,h_500,q_auto:good,w_500/v1/gcs/platform-data-goog/chapter_photos/Copy%2520of%252014_OAMtHzm.png",
  "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,h_500,q_auto:good,w_500/v1/gcs/platform-data-goog/chapter_photos/Copy%2520of%25206_xFPxuOa.png",
  "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,h_500,q_auto:good,w_500/v1/gcs/platform-data-goog/chapter_photos/Copy%2520of%252011_MkPYwH2.png",
  "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,h_500,q_auto:good,w_500/v1/gcs/platform-data-goog/chapter_photos/Copy%2520of%25209_b3FXrFB.png",
  "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,h_500,q_auto:good,w_500/v1/gcs/platform-data-goog/chapter_photos/Copy%2520of%252015_8P8rzRc.png",
  "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,h_500,q_auto:good,w_500/v1/gcs/platform-data-goog/chapter_photos/17_gFkBVjT.png",
  "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,h_500,q_auto:good,w_500/v1/gcs/platform-data-goog/chapter_photos/13_NWcKl8M.png",
];

export default function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showAll, setShowAll] = useState(false);

  function moveLeft(e: any) {
    e.stopPropagation();
    setCurrentIndex((i) => (i - 1 < 0 ? images.length - 1 : i - 1));
  }

  function moveRight(e: any) {
    e.stopPropagation();
    setCurrentIndex((i) => (i + 1 >= images.length ? 0 : i + 1));
  }

  return (
    <div className="img-gallery section">
      <div
        className="fade-in full-screen-view flex coll aictr jcctr g16"
        onClick={() => setShowOverlay(false)}
        style={{
          display: showOverlay ? "" : "none",
        }}
      >
        <img
          src={images[currentIndex]}
          style={{ height: "calc(100% - 120px)" }}
        />
        <div className="flex aictr g10">
          <div className="btt flex aictr jcctr" onClick={moveLeft}>
            <Icon name="arrow_left" />
          </div>
          <div style={{ backgroundColor: "#fff", padding: 9 }}>
            Image {currentIndex + 1} / {images.length}
          </div>
          <div className="btt flex aictr jcctr" onClick={moveRight}>
            <Icon name="arrow_right" />
          </div>
        </div>
      </div>

      <h1
        style={{ fontSize: 45, textAlign: "center", color: "var(--gg-yellow)" }}
        id="section-gallery"
      >
        Gallery
      </h1>

      <div
        className="image-grid"
        style={{
          gridTemplateRows: showAll ? "" : "1fr" + " 0".repeat(10),
          rowGap: showAll ? "" : 0,
        }}
      >
        {images.map((a, i) => (
          <img
            src={a}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onClick={() => {
              setCurrentIndex(i);
              setShowOverlay(true);
            }}
            key={i}
          />
        ))}
      </div>

      <div className="flex jcctr" style={{ padding: 32 }}>
        <div
          className="btt"
          onClick={() => {
            setShowAll(!showAll);
          }}
        >
          {showAll ? "Show Less Images" : "Show All Images"}
        </div>
      </div>
    </div>
  );
}
