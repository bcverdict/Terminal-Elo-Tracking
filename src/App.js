import './App.css';
import Body from './Body';
import ThemeProvider from './ThemeContext';
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