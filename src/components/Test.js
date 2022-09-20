import React, {useState} from 'react'
import Axios from 'axios'
import Origin from '../assets/origin.png'
import Xbox from '../assets/xbox.png'
import PS from '../assets/ps.png'

const Test = () => {

    const [gamertag, setGamertag] = useState("");
    const [platform, setPlatform] = useState("");

    {/* const fetchData = () => {
        Axios.get('https://randomuser.me/api/').then((res) =>{
            console.log(res)
        })
    }*/}

    const fetchData = () => {
        Axios.get(`https://public-api.tracker.gg/v2/apex/standard/profile/${platform}/${gamertag}`, 
        { headers: {'content-type': 'application/json', 'TRN-Api-Key': 'be7e45ac-9925-4c67-a402-1d12d2e6d99a'}}
        ).then((res) =>{
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }

  return (
    <div>
        <input className='bg-gray-600' text-white placeholder='gamertag' onChange={(event) => {setGamertag(event.target.value);}}/>
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
                <br />
        <button onClick={fetchData} className='bg-gray-300' id='submit'>Submit</button>
    </div>
  )
}

export default Test