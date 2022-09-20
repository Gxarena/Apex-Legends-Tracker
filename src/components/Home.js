import React, {useState} from 'react'
import Axios from 'axios'
import Origin from '../assets/origin.png'
import Xbox from '../assets/xbox.png'
import PS from '../assets/ps.png'

const Home = () => {

    const [gamertag, setGamertag] = useState("");
    const [platform, setPlatform] = useState("");

    const [userName, setUserName] = useState("");
    const [activeLegendName, setActiveLegendName] = useState("");
    const [activeLegendIMG, setActiveLegendIMG] = useState("");
    const [userLevel, setUserLevel] = useState("");
    const [userAvatar, setUserAvatar] = useState("");

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
            console.log(activeLegendName);
            console.log(userLevel);
            setUserName(userName);
            setActiveLegendName(activeLegendName);
            setActiveLegendIMG(activeLegendIMG);
            setUserLevel(userLevel);
            setUserAvatar(userAvatar);
        }).catch((err) => {
            console.log(err)
        })
    };

  return (
    <div>
        <div className='grid gap-4 justify-items-center'>
            <p className='text-4xl'>Apex Legends Player Stat Tracker</p>
            <div>
                <div class="inline-flex rounded-md shadow-sm" role="group">
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
            </div>
            <div>
            <button onClick={fetchData} id='submit' type="button" class="font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-blue-600 hover:bg-blue-700 dark:focus:ring-blue-800 text-white">Submit</button>
            </div>
            
        </div>
        <p>{userName}</p>
        <img src={userAvatar}/>
        <p>{activeLegendName}</p>
        <img src={activeLegendIMG}/>
        <p>{userLevel}</p>
    </div>
  )
}

export default Home