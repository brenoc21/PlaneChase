import { Flex, Layout, Modal, theme } from "antd";
import React, { useState, useEffect } from "react";
import CardDisplay from "../../components/Card";
import NavigationControls from "../../components/NavComponent";
import { fetchCards } from "../../services";
import { IeCircleFilled } from "@ant-design/icons";
import UtilityButtons from "../../components/UtilityButtons";
import { offCardChange, onCardBaseChange, onCardChange, onCurrentCardIndexChange, updateCardBase, updateCurrentCard, updateCurrentCardIndex } from "../../database/db";

const cardData = [];

function Home({ currentTheme, setCurrentTheme }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardBase, setCardBase] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const unsubscribeIndex = onCurrentCardIndexChange((newIndex) => {
    if (newIndex !== null && newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  });
  useEffect(() => {
    fetchCards()
      .then(({ data }) => {
        if(data.length === 0) {
        setCardBase(data);
        }
        // Update Firebase with initial card array
      })
      .catch((error) => {
        console.error(error);
      });

      const unsubscribeIndex = onCurrentCardIndexChange((newIndex) => {
        if (newIndex !== null && newIndex !== currentIndex) {
          setCurrentIndex(newIndex);
        }
      });
  
      const unsubscribeCardBase = onCardBaseChange((newCardBase) => {
        if (newCardBase) {
          setCardBase(newCardBase);
        }
      });
  
      // Return a cleanup function to unsubscribe from Firebase updates
      return () => {
        unsubscribeIndex();
        unsubscribeCardBase();
      };
  }, [currentIndex]);

  const shuffleCardBase = () => {
    let shuffledCards = [...cardBase];
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    }
    setCardBase(shuffledCards);
    updateCardBase(shuffledCards) 
  };

  const nextCard = () => {
    let newIndex = currentIndex + 1 >= cardBase.length ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    updateCurrentCardIndex(newIndex);
  };

  const previousCard = () => {
    let newIndex = currentIndex - 1 < 0 ? cardBase.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    updateCurrentCardIndex(newIndex);
  };
  const changeTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };
  const { colorBgBase } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
        backgroundColor: colorBgBase,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <UtilityButtons shuffle={shuffleCardBase} />
      <CardDisplay card={cardBase[currentIndex]} />

      <NavigationControls onNext={nextCard} onPrevious={previousCard} />
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </Layout>
  );
}

export default Home;
