import Axios from 'axios';

const fetchData = () => Axios.get('https://storage.googleapis.com/bulb-interview/meterReadingsReal.json');

export default fetchData;
