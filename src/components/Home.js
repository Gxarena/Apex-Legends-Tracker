import React, {useState} from 'react'
import Axios from 'axios'
import Origin from '../assets/origin.png'
import Xbox from '../assets/xbox.png'
import PS from '../assets/ps.png'
import ApexIMG from '../assets/apex-background.jpg'

const Home = () => {

    const [gamertag, setGamertag] = useState("");
    const [platform, setPlatform] = useState("");

    const [userName, setUserName] = useState("");
    const [activeLegendName, setActiveLegendName] = useState("");
    const [activeLegendIMG, setActiveLegendIMG] = useState("");
    const [userLevel, setUserLevel] = useState("");
    const [userAvatar, setUserAvatar] = useState("");
    const [legendKills, setLegendKills] = useState("");
    const [killPercent, setKillPercent] = useState("");


    const fetchData = () => {
        Axios.get(`https://public-api.tracker.gg/v2/apex/standard/profile/${platform}/${gamertag}`, 
        { headers: {'content-type': 'application/json', 'TRN-Api-Key': 'be7e45ac-9925-4c67-a402-1d12d2e6d99a'}}
        ).then((res) =>{
            console.log(res)
            
            const userName = res.data.data.platformInfo.platformUserHandle;
            const activeLegendName = res.data.data.metadata.activeLegendName;
            const activeLegendIMG = res.data.data.segments[1].metadata.imageUrl;
            const userLevel = res.data.data.segments[0].stats.level.rank;
            const userAvatar = res.data.data.platformInfo.avatarUrl;
            const legendKills = res.data.data.segments[1].stats.kills.rank;
            const killPercent = res.data.data.segments[1].stats.kills.percentile;

            setUserName(userName);
            setActiveLegendName(activeLegendName);
            setActiveLegendIMG(activeLegendIMG);
            setUserLevel(userLevel);
            setUserAvatar(userAvatar);
            setLegendKills(legendKills);
            setKillPercent(killPercent);

        }).catch((err) => {
            console.log(err)
        })
    };

  return (
    <div className=''>
        <div className='my-[25%] container w-[75%] mx-auto rounded-md bg-blue-100 border-2 border-black '>
        <p className='text-4xl px-4 py-4 text-center'>Apex Legends Player Stat Tracker</p>
            <div className='py-2 space-y-2 flex flex-col items-center'>
                <div className="inline-flex rounded-md shadow-sm" role="group">
                    <button onClick={(event) => {setPlatform('origin')}} type="button" class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    <img src={Origin} alt='origin logo' style={{width: '30px'}} />
                    </button>
                    <button onClick={(event) => {setPlatform('xbl')}} type="button" class="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    <img src={Xbox} alt='xbox logo' style={{width: '30px'}} />
                    </button>
                    <button onClick={(event) => {setPlatform('psn')}} type="button" class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    <img src={PS} alt='ps logo' style={{width: '30px'}} />
                    </button>
                </div>
            <input onChange={(event) => {setGamertag(event.target.value);}} type="text" id="gamertag" class="text-sm rounded-lg  block w-half p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white" placeholder="Enter Gamertag" required />
            <button onClick={fetchData} id='submit' type="button" className="font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-blue-600 hover:bg-blue-700 dark:focus:ring-blue-800 text-white">Submit</button>
            </div>
        </div>
        {/* Container For fetched info*/}

        <img src={userAvatar} alt='userAvatar logo' className='w-[10%] h-[10%] mx-auto'/>
        <p className='my-4 border-2 border-transparent border-b-black w-[200px] mx-auto text-bold text-4xl text-center uppercase'>{userName}</p>

        <div className='py-2 grid grid-cols-2 items-center justify-center text-center border-2 border-black'>
            <p className='text-4xl border-transparent border-2 border-b-black w-[75%] mx-auto'> Active Legend: </p>
            <p className='text-4xl border-transparent border-2 border-b-black w-[35%] mx-auto'> Level: </p> 
            <p className='text-bold text-2xl'>{activeLegendName}</p>
            <p className='text-bold text-2xl'>{userLevel}</p>
            <img src={activeLegendIMG} alt='activeLegend img' className='w-[100%] h-[100%]'/>
            <p>Kills: </p>
            <p></p>
            <p>{legendKills} (Percentile: {killPercent}%)</p>
            
            
        </div>
    </div>
  )
}

export default Home