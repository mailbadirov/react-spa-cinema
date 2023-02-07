import { useEffect, useState } from "react";

const useMobileScreenMatch = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator?.userAgent ?? "";

    const isMobile = !!userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    );

    setIsMobile(isMobile);
  }, []);

  return isMobile;
};

export default useMobileScreenMatch;
