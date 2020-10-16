/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import React, { useState, useCallback } from "react";
// import logo from "../assets/images/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { connect, join } from "../store/player/actions";
import { State } from "../store";
import { RouteComponentProps } from "react-router";
import { Apiclient } from "../api/api";
import CoffeeIcon from "../assets/icons/Coffee.svg";
import * as styles from "./Lobby.styles";
import { Sidebar } from "../components/sidebar/Sidebar";
import { Game } from "./Game";

export const Lobby: React.FC<RouteComponentProps<{ code: string }>> = (
  props
) => {
  const [name, setName] = useState("test");
  //const [code, setCode] = useState("");
  const code = props.match.params.code;
  const dispatch = useDispatch();

  const game = useSelector((store: State) => store.game);
  const player = useSelector((store: State) => store.player);

  const createAndConnect = async () => {
    var createLobbyCommand = {};
    //var response = await Apiclient.createLobby(createLobbyCommand);
    dispatch(connect(name));
  };

  const joinGame = async () => {
    dispatch(join(code));
  };

  const startGame = async () => {
    Apiclient.startLobby({ code: props.match.params.code });
  };

  console.log(game.players);

  const remaining = 8 - game.players.length;
  const [inProp, setInProp] = useState(true);
  const disconnectPlayer = useCallback(() => {
    //dispatch(removePlayer())
    console.log("sdf");
  }, []);
  return (
    <Flex sx={{ flexDirection: "column", height: "100%" }}>
      <Flex sx={styles.header}>
        <img src={CoffeeIcon} sx={{ mr: "xs" }} alt="Logo"/>
        <div>Onitama</div>
      </Flex>
      <Flex sx={{ flex: 1 }}>
        <Sidebar />
        <Flex
          sx={{
            flex: 1,
            flexDirection: "column",
          }}
        >
          {/* <Flex
            sx={{
              backgroundColor: "white",
              borderRadius: "soft",
              m: "xl",
              p: "xl",
            }}
          >
            <div
              sx={{
                borderRadius: "circle",
                backgroundColor: "charcoal-25",
                p: "md",
              }}
            >
              DC
            </div>
            <div>Example Candidiate New</div>
          </Flex> */}
          <Game />
        </Flex>
      </Flex>
    </Flex>
  );
};

{
  /* <CSSTransition in={!inProp} timeout={0} classNames="t" unmountOnExit>
<div sx={styles.landingScreen.actions}>
  <Button onClick={() => setInProp(true)}> play </Button>
  <Button onClick={() => setInProp(false)}> how to play </Button>
</div>
</CSSTransition>
<CSSTransition in={inProp} timeout={0} classNames="" unmountOnExit>
<React.Fragment>
  <div sx={styles.landingScreen.input}>
    <label className="label">code</label>
    <Input value={code} />
    <label className="label">name</label>
    <Input value={name} onChange={(e) => setName(e.target.value)} />
    <Button secondary onClick={joinGame} disabled={code === ""}>
      Join
    </Button>
    {!code && <Button onClick={createAndConnect}>Create</Button>}
  </div>
</React.Fragment>
</CSSTransition> */
}

{
  /* <i className="fas fa-circle" sx={styles.indicatorCss} />{" "}
{player.name}
</div>
<div sx={styles.closeCss}>
<i className="fas fa-times" onClick={disconnectPlayer} /> */
}
