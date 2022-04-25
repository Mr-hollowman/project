import React, { useState } from 'react';
import { AlbumData } from './albumData';

function PageContent(props) {
    const[heading,setHeading]=useState('Trending');
    return (
        <div className='PageContent'>
            <div className='row'>
            <h2>{heading}</h2>
            <a>see all</a>
            </div>

            <div className='albums'>
                {AlbumData.map((item,index)=><div key={index} className='items'><img src={item.thumbnail} width='100%' style={{borderRadius:'10px'}}/> <p>{item.episodes.length +' Episodes'}</p><p>{item.albumName}</p><p>{item.artistName}</p></div>)}
            </div>
        </div>
    );
}

export default PageContent;