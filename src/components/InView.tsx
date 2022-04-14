import { InView } from "react-intersection-observer";

function Component() {
  return (
    <InView triggerOnce={true}>
      {({ inView, ref, entry }) => (
        <div ref={ref}>
          <h2
            style={{ color: "#fff" }}
          >{`Header inside viewport ${inView}.`}</h2>
        </div>
      )}
    </InView>
  );
}

export default Component;
