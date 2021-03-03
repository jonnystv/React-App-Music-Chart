import React, { useEffect, useState } from 'react';
import ChartList from '../components/ChartList';
import Header from '../components/Header';

const ChartContainer = () => {

    const [topTwenty, setTopTwenty] = useState({});

    const getTopTwenty = () => {
        console.log("getting chartlist info")
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(data => setTopTwenty(data));
    }

    useEffect(() => {
        getTopTwenty();
    }, [])

    return (

        <>
        
            <Header />
            <ChartList topTwentyTunes={topTwentyTunes}/>
        
        </>

    )

}

export default ChartContainer