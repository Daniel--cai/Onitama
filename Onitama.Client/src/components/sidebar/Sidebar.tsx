/** @jsx jsx */
import { jsx, SxStyleProp, Flex } from "theme-ui";
import SearchIcon from "../../assets/icons/Search.svg";
import * as styles from "./Sidebar.styles";
import { Card } from "../card-list/Card";
import { Cards } from "../../constants/Card";
import { Table } from "../../components/table";
export const Sidebar: React.FC = () => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        m: "md",
      }}
    >
      <Flex sx={styles.sidebarCss(true)}>
        <img src={SearchIcon} sx={{ mr: "sm" }} /> Play
      </Flex>
      <Flex sx={styles.sidebarCss(false)}>
        <img src={SearchIcon} sx={{ mr: "sm" }} /> Learn
      </Flex>
      <Flex sx={styles.sidebarCss(false)}>
        <img src={SearchIcon} sx={{ mr: "sm" }} /> Watch
      </Flex>
      <Table />
    </Flex>
  );
};
