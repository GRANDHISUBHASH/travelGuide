import {Component} from 'react'
import Loader from 'react-loader-spinner'
import EachTravelListCard from '../EachTravelListCard'

import './index.css'

class TravelGuideApp extends Component {
  state = {
    ListOfTrvel: [],
    isLoading: false,
  }

  componentDidMount() {
    this.getingData()
  }

  getingData = async () => {
    const apiUrl = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(apiUrl)
    if (response.ok) {
      const Data = await response.json()
      this.setState({ListOfTrvel: Data.packages, isLoading: true})
    }
  }

  render() {
    const {ListOfTrvel, isLoading} = this.state

    console.log(ListOfTrvel)
    return (
      <div className="Developer">
        <h1>Travel Guide</h1>
        <div>
          {isLoading ? (
            <ul>
              {ListOfTrvel.map(eachItem => (
                <EachTravelListCard eachItem={eachItem} key={eachItem.id} />
              ))}
            </ul>
          ) : (
            <div data-testid="loader">
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default TravelGuideApp
