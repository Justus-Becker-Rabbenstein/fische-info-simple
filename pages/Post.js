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
                <input name="name" />
                <label>Fisch Gattung: </label>
                <input name="fischGattung" />
                <label>Wasserart: </label>
                <input name="wasserart" />
                <label>Bildurl: </label>
                <input name="pictureUrl" />
                <button type="submit">Submit data</button>
            </form>
        </div>
    )
}

export default Post