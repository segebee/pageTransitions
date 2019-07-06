import Highway from "@dogstudio/highway";
import { TimelineLite } from "gsap";

class Fade extends Highway.Transition {
  in({ from, to, done }) {
    const tl = new TimelineLite();
    // tl.fromTo(to, 1, { left: "-100%", top: "100%" }, { left: "0%" })
    tl.fromTo(to, 0.5, { top: "100%" }, { top: "10%" })
      .fromTo(
        to,
        0.5,
        { height: "0vh" },
        {
          height: "90vh",
          top: "10%",
          onComplete: function() {
            from.remove();
            done();
          }
        }
      )
      .fromTo(to.children[0], 0.5, { opacity: 0 }, { opacity: 1 });
  }
  out({ from, to, done }) {
    done();
  }
}

export default Fade;
