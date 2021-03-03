import React from 'react';
import Tune from './Tune';

const ChartList = ({topTwenty}) => {

    const topTwentyTunes = topTwenty.map((tune) => {
        return (
            <Tune tune={tune} key={tune.id} />
        )
    })

    return (

        <>
        
            <h3>Chart List Title</h3>
            <ul>

                {topTwentyTunes}

            </ul>
        
        </>

    )

}

export default ChartList