import React from "react";
import PropTypes from "prop-types";

import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import PanelHeaderBack from "@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack";

import bronzeBox from "../icons/bronzeBox.svg";
import "./Persik.css";

const Persik = (props) => (
  <Panel id={props.id}>
    <PanelHeader left={<PanelHeaderBack onClick={props.go} data-to="home" />}>
      Persik
    </PanelHeader>
    <img className="Persik" img={bronzeBox} alt="Persik The Cat" />
    <img className="Persik" img={bronzeBox} alt="Persik The Cat" />
    <img className="Persik" img={bronzeBox} alt="Persik The Cat" />
    <img className="Persik" img={bronzeBox} alt="Persik The Cat" />
    <img className="Persik" img={bronzeBox} alt="Persik The Cat" />
  </Panel>
);

Persik.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Persik;
