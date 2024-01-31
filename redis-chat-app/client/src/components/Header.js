/** @format */

import React from "react";
import styles from './styles.module.css'
import Avatar from 'react-avatar';
const Header = () => {
  return (
    <div>
      <div className={styles.senderNameWrapper}>
        <Avatar
          src="https://picsum.photos/id/1/200/300"
          name="Emma Watson"
          size={50}
          round
        />
        <h3 style={{ color: "white" ,marginLeft:10 }}>Dinna Marblemaw</h3>
      </div>
    </div>
  );
};

export default Header;
