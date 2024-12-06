import NavToTop from "./components/NavToTop";
import EventList from "./sections/EventList";
import FAQsSection from "./sections/FAQsSection";
import ImageGallery from "./sections/ImageGallery";
import NavigationBar from "./sections/NavigationBar";
import SectionHeader from "./sections/SectionHeader";
import SloganPart from "./sections/SloganPart";
import TeamMembers from "./sections/TeamMembers";
import TestSection from "./sections/TestSection";
import TheFoooooooooter from "./sections/TheFooter";

function App() {
  return (
    <>
      <NavigationBar />
      <TestSection />
      <SectionHeader />
      <SloganPart />
      <TeamMembers />
      <EventList />
      <ImageGallery />
      <FAQsSection />
      <TheFoooooooooter />

      <div
        style={{
          position: "fixed",
          right: 60,
          bottom: 60,
        }}
      >
        <NavToTop />
      </div>
    </>
  );
}

export default App;
