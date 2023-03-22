import React, { useEffect } from 'react'
import {axios} from 'axios'
const CreateMovie = () => {

    const [name, setName] = useState();
    const [rating, setRating] = useState();
    const [rlsDate, setRlsDate] = useState();


    useEffect(() => {
        submit = () => {
            axios.post("/addmovie")
                .then(res.send({
                    name,
                    rating,
                    rlsDate
                }))
        }

    })
    return (
        <>
            <div className='container'>
                <form type="POST">
                    <input type='text' onChange={(e) => setName(e.target.value)} />
                    <input type='text' onChange={(e) => setRating(e.target.value)} />
                    <input type='Number' onChange={(e) => setRlsDate(e.target.value)} />

                    <br/>
                    <input type="sumbmit" onClick={submitF}
                    />
                </form>
            </div>
        </>
    )
}

export default CreateMovie