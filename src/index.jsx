import { createRoot } from 'react-dom/client';
//import { HomePage } from './pages/HomePage';
import { episodes } from './episodes';
import './global.css';
import { Episode } from './components/Episode';


const App = () => (
  <div className="container">
    <div className="episodes">
      {episodes.map((episode) => (
        <Episode
          key={episode.num}
          num={episode.num}
          title={episode.title}
          guest={episode.guest}
        />
      ))}
    </div>
  </div>
);

createRoot(
  document.querySelector('#app'),
).render(<App />);


