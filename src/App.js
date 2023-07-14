import { useEffect, useState } from "react";
import TopSection from "./components/TopSection";
import Footer from "./components/Footer"
import MiddleSection2 from "./components/MiddleSection2"
import MiddleSection from "./components/MiddleSection";
import FloatingApply from "./components/FloatingApply";


function App() {
  const [showApply, setShowApply] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > window.innerHeight / 1.5) {
        setShowApply(true);
      } else {
        setShowApply(false);
      }
    };
    document.addEventListener("scroll", listener);

    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <>
      <TopSection />
      <MiddleSection/>
      <MiddleSection2 />
      <Footer />
      <FloatingApply visible={showApply} />
    </>
  );
}

export default App;
