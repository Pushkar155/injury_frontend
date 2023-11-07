import {useState,useEffect} from 'react'
import "./reports.scss";
import Report_card from './report_card/Report_card';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';


const Reports = () => {
  const [reportData, setReportData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    // Define your fetch function here
    const fetchReportData = async () => {
      setIsLoading(true);

      try {
        // Make a GET request to your API endpoint
        const response = await fetch('https://injury-tracking-backend.vercel.app/api/user/getData'); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setReportData(data);
        // console.log(data)
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching report data:', error);
        setIsLoading(false);
      }
    };

    // Call the fetch function when the component mounts
    fetchReportData();
  }, []);

  useEffect(() => {
    // Filter the data based on searchText
    const filtered = reportData.filter((report) =>
      (report.name && report.name.toLowerCase().includes(searchText.toLowerCase())) ||
      (report.date && report.date.toLowerCase().includes(searchText.toLowerCase()))
    );
    setFilteredData(filtered);
  }, [searchText, reportData]);

  return (
    <div className='reports'>
      <div className="report_search">
        <SearchRoundedIcon className='icon' />
        <input
          type="text"
          placeholder='Search'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {isLoading ? (
        <p>Loading...</p> // You can use a better loading indicator here
      ) : (
        filteredData.map((report, index) => (
          <Report_card
            key={index}
            name={report.name}
            date={report.date}
            id1={report._id}
            data={report.data}
          />
        ))
      )}
    </div>
  );
}

export default Reports;