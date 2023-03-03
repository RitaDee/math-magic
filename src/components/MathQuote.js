const getMathQuote = async () => {
  try {
    const response = await fetch(
      'https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en',
      { headers: { Origin: null } },
    );
    const data = await response.json();
    return data.quoteText;
  } catch (error) {
    return null;
  }
};

export default getMathQuote;
