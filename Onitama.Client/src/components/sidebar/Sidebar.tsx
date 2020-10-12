/** @jsx jsx */
import { jsx, SxStyleProp, Flex } from "theme-ui";
import SearchIcon from "../../assets/icons/Search.svg";
import * as styles from "./Sidebar.styles";
import { Card } from "../card-list/Card";
import { Cards } from "../../constants/Card";

export const Sidebar: React.FC = () => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        m: "md",
      }}
    >
      <Flex sx={styles.sidebarCss(true)}>
        <img src={SearchIcon} sx={{ mr: "sm", color: "violet-75" }} /> Play
      </Flex>
      <Flex sx={styles.sidebarCss(false)}>
        <img src={SearchIcon} sx={{ mr: "sm", color: "violet-75" }} /> Learn
      </Flex>
      <Flex sx={styles.sidebarCss(false)}>
        <img src={SearchIcon} sx={{ mr: "sm", color: "violet-75" }} /> Watch
      </Flex>

      <div
        sx={{
          display: "flex",
          width: "18rem",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "charcoal-25",
        }}
      >
        <Flex sx={styles.moveCss}>
          <Card
            card={Cards[2]}
            onClick={() => {}}
            active={false}
            disabled={false}
            player={false}
            size="small"
          />
          <div sx={styles.blue}>a2 - a4</div>
          <div sx={styles.red}>b1 - b3</div>
        </Flex>
        <Flex sx={styles.moveCss}>
          <Card
            card={Cards[2]}
            onClick={() => {}}
            active={false}
            disabled={false}
            player={false}
            size="small"
          />
          <div sx={styles.blue}>a2 - a4</div>
          <div sx={styles.red}>b1 - b3</div>
        </Flex>
      </div>
    </Flex>
  );
};
