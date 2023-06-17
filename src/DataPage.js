import "./App.css";

export default function DataPage(props) {
  return (
    <div className="app">
      <div className="mainTable">
        <div className="table-row">Username: {props.data.username}</div>
        <div className="table-row">Email: {props.data.email}</div>
        <div className="table-row">Bithday: {props.data.birthday}</div>
      </div>
    </div>
  );
}
