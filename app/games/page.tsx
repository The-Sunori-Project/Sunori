import Header from '../modules/Header/Header'
import Card from '../modules/Card/Card'
import '../modules/imports.css'
export default function Games() {
  return (
    <div>
      <Header />
      <h1 className="pageTitle">Games</h1>
      <center>
        <Card />
      </center>
    </div>
  );
}
