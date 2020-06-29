/** @jsx jsx */
import { jsx, SxStyleProp, Flex } from "theme-ui";
import SearchIcon from "../../assets/icons/Search.svg";
import * as styles from "./Sidebar.styles";
export const Sidebar: React.FC = () => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        m: "md",
      }}
    >
      <Flex sx={styles.sidebarCss(true)}>
        <img src={SearchIcon} sx={{ mr: "sm", color: "indigo-200" }} /> Active
        Games
      </Flex>
      <Flex sx={styles.sidebarCss(false)}>
        <img src={SearchIcon} sx={{ mr: "sm", color: "indigo-200" }} /> How to Play
      </Flex>
      <Flex sx={styles.sidebarCss(false)}>
        <img src={SearchIcon} sx={{ mr: "sm", color: "indigo-200" }} /> Active
        Games
      </Flex>
    </Flex>
  );
};
