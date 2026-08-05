import logo from "./logo.png";
import Dictionary from "./Dictionary";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary defaultKeyword="sunset" />
      </main>
      <footer className="App-footer text-center">
        <small>Coded by <a href="https://www.shecodes.io/graduates/182572-khalea-mitchell" target="_blank" rel="noreferrer">Khalea Mitchell</a> and is open-sourced on <a href="https://github.com/KhaleaM/dictionary-search-engine" target="_blank" rel="noreferrer" >GitHub</a> and hosted on <a href="https://dictionary-search-engine-project.netlify.app" target="_blank" rel="noreferrer" >Netlify</a>.   </small>
      </footer>
    </div>
  );
}


