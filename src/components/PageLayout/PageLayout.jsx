import React from "react";

function PageLayout({ children }) {
  return <div style={styles.pin_container}>{children}</div>;
}

const styles = {
  pin_container: {
    margin: 0,
    padding: 0,
    width: "100vw",
    height: "51vw",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 20vw)",
    gridAutoRows: "0.5vw",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    justifyContent: "center",
    backgroundColor: "rgb(182, 228, 255)",
  },
};

export default PageLayout;
