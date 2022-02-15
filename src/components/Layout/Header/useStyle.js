import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  header: {
    height: 56,
    borderBottom: '2px solid #3360AD',
    backgroundColor: '#fff',
  },
  MuiToolbar: {
    minHeight: 'auto',
    height: 56,
  },
  MuiToolbarGutters: {
    paddingLeft: 64,
    paddingRight: 64,
  },
  logo: {
    '&::before': {
      display: 'none',
    },
    '& img': {
      width: 130,
      display: 'block',
    },
  },
  menuButton: {
    color: '#1E3966',
  },
  search: {
    display: 'flex',
    flexDirection: 'row',
    boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.08)',
    '& .MuiInputBase-root': {
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#CED4DF',
      },
    },
    '& .MuiInputBase-input': {
      height: 32,
      padding: '0 12px 0 12px',
      fontWeight: 600,
      fontSize: '12px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderRadius: '4px 0 0 4px',
      borderRight: 'none',
      borderColor: '#CED4DF',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#CED4DF',
      borderWidth: 1,
    },
    '& .MuiButton-root': {
      borderRadius: '0 4px 4px 0',
      boxShadow: 'none',
    },
  },
  profileButton: {
    whiteSpace: 'nowrap',
    fontWeight: 600,
    fontSize: '12px',
    lineHeight: '20px',

    color: '#2D3543',
    '& svg': {
      marginRight: 8,
    },
  },
  profilePaper: {
    minWidth: 237,
    borderRadius: '8px 0 8px 8px',
  },
  profileList: {
    paddingTop: 0,
    '& .profile-title': {
      height: 64,
      background: 'rgba(30, 57, 102, 0.03)',
      display: 'flex',
      alignItems: 'center',
      padding: 24,
      fontWeight: 800,
      fontSize: 16,
      lineHeight: '24px',
      color: '#2D3543',
      position: 'relative',
      '&::before': {
        content: '""',
        display: 'block',
        width: 4,
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#3360AD',
        borderRadius: '8px 0px 0px 8px',
      },
    },
    '& a': {
      color: 'currentColor',
      display: 'flex',
      alignItems: 'center',
      flexGrow: 1,
      height: 36,
      '&::before': {
        display: 'none',
      },
    },
  },
  chemistryPaper: {
    minWidth: 237,
  },
  chemistryList: {
    paddingBottom: 0,
    '& .create-lab': {
      backgroundColor: 'rgba(30, 57, 102, 0.03)',
    },
  },
}));
