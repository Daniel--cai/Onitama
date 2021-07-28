/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
// import SearchIcon from "../../assets/icons/Search.svg";
import * as styles from "./Sidebar.styles";
import { Table } from "../../../components/dixit/table";
export const Sidebar: React.FC = () => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        m: "md",
      }}
    >
      <Flex sx={styles.sidebarCss(true)}>
        {/* <img src={SearchIcon} sx={{ mr: "sm" }} alt="Play" /> Play */}
      </Flex>
      <Flex sx={styles.sidebarCss(false)}>
        {/* <img src={SearchIcon} sx={{ mr: "sm" }} alt="Learn" /> Learn */}
      </Flex>
      <Flex sx={styles.sidebarCss(false)}>
        {/* <img src={SearchIcon} sx={{ mr: "sm" }} alt="Watch" /> Watch */}
      </Flex>
      <Table />
    </Flex>
  );
};
