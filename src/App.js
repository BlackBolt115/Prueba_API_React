import DirectoryList from "ui/components/DirectoryList";
import axios from 'axios';
import './App.css';

export default function App() {
  var a = [];
  a.length = 10;
  a.fill("");
  const [list, setList] = useState(a);
  useEffect(()=>{
    const fetchOffersList = async () => {
      const response = await axios.get("https://e6di35qzm7.execute-api.us-west-2.amazonaws.com/latest/directory");
      setList(response.data.data);
    };
    fetchOffersList();
  }, [setList]);

    return (
        <div>

            <DirectoryList offerList={list} />
        </div>
    );
}
