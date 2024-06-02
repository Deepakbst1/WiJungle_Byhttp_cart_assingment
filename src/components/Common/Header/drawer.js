import { useState } from 'react';
import { Link } from "react-router-dom";

import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import DarkMode from '../DarkMode';  

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>
        <MenuRoundedIcon className='link' />
      </Button>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className="drawer-div">
          <Link to="/"><p className="link">Home</p></Link>
          <Link to="/compare"><p className="link">Compare</p></Link>
          <DarkMode />
        </div>
      </Drawer>
    </div>
  );
}
