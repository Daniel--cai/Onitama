/** @jsx jsx */
import { jsx, SxStyleProp } from "theme-ui";
import React from "react";
import * as styles from "./Table.styles";
import { Cards } from "../../constants/Card";
import { Card } from "../card-list/Card";

interface TableProps {}

export const trCss: SxStyleProp = {
  border: "solid 1px",
  borderColor: "charcoal-10",
};

export const Table: React.FC<TableProps> = () => {
  return (
    <div sx={{ backgroundColor: "white", variant: "cards.normal" }}>
      <table
        sx={{
          borderCollapse: "collapse",
          "tr:nth-child(even)": { backgroundColor: "white" },
          "tr:nth-child(odd)": { backgroundColor: "violet-5" },
          borderColor: "charcoal-10",
          border: "solid 1px",
          width: "100%",
        }}
      >
        <tbody>
          <tr sx={trCss}>
            <td>
              <Card
                card={Cards[2]}
                onClick={() => {}}
                active={false}
                disabled={false}
                player={false}
                size="small"
              />
            </td>
            <td>
              <div sx={styles.blue}>a2 - a4</div>
            </td>
            <td>
              <div sx={styles.red}>b1 - b3</div>
            </td>
          </tr>
          <tr sx={trCss}>
            <td>
              <Card
                card={Cards[2]}
                onClick={() => {}}
                active={false}
                disabled={false}
                player={false}
                size="small"
              />
            </td>
            <td>
              <div sx={styles.blue}>a2 - a4</div>
            </td>
            <td>
              <div sx={styles.red}>b1 - b3</div>
            </td>
          </tr>
          <tr sx={trCss}>
            <td>
              <Card
                card={Cards[2]}
                onClick={() => {}}
                active={false}
                disabled={false}
                player={false}
                size="small"
              />
            </td>
            <td>
              <div sx={styles.blue}>a2 - a4</div>
            </td>
            <td>
              <div sx={styles.red}>b1 - b3</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
