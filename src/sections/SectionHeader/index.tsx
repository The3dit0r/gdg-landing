import "./index.css";
type Props = {};

export default function SectionHeader({}: Props) {
  return (
    <div className="section" style={{ marginTop: 64 }}>
      <div className="full flex jcctr spbtw" style={{ gap: 64 }}>
        <div
          style={{
            backgroundImage: `url('${window.location.origin}/banner.webp')`,
          }}
          className="header-banner"
        ></div>

        <div className="flexing flex coll spbtw">
          <h1>
            <div style={{ fontSize: 60, color: "var(--gg-red)" }}>About us</div>
            GDGoC - FPTU HCMC
          </h1>

          <p
            style={{
              textAlign: "justify",
              color: "var(--accent)",
            }}
          >
            Google Developer Groups (GDG) on Campus FPT University HCMC are tech
            student community groups at FPT University Ho Chi Minh City who are
            interested in Google developer technologies. We often build
            playgrounds for tech students based on learning Google's
            technologies and applying them to create useful products for the
            community with the following orientation.
          </p>
        </div>
      </div>
    </div>
  );
}
