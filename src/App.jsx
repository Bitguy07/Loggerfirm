import { BrowserRouter } from 'react-router-dom';
import AuthWrapper from './Authentication/AuthWrapper';

const App = () => {
  return (
    <div className='h-screen w-screen flex flex-col '>
        <BrowserRouter basename="/Loggerfirm"> 
            <AuthWrapper />
        </BrowserRouter>
    </div>
  )
}

export default App;
