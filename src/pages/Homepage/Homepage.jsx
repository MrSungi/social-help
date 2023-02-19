import React from "react";
import Theme from "../../components/Theme/Theme";
import PageLayout from "../../components/PageLayout/PageLayout";

import themesData from "../../static/data.json";
// import { MDBContainer } from "mdb-react-ui-kit";

const Homepage = () => {
  return (
    <PageLayout>
      {themesData.map((theme) => (
        <Theme
          key={theme.id}
          // image={theme.image}
          text={theme.text}
          help={theme.help}
        />
      ))}
    </PageLayout>
  );
};
export default Homepage;
