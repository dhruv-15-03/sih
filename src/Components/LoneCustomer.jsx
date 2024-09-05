import { Box, Button, Card, Tab, Tabs } from '@mui/material'
import React, { useEffect } from 'react'
import New from './New'
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";
import { blue } from '@mui/material/colors';



const isAlert=false
const tabs=[
    {value:"med1",name:"med1"},
    {value:"med2",name:"med2"},
    {value:"med3",name:"med3"},
    {value:"med4",name:"med4"},
    {value:"med5",name:"med5"},
    
]
const LoneCustomer = () => {


    const [item, setItem] = React.useState(40);
    const [value, setValue] = React.useState('med1');
    const [alfo, setAlfo] = React.useState(0);
    const [isAlert, setIsAlert] = React.useState(false);
    const firebaseConfig = {
        apiKey: "AIzaSyB0XvZsyWJXncy30bQQxgi2s_8JndmyQ_Q",
        authDomain: "elec-1012f.firebaseapp.com",
        databaseURL: "https://elec-1012f-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "elec-1012f",
        storageBucket: "elec-1012f.appspot.com",
        messagingSenderId: "598059222452",
        appId: "1:598059222452:web:0bbfeaf9c066d86572dee1",
        measurementId: "G-487FVPPTZ9"
    };
    
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    
    
    async function fetchAndUpdateData() {
        try {
          const sensorDataRef = ref(database, 'sensor1_data');
          const snapshot = await get(sensorDataRef);
          if (snapshot.exists()) {
            const sensorData = parseFloat(snapshot.val()); // Ensure it's a number
            if (!isNaN(sensorData)) {
                console.log(sensorData)
              setAlfo((100-(sensorData>20?0:sensorData*5)));
              console.log(alfo,'.......')
            } else {
              console.error("Sensor data is not a valid number:", sensorData);
            }
          } else {
            console.log("No data available");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    
    // Initial fetch
    fetchAndUpdateData();
    
    // Set an interval to refresh the data every 2 seconds
    setInterval(fetchAndUpdateData, 2000);


    
    useEffect(() => {
        fetchAndUpdateData(); // Initial fetch
        const intervalId = setInterval(fetchAndUpdateData, 2000); // Refresh data every 2 seconds
        return () => clearInterval(intervalId); // Cleanup on unmount
      }, []);
    
      useEffect(() => {
        setItem(alfo);
      }, [alfo]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      }
    if(isAlert){
        alert("Needed Help")
    }
  return (
    <div >
        <h1 className='text-center teamname' >
            Team Dynamic
        </h1>
    <Card sx={{bgcolor:blue[50]}} className="my-10 w-[100%] justify-center justify-items-center" >
            <div className="rounded-md">
                <div className="p-5">
                    <div className='pt-4 text-center'>
                        <h1 className="py-1 text-xl font-bold">Mr. Rakesh</h1>
                        <p>Room No 512</p>
                    </div>
                    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      marginTop:'10px'
    }}>
      <ul style={{ 
        listStyleType: 'none', 
        display: 'flex', 
        padding: 0, 
        margin: '3' }}>
        <li style={{ marginRight: '15px' }}>
            <span className='font-semibold '>Age :</span>
            <span>56  </span></li>
        <li style={{ marginRight: '15px' }}><span className='font-semibold'>Gender :</span>
        <span>Male  </span></li>
        <li style={{ marginRight: '15px' }}><span className='font-semibold'>Weight :</span>
        <span>56Kg   </span></li>
        <li style={{ marginRight: '15px' }}><span className='font-semibold'>Height :</span>
        <span>175cm   </span></li>
      </ul>
    </div>
                    <div className='pt-5 text-center'>
                        <span>A heart patient admitted because of Chest Pain</span>
                        <Button
      sx={{
        borderRadius: "20px",
        marginLeft: '6px',
        right: '3px',
        backgroundColor: isAlert ? 'red' : 'transparent',
        color: isAlert ? 'white' : 'inherit',
        '&:hover': {
          backgroundColor: isAlert ? 'darkred' : 'inherit',
        },
      }}
      variant="outlined"
      
    >
      Help
    </Button>
                    </div>

                </div>
                <section className='align-middle'>
                <Box sx={{ textAlign:'centre',width: '100%' ,borderBottom:1,borderColor:"divider" }}>
                    <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="wrapped label tabs example"
                    >
                    {tabs.map((item)=><Tab value={item.value} label={item.name} />)}
                    </Tabs>
                    </Box>
                    <div className="flex justify-center">
                        {value==="med1"?(<div className="space-y-5 w-[70%] my-10 " >
                            {true&&<div  className="border rounded-md border-slate-100">
                                <New item={item}/>
                                </div>}
                        </div>)
                        :value==="med2"?(<div className="space-y-5 w-[70%] my-10 " >
                            {true&&<div  className="border rounded-md border-slate-100">
                                <New item={item}/>
                                </div>}
                        </div>):value==="med3"?(<div className="space-y-5 w-[70%] my-10 " >
                            {true&&<div  className="border rounded-md border-slate-100">
                                <New item={45}/>
                                </div>}
                        </div>) :value==="med4"?(<div className="space-y-5 w-[70%] my-10 " >
                            {true&&<div  className="border rounded-md border-slate-100">
                                <New item={item}/>
                                </div>}
                        </div>) :(
                            <div>Further medicines here....</div>
                        )}
                    </div>
                </section>

            </div>
            
        </Card>
        </div>
  )
}

export default LoneCustomer