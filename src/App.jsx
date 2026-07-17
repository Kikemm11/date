import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Date from './routes/Date';
import Yes from './routes/Yes';

export default function App() {
  return (
    <Router basename="/date"> {/* Use the base path here */}
      <Routes>
        <Route path="/" element={<Date />} />
        <Route path="/yes" element={<Yes />} />
      </Routes>
    </Router>
  );
}