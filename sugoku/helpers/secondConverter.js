const secondConverter = (seconds) => {
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  seconds = Math.floor(seconds % 60);

  if (hours > 0) {
    return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
  } else if (minutes > 0) {
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  }
  return seconds;
};

export default secondConverter;
