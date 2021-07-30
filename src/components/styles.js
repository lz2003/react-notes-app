import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        height:120,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    sidebarTitle: {
        paddingBottom: 10
    },
    sidebar: {
        padding: 0,
        margin: 0,
        width: "100%",
    },
    grid: {
      width: '100vw',
      height: '100vh',
      spacing: 0,
      justify: 'space-around'
    },
    grid1: {
      backgroundColor: "#EFEFEF",
    },
    grid2: {
      backgroundColor: "#F8F8F8",
    },
    title: {
        padding: 20,
        width: "80%",
    },
});

export default useStyles;