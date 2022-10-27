import logo from "./logo.svg";
import "./App.css";
import NavbarComponents from "./components/NavbarComponents";
import IndonesiaPages from "./pages/IndonesiaPages";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import ProgrammingPages from "./pages/ProgrammingPages";
import CovidPages from "./pages/CovidPages";
import SavedPages from "./pages/SavedPages";
import SearchPages from "./pages/SearchPages";
import SearchComponent from "./components/SearchComponent";
import LogoComponents from "./components/LogoComponents";
import { useDispatch, useSelector } from "react-redux";
import { updateQuery } from "./redux/SearchSlice";
import { fetchArticles } from "./redux/IndonesiaSlice";

function App() {
  const dispatch = useDispatch();
  const { query } = useSelector((state) => state.search);

  const navigate = useNavigate();
  const location = useLocation();

  const onChangeHandler = (e) => {
    if (e.target.value.length === 0) {
      dispatch(updateQuery(null));
    } else {
      dispatch(updateQuery(e.target.value));
    }
    console.log("encodeUri", encodeURIComponent(query));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (location.pathname !== `/search/${query}`) {
        navigate(`/search/${query}`);
      }
      dispatch(
        fetchArticles(
          `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=62c2fe52b16d4245ada0559d58042c3a&pageSize=50`
        )
      );
    }
  };
  return (
    <div className="App">
      {/* <header> */}
      <nav className="navbar navbar-expand-lg">
        <div class="container">
          <LogoComponents />
          <NavbarComponents />
          <SearchComponent onChange={onChangeHandler} onKeyDown={handleKeyDown}  />
        </div>
      </nav>
      {/* </header> */}
      <section>
        {/* <SearchPages /> */}
        <Routes>
          <Route path="/" element={<IndonesiaPages />} />
          <Route path="/Programming" element={<ProgrammingPages />} />
          <Route path="/Covid" element={<CovidPages />} />
          <Route path="/Saved" element={<SavedPages />} />
          <Route path={`/search/${query}`} element={<SearchPages keywords={query} />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
