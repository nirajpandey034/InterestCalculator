import React from "react";
import { CFooter, CLink } from "@coreui/react";

function Footer() {
  return (
    <CFooter style={{position: 'fixed', bottom: 0}}>
      <div>
        <CLink href="https://kasamoke.com" target="_blank">Kasamoke</CLink>
        <span>&copy; 2018 kasamoke</span>
      </div>
      <div>
        <span>Powered by </span>
        <CLink href="https://kasamoke.com" target="_blank">Kasamoke</CLink>
      </div>
    </CFooter>
  );
}

export default Footer;
