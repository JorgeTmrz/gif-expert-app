export const getGifs = async (category) => {
  const url = `http://api.giphy.com/v1/gifs/search?api_key=LzmwBN7fikpimKs8eYkJJP0J407Y2KQB&q=${encodeURI(
    category
  )}&limit=10`;
  const { data } = await (await fetch(url)).json();

  return data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });
};
