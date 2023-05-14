// import logo from './logo.svg';
import "./App.css";
import SignUp from "./common/form/SignUp/SignUp";

function App() {
  return (
    <div>
      <div className="app">
      <div
      className="main"
        style={{
          height: "100vh",
          display: "flex",
          justifyItems:"space-between",
          maxWidth: "980px",
          alignItems:"center",
          width: "100%",
        }}
      >
        <div className="left">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            width={300}
            height={100}
            className="img"
          />

          <p
            style={{
              fontSize: "24px",
              fontFamily: "helvetica,sans-serif",
              paddingLeft: "26px",
              paddingBottom: "20px",
            }}
          >
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>

        <div>
          <SignUp />
        </div>
      </div>
    </div>
      </div>
  );
}

export default App;

// fontSize:"20px",backgroundColor:"#1877F2",width:'364px'
