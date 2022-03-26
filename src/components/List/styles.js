import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        marginBottom: '30px',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    loading: {
        height: '600px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        padding: '25px',
    },
    marginBottom: {
        marginBottom: '30px',
    },
    list: {
        height: '75vh',
        overflow: 'auto',
    },
    select: {
        '&:before': {
            borderColor: 'white',
        },
        '&:after': {
            borderColor: 'white',
        },
        '&:not(.Mui-disabled):hover::before': {
            borderColor: 'white',
        },
    },
    icon: {
        fill: 'white',
    },
    root: {
        color: 'white',
    },
    label: {
        color: 'white',
    },
}));