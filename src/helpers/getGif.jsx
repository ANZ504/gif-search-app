export const getGif = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=48&api_key=DwOFc12Pr805uCADnAjmyGLHpLzIhaTj`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
            user: img.username,
            rating: img.rating
            
        }
    })
/*     console.log(gifs);
    setImage( gifs ); */
    return gifs;
}