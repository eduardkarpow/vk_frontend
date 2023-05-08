import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {useState} from "react";
import styles from "./Form.module.css";
import {LocalizationProvider} from "@mui/x-date-pickers";


const FormComponent = () => {
    const [tower, setTower] = useState("");
    const [floor, setFloor] = useState("");
    const [room, setRoom] = useState("");
    const [dateStart, setDateStart] = useState("");
    const [dateEnd, setDateEnd] = useState("");
    const [comment, setComment] = useState("");
    const floors = Array.from({length: 25}, (_, index) => index + 3);
    const rooms = Array.from({length: 10}, (_, index) => index + 1);;
    const clear = () => {
        setTower("");
        setFloor("");
        setRoom("");
        setDateStart("");
        setDateEnd("");
        setComment("");
    }
    const send = () => {
        const body = {
            tower: tower,
            floor: floor,
            room: room,
            start: dateStart.toDate(),
            end: dateEnd.toDate(),
            comment: comment
        }
        console.log(JSON.stringify(body));
    }
    return (
        <div className = {styles.container}>
            <FormControl fullWidth className={styles.FormElement}>
                <InputLabel id="demo-simple-select-label">Башня</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={tower}
                    label="tower"
                    onChange={(e) => setTower(e.target.value)}
                >
                    <MenuItem value={"А"}>А</MenuItem>
                    <MenuItem value={"Б"}>Б</MenuItem>
                </Select>

            </FormControl>
            <FormControl fullWidth className={styles.FormElement}>
                <InputLabel id="demo-simple-select-label">Этаж</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={floor}
                    label="floor"
                    onChange={(e) => setFloor(e.target.value)}
                >
                    {floors.map((val, index) =>
                        <MenuItem value={val} key={index}>
                            {val}
                        </MenuItem>
                    )}

                </Select>
            </FormControl>
            <FormControl fullWidth className={styles.FormElement}>
                <InputLabel id="demo-simple-select-label">Переговорка</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={room}
                    label="rooms"
                    onChange={(e) => setRoom(e.target.value)}
                >
                    {rooms.map((val, index) =>
                        <MenuItem value={val} key={index}>
                            {val}
                        </MenuItem>
                    )}

                </Select>
            </FormControl>
            <div className={styles.dates}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                        label="начало"
                        value={dateStart}
                        onChange={(newValue) => setDateStart(newValue)}
                    />
                    <DateTimePicker
                        label="окончание"
                        value={dateEnd}
                        onChange={(newValue) => setDateEnd(newValue)}
                    />
                </LocalizationProvider>
            </div>
            <textarea value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
            <div className={styles.buttons}>
                <button className={styles.send} onClick={send}>Отправить</button>
                <button className={styles.cancel} onClick={clear}>Очистить</button>
            </div>
        </div>

    );
}
export default FormComponent;