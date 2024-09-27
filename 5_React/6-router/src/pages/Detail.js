import { useParams, useSearchParams } from "react-router-dom";
// useParams : url에서 값을 가져옴
// useSearchParams : url뒤의 값들 가져오

const Detail = () => {
    //const params = useParams();
    const { id } = useParams();
    // console.log(params); -> path="/detail/:id"의 id값
    const [search, setSearch] = useSearchParams();
    const page = search.get("page");
    const keyword = search.get("keyword");
    
    return <h1>Detail {id} 페이지 : {page}, {keyword} </h1>
};
export default Detail;