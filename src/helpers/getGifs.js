const limit = 5;
export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=adqOyvUoorj651ajWNfKKM9bBSbAerzN&q=${ category }&limit=${ limit }`;
    const res = await fetch ( url );
    const { data } = await res.json();

    const gifs = data.map( img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        })
    );

    return gifs;
}
