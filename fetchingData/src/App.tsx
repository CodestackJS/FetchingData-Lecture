import AsyncAwait from "./Components/AsyncAwait"
import DeleteData from "./Components/DeleteData"
import FetchingAxios from "./Components/FetchingAxios"
import FetchingWFetch from "./Components/FetchingWFetch"
import LoadingIndicator from "./Components/LoadingIndicator"
import ProductList from "./Components/ProductList"
import UseEffectExamples from "./Components/UseEffectExamples"
import UseEffectExamples2 from "./Components/UseEffectExamples2"


const App = () => {

  // const [category, setCategory] = useState('')

  return (
    <>
        <h1 className="text-center">React Fetching Data Examples, Using Axios, services, Http,CRUD</h1>
        {/* <DeleteData/> */}
        <LoadingIndicator/>
        {/* <AsyncAwait/> */}
        {/* <FetchingWFetch/> */}
        {/* <FetchingAxios/> */}
        {/* <UseEffectExample/> */}
        {/* <UseEffectExample2/> */}
        {/* <ProductList category={category}/>
        <div>
          <select className="form-select" onChange={(e) => setCategory(e.target.value)} >
            <option value=""></option>
            <option value="Clothing">Clothing</option>
            <option value="Household">Household</option>
          </select>
        </div> */}
    </>
  )
}

export default App