import { makeStyles } from '@mui/styles'
import theme from '../../theme'

const useStyles = makeStyles({
    boxFriends: {
        overflowY: 'hidden', height: '90vh',
        [theme.breakpoints.down('md')]: {
            height: '10vh',
            overflowY:'hidden',
            overflowX: 'scroll'
        },
        '&:hover': {
            // overflowY: 'scroll !important'
          }
    },
    boxOnlineCars: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down('md')]:{
            height: '100%',
            width:'100%',
            flexDirection: 'row',
            justifyContent:'flex-start'
        }
    }
})

export default useStyles