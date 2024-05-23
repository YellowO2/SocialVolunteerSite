import DisplayCard from "../components/display_card";
import SearchBar from "../components/search_bar";

//for actual, we would fetch this data from backend
const mockPostDataList = [
  {
    id: 1,
    title: "Butt Cleanup",
    description: "Join us for a Butt cleanup event!",
    image: "https://via.placeholder.com/150",
    upvotes: 0,
  },
  {
    id: 2,
    title: "Cock Restoration",
    description: "Help us restore the local cock!",
    image: "https://via.placeholder.com/150",
    upvotes: 10,
  },
  {
    id: 69,
    title: "Cock Restoration",
    description: "Help us restoring the local cock!",
    image: "https://via.placeholder.com/150",
    upvotes: 69,
  },
  {
    id: "gaygay",
    title: "Cock Restoration",
    description: "Help us restoring the local cock!",
    image: "https://via.placeholder.com/150",
    upvotes: 11,
  },
  {
    id: "rithwik",
    title: "Cock Restoration",
    description: "Help us restoring the local cock!",
    image: "https://via.placeholder.com/150",
    upvotes: 0,
  },
];

const Home = () => {
  return (
    <>
      <header className="bg-dark py-5 header-bg">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Find Your People</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              And suck together
            </p>
          </div>
        </div>
      </header>

      <SearchBar />

      <section className="py-2">
        <div className="container px-2 px-lg-3 mt-4">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {mockPostDataList.map((postData) => (
              //or replace key with index
              <DisplayCard key={postData.id} postData={postData} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
