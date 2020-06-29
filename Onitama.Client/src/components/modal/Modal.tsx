/** @jsx jsx */
import { jsx, SxStyleProp, Flex } from "theme-ui";
import React, { useState } from "react";
import * as styles from "./Modal.styles";
import { Button } from "../button";
import image from "../../assets/images/2.svg";
import { Input } from "../input/Input";
export const Modal: React.FC = () => {
  const [name, setName] = useState("");
  return (
    <Flex sx={styles.modalWrapperCss}>
      <div sx={styles.modalCss}>
        <img src={image} sx={{ mb: "md" }} />
        <div sx={{ variant: "text.heading2", mb: "md" }}>
          Looks like you are new here!
        </div>
        <div sx={{ mb: "md" }}>Tell us how you want others to see you</div>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mb: "md" }}
          placeholder="Name"
        />
        <Button sx={{ mb: "md" }}>Enter</Button>
      </div>
    </Flex>
  );
};
