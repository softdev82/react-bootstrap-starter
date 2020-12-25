import {Helmet} from "react-helmet";
import Header from '../components/Header'

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
      <Header pageTitle='Landing'/>
    </div>
  )
}

export default HomePage
