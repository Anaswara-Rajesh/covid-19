import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import Header from './components/Header';

// import coronaImage from './images/images.jpg'

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country });

        //set the data

    }
    render() {
        const { data, country } = this.state;

        return (
            <div>
                <Header />

                <div className={styles.container}>
                    <Cards data={data} />

                    <CountryPicker handleCountryChange={this.handleCountryChange} />
                    <Chart data={data} country={country} />
                </div>
            </div>
        )
    }
}

export default App;