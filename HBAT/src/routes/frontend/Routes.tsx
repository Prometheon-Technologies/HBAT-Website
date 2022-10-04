import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AntxChatDesign01 from '../../pages/HbatDesign01';
import AntxChatDesign02 from '../../pages/HbatDesign02';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AntxChatDesign01 />} />
        <Route path="/home" element={<AntxChatDesign01 />} />
        <Route path="/white-papers" element={<AntxChatDesign02/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;