import { useEffect } from "react";

function ScrollToTop() {
  useEffect(() => {
    //alert(props.position);
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export {ScrollToTop};