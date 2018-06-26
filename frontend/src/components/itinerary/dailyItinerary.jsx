import React, { Component } from 'react';
import ItineraryIndexItem from './itineraryIndexItem';

class DailyItinerary extends Component {
  render () {
    return (
      <div className="daily-itinerary">
        <div className="daily-heading">Day {this.props.day}</div>
            <ItineraryIndexItem name={"Tsukiji fish market"}
            time={"6:00 AM"}
            description={"Sprawling wholesale fish market with an array of seafood & viewing areas for a popular tuna auction."}
            location={"5 Chome-2-1 Tsukiji, Chūō, Tokyo 104-0045, Japan"}
            phone={"+81 3-3542-1111"}/>

            <ItineraryIndexItem name={"Tokyo Tower"}
            time={"11:00 AM"}
            description={"A communications and observation tower in the Shiba-koen district of Minato, Tokyo, Japan."}
            location={"4 Chome-2-8 Shibakoen, Minato, Tokyo 105-0011, Japan"}
            phone="1-800-tokyo-tower"/>

            <ItineraryIndexItem name={"Nadeshiko Tea House"}
            time={"2:00 PM"}
            description={"20-minute Japanese tea ceremony."}
            location={"2nd floor at Panda Café Chanoka, 2-7-24-2F Asakusa Taito-ku Tokyo"}
            phone="+81-3-3842-8756"/>

            <ItineraryIndexItem name={"SHIBUYA109 Shopping"}
            time={"5:00 PM"}
            description={"Shibuya 109 is a 10-floor fashion shopping mall loaded with mini-shops where you can buy trendy clothes, extravagant accessories, branded make-up and beauty paraphernalia, and hard-to-find stylish shoes and boots of the latest trend in Tokyo. It is one of those high-rise iconic buildings you will see upon stepping in Shibuya’s grounds, and is almost considered as a tourist attraction in Tokyo. "}
            location={"2 Chome-29-1 Dogenzaka, 渋谷区 Tokyo 150-0043, Japan"}
            phone="+81 3-3477-5111"/>
      </div>
    )
  }
}

export default DailyItinerary;
