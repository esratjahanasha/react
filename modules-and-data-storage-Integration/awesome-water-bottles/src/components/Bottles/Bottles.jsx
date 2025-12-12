import React, { use } from 'react';
import Bottle from '../Bottle/Bottle';


const Bottles = ({bottlePromise}) => {
    const bottleslist=use(bottlePromise);
    console.log("dd",bottleslist);
    return (
        <div>{
            bottleslist.map(bottle => <Bottle bottle={bottle={bottle}}></Bottle>)
        }
        </div>
    );
};

export default Bottles;