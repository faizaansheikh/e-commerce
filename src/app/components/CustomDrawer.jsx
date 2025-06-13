'use client'
import React, { useState } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';
const CustomDrawer = (props) => {
    const {open,placement,onClose,content,title} = props
//   const [open, setOpen] = useState(false);
//   const [placement, setPlacement] = useState('left');
  // const showDrawer = () => {
  //   setOpen(true);
  // };
  // const onClose = () => {
  //   setOpen(false);
  // };
  const onChange = e => {
    setPlacement(e.target.value);
  };
  return (
    <>
      
      <Drawer
        title={title ? title : ''}
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        {content && content}
       
      </Drawer>
    </>
  );
};
export default CustomDrawer;