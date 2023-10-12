import './styles/App.css';
import Body from './views/Body';
import ThemeProvider from './views/ThemeContext';
export default function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Body style={{height: "100%"}}>
          </Body>
      </ThemeProvider>
    </div>
  );
}