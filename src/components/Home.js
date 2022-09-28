import React, {useState} from 'react'
import Axios from 'axios'
import Origin from '../assets/origin.png'
import Xbox from '../assets/xbox.png'
import PS from '../assets/ps.png'

const Home = () => {

    const [gamertag, setGamertag] = useState("");
    const [platform, setPlatform] = useState("");

    const [userFound, setUserFound] = useState(false);

    const [userName, setUserName] = useState("");
    const [activeLegendName, setActiveLegendName] = useState("");
    const [activeLegendIMG, setActiveLegendIMG] = useState("");
    const [userLevel, setUserLevel] = useState("");
    const [userAvatar, setUserAvatar] = useState("");
    const [legendKills, setLegendKills] = useState("");
    const [killPercent, setKillPercent] = useState("");
    const [legendDMG, setLegendDMG] = useState("");
    const [legendDMGPercent, setLegendDMGPercent] = useState("");

    const fetchData = () => {
        Axios.get(`https://public-api.tracker.gg/v2/apex/standard/profile/${platform}/${gamertag}`, 
        { headers: {'content-type': 'application/json', 'TRN-Api-Key': 'be7e45ac-9925-4c67-a402-1d12d2e6d99a'}}
        ).then((res) =>{
            setUserFound(!userFound);

            console.log(res)
            
            const userName = res.data.data.platformInfo.platformUserHandle;
            const activeLegendName = res.data.data.metadata.activeLegendName;
            const activeLegendIMG = res.data.data.segments[1].metadata.imageUrl;
            const userLevel = res.data.data.segments[0].stats.level.rank;
            const userAvatar = res.data.data.platformInfo.avatarUrl;
            const legendKills = res.data.data.segments[1].stats.kills.rank;
            const killPercent = res.data.data.segments[1].stats.kills.percentile;
            const legendDMG = res.data.data.segments[0].stats.damage.rank;
            const legendDMGPercent = res.data.data.segments[0].stats.damage.percentile;

            setUserName(userName);
            setActiveLegendName(activeLegendName);
            setActiveLegendIMG(activeLegendIMG);
            setUserLevel(userLevel);
            setUserAvatar(userAvatar);
            setLegendKills(legendKills);
            setKillPercent(killPercent);
            setLegendDMG(legendDMG);
            setLegendDMGPercent(legendDMGPercent);

        }).catch((err) => {
            console.log(err)
            
        })
    };

  return (
    <div className='bg-[image:url("https://images8.alphacoders.com/992/992724.png")] absolute w-full h-screen bg-no-repeat bg-contain'>
        <div className={userFound ? 'hidden' : ' container mx-auto rounded-md bg-black/60 border-2 border-black w-[50%] my-[10%] text-white'}>
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
            <input onChange={(event) => {setGamertag(event.target.value);}} type="text" id="gamertag" className="text-sm rounded-lg  block w-half p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white" placeholder="Enter Gamertag" required />
            <button onClick={fetchData} id='submit' type="button" className="border-2 border-black font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-blue-600 hover:bg-blue-700 dark:focus:ring-blue-800 text-white">Submit</button>
            </div>
        </div>
        {/* Container For fetched info*/}

        <div className={!userFound ? 'hidden' : ' text-white grid place-items-center h-screen'}>

        {/* Container Background*/}
        <div className='bg-black/80 font-[poppins] my-4 mx-auto border-2 w-[50%] border-black'>
            <div className='bg-[#374151]/60 bg-opacity:20 rounded-3xl border-black border-2 my-4 w-[80%] mx-auto flex'>
                <img src={userAvatar} alt='userAvatar logo' className='h-[10%] w-[10%] mx-4'/>
                <p className='my-auto w-[200px] mx-4 text-bold text-4xl text-center uppercase'>{userName}</p>
            </div>

            {/* Container Grids */}
            <div className='grid grid-cols-2 items-center justify-center'>  
                {/* Left Container */}
                <div className='flex items-center'>
                    <img src={activeLegendIMG} alt='activeLegend img' className=''/>
                </div>
                {/* Right Container */}
                <div className=''>
                    <div className='bg-[#374151]/60 bg-opacity:20 rounded-2xl border-black border-2 my-2 w-[80%] mx-auto'>
                        <p className='text-lg mx-4 pt-[3px] '> Selected Legend </p>
                        <p className='text-bold text-2xl pb-1 mx-4'>{activeLegendName}</p>
                    </div>
                    <div className='bg-[#374151]/60 bg-opacity:20 rounded-2xl border-black border-2 my-2 w-[80%] mx-auto'>
                        <p className='text-lg mx-4 pt-[3px]'> Account Level </p> 
                        <p className='text-bold text-2xl pb-1 mx-4'>{userLevel}</p>
                    </div>
                    <div className='bg-[#374151]/60 bg-opacity:20 rounded-2xl border-black border-2 my-2 w-[80%] mx-auto'>
                        <p className='text-lg mx-4 pt-[3px]'>Kills: </p>
                        <p className='text-bold text-2xl pb-1 mx-4'>{legendKills} <span className='text-lg text-[#9ca3af]'>({killPercent}%)</span></p>
                    </div>
                    <div className='bg-[#374151]/60 bg-opacity:20 rounded-2xl border-black border-2 my-2 w-[80%] mx-auto'>
                        <p className='text-lg mx-4 pt-[3px]'>Legend Damage: </p>
                        <p className='text-bold text-2xl pb-1 mx-4'>{legendDMG} <span className='text-lg text-[#9ca3af]'>({legendDMGPercent}%)</span></p>
                    </div>
                    <div className='flex mx-10 justify-end'>
                        <button onClick={() => setUserFound(!userFound)} className="border-2 border-black font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-blue-600 hover:bg-blue-700 dark:focus:ring-blue-800 text-white" >Back</button>
                    </div>
                </div>  
            </div>  
        </div>
        </div>
    </div>
  )
}

export default Home