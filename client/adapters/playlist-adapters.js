export default function adaptPlaylistData(data, isPlaybackInitialized) {
  data.map((item) => {
    item.votes = 0;
    if (item.hasOwnProperty('downvotes') && item.hasOwnProperty('upvotes')) {
      item.votes = item.upvotes.length - item.downvotes.length;
    } else if (item.hasOwnProperty('upvotes')) {
      item.votes = +item.upvotes.length;
    } else if (item.hasOwnProperty('downvotes')) {
      item.votes = -item.downvotes.length;
    }
  });

  let firtstItem = null;

  if (isPlaybackInitialized) {
    firtstItem = data.shift();
  }

  data.sort((a, b) => b.votes - a.votes);

  return firtstItem ? [firtstItem, ...data] : [...data];
}
