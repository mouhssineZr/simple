/**
=========================================================
* Example - v2.1.0
=========================================================

* 
* 



 =========================================================

* 
*/

// Example base styles
import borders from "assets/theme/base/borders";

// Example helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { borderRadius } = borders;

export default {
  styleOverrides: {
    root: {
      display: "block",
      padding: `${pxToRem(16)} ${pxToRem(16)} 0  ${pxToRem(16)}`,
      borderRadius: `${borderRadius.xl} ${borderRadius.xl} 0 0`,
    },
  },
};
