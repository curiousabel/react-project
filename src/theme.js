import { createMuiTheme } from '@material-ui/core/styles';
export default createMuiTheme({
typography: {
useNextVariants: true
},
palette:{"common":{"black":"#000","white":"#fff"},"background":{"paper":"#fff","default":"#fafafa"},"primary":{"light":"rgba(161, 169, 208, 1)","main":"rgba(14, 29, 109, 1)","dark":"rgba(2, 6, 28, 1)","contrastText":"#fff"},"secondary":{"light":"rgba(229, 48, 70, 1)","main":"rgba(208, 2, 27, 1)","dark":"#c51162","contrastText":"#fff"},"error":{"light":"#e57373","main":"rgba(208, 2, 27, 1)","dark":"rgba(85, 2, 2, 1)","contrastText":"#fff"},"text":{"primary":"rgba(0, 0, 0, 0.87)","secondary":"rgba(0, 0, 0, 0.54)","disabled":"rgba(0, 0, 0, 0.38)","hint":"rgba(0, 0, 0, 0.38)"}}}
);