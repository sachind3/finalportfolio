"use client";
import { useTheme } from "next-themes";

const ThemeIcon = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <>
      <div
        id="thememode"
        role="button"
        tabIndex="0"
        onKeyDown={toggleTheme}
        onClick={toggleTheme}
      >
        <div className="thememode_icon">
          <span className="ray"></span>
          <span className="ray"></span>
          <span className="ray"></span>
          <span className="ray"></span>
          <span className="ray"></span>
          <span className="ray"></span>
          <span className="ray"></span>
          <span className="ray"></span>
        </div>
      </div>
    </>
  );
};
export default ThemeIcon;
