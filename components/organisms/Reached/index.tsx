import ReachedItem from "../../molecules/ReachedItem";

function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ReachedItem count="290M+" desc="Players Top Up" />
          <ReachedItem count="12.500" desc="Games Available" />
          <ReachedItem count="99,9%" desc="Happy Players" />
          <ReachedItem count="4.7" desc="Rating Worldwide" endItem />
        </div>
      </div>
    </section>
  );
}

export default Reached;
