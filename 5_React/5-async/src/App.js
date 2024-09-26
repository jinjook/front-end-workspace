import { getFetchThen, getAwait } from "./api/movie";
import { useEffect, useState } from "react";
// app component를 호출하는 순간 list 보이게

const App = () => {
  const [data, setData] = useState([]); // 초기값 빈배열
  
  const loadFetchThen = () => {
    getFetchThen().then((result) => {
      setData(result);
    }); 
  }

  const loadAwait = async() => {
    const result = await getAwait();
    setData(result);
  };

  useEffect(() => {
    //loadFetchThen();
    loadAwait();
  }, []);

  return (
    <>
    {/* primary key 걸어야함*/}
      {data.map((movie) => (
        <div key={movie.id}>
          <h1>{movie.title}</h1>
          <h2>{movie.genre}</h2>
          <p>{movie.actor}</p>
        </div>
      ))}
    </>
  );
};
export default App;