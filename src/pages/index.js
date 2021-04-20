const { default: LandingPage } = require("./LandingPage");
const { default: Navigation } = require("../components/navigation");



function Index() {
    return <div>
        <Navigation />
        <LandingPage />
    </div>
  }
  
  export default Index
//ReactDOM.render(<Login />, document.getElementById('root'));