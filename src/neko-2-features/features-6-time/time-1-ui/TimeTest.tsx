import React, {useState} from 'react';
import TimePicker from "rc-time-picker";
import 'rc-time-picker/assets/index.css';
import moment from "moment";

interface ITimeTestProps {

}

const TimeTest: React.FC<ITimeTestProps> = (
    {}
) => {
    const time = new Date();

    const [time1, setTime1] = useState(moment(time));
    const [time2, setTime2] = useState(moment(time));
    const newTime = moment.utc(time1.diff(time2)); // without tz

    const [color, setColor] = useState('#00ff00');

    return (
        <div
            style={{
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            time
            <div>{moment(time).format('HH:mm:ss')}</div>

            <input type={'time'} onChange={e => console.log(e.currentTarget.value)}/>

            <div>
                <div style={{width: '116px', display: 'inline-block'}}>
                    <TimePicker value={time1} onChange={setTime1} format={'dddd HH:mm:ss'}/>
                </div>
                ---
                <div style={{width: '80px', display: 'inline-block'}}>
                    <TimePicker value={time2} onChange={setTime2}/>
                </div>
                ===
                <div style={{width: '80px', display: 'inline-block'}}>
                    <TimePicker value={newTime}/>
                </div>
            </div>

            <input type={'color'} value={color} onChange={e => setColor(e.currentTarget.value)}/>
            <div style={{width: '100px', height: '100px', background: color}}/>

            <div
                style={{
                    width: '300px',
                    height: '100px',
                    background: 'linear-gradient(90deg, #000000 -12%, #0000ff 13%, #00ff00 50%, #ff0000 88%, #000000 112%)',
                }}
            />
        </div>
    );
};

export default TimeTest;
