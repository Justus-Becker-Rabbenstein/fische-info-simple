import Link from "next/link"

const Post = () => {

    var jsonData =
        [
            {
                "name": "alan",
                "gattung": 23,
                "wasser": "aturing",
                "pictureurl": "..."
            }
        ]

    return (
        <div>
            <h1>POST</h1>
            <form action="/api/apiFische" method="post">
                <label>Fisch Name: </label>
                <input></input>
                <label>Fisch Gattung: </label>
                <input></input>
                <label>Wasserart: </label>
                <input></input>
                <label>Bildurl: </label>
                <input></input>
                <button type="submit">Submit data</button>
            </form>
        </div>
    )
}

export default Post