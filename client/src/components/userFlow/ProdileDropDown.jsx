import React from 'react';
import { Button, Menu, MenuItem, Avatar, ListItemIcon, Typography, Divider } from '@mui/material';
import { AccountCircle, Settings, Logout } from '@mui/icons-material';
import img from '../../assets/users/images/avatars/avatar_5.jpg'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setuserLogin } from '../../redux/SideBar/sideBarSlice';

export default function ProfileDropDown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSingOut = () => {
    navigate("/");
    sessionStorage.removeItem('UserLogin');
    localStorage.removeItem('UserId');
    dispatch(setuserLogin())
    handleClose();
    
  }

  return (
    <header className="flex h-20 w-full  items-center px-2 md:px-2">
      <div className="ml-auto flex gap-2">
       
         <button onClick={handleClick}>
            <div className="avatar">
            <div className="h-8 w-8 rounded-full">
                <img src={img} />
            </div>
            </div>
          <span className="sr-only">Toggle user menu</span>
          </button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            sx: {
              width: 250,
              py: 2,
            },
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <Typography variant="h6" component="div" sx={{ px: 2, py: 1 }}>
            John Doe
          </Typography>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <AccountCircle fontSize="small" />
            </ListItemIcon>
            Profile
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleSingOut} sx={{ color: 'red' }}>
            <ListItemIcon>
              <Logout fontSize="small" sx={{ color: 'red' }} />
            </ListItemIcon>
            Sign Out
          </MenuItem>
        </Menu>
      </div>
    </header>
  );
}
