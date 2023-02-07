const useGoUp =
  (y = 0) =>
  () => {
    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

export default useGoUp;
