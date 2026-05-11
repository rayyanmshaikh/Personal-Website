import { useEffect, useState } from "react";

function useModalState() {
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveItem(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeItem ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeItem]);

  return {
    activeItem,
    setActiveItem,
    closeModal: () => setActiveItem(null),
  };
}

export default useModalState;
