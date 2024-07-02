import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
// Define los tipos adecuados para los parámetros
interface HandleClickProps {
  id: string;
  setActiveItem: (id: string) => void;
  setOpenNavigation: (open: boolean) => void;
}

// Implementa la función utilizando los tipos definidos
export const handleClick = ({
  id,
  setActiveItem,
  setOpenNavigation,
}: HandleClickProps) => {
  setActiveItem(id);
  enablePageScroll();
  setOpenNavigation(false);
};

export const useHeaderNavigation = () => {
  const [activeItem, setActiveItem] = useState<string | undefined>();
  const [openNavigation, setOpenNavigation] = useState(false);

  const handleNavigationClick = (id: string) => {
    handleClick({ id, setActiveItem, setOpenNavigation });
  };

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  return {
    activeItem,
    openNavigation,
    handleNavigationClick,
    toggleNavigation,
  };
};
