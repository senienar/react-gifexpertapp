

export const getGif =async(cat)=>{
      
    const url =`https://api.giphy.com/v1/gifs/search?q=${encodeURI(cat)}&limit=10&api_key=wjmU8loCkcwXfoFJheS2f31udQc1NZwI`;
    const resp = await fetch (url);
    const { data } = await resp.json();

    const gif =data.map (img=>{
        return {
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url
        }
    })
   return gif;

  }