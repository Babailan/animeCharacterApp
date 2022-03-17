import axios from "axios";

const Index = () => {
  return <div className="parent"></div>;
};

export async function getServerSideProps(context: object) {
  const data = await axios.get("", {
    params: {
      //
    },
  });
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Index;
