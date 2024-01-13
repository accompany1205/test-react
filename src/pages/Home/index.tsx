import React, { useState, useEffect, useContext } from "react";
import Banner from "./components/Banner";
import Modal from "./components/Modal";

const Home: React.FC<{}> = () => {

  const [isBannerShow, setIsBannerShow] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsBannerShow(true);
    }, 10000)
  }, []);

  return (
    <div className="w-full min-h-screen bg-[url('/images/background.jpg')] bg-[length:100%_100%] bg-no-repeat">
      <Banner />
      <Modal />
    </div>
  );
};

export default Home;
