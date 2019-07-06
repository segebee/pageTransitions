import Highway from "@dogstudio/highway";
import Fade from "./transitions";

const H = new Highway.Core({
  transitions: {
    default: Fade
  }
});
