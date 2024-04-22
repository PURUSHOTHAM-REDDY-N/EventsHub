import { getDataFromStorage } from './storage';

const createFetchInstance = async () => {
  try {
    const authTokenData = await getDataFromStorage("auth");
    const authToken = authTokenData?.user?.token || '';
    const headers = {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${authToken}`,
    };

    const imageHeaders ={
      "Content-Type": "multipart/form-data",
    }

    return {
      get: async (url, queryParams) => {
        try {
          // Construct the query string from the queryParams object
          const queryString = Object.keys(queryParams)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
            .join('&');

      
          // Append the query string to the URL
          const fullUrl = queryString ? `https://babailinks.com/api${url}?${queryString}` : `https://babailinks.com/api${url}`;
          let response = await fetch(fullUrl, {
            method: 'GET',
            headers: headers,
          });
          let data = await response.json();
          let gotRes = { status: response.status, data };
          return gotRes;
        } catch (error) {
          console.error('Error with GET request:', error);
          throw error;
        }
      },
      post: async (url, body) => {
        try {
          let response = await fetch(`https://babailinks.com/api${url}`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body),
          });
          let data = await response.json();
          console.log(data)
          let gotRes={status:response.status,data}
          console.log("got res inside instance",gotRes)
          return gotRes;
        } catch (error) {
          console.error('Error with POST request:', error);
          throw error;
        }
      },
      postImage:async (url, formData) => {
        try {
          let response = await fetch(`https://babailinks.com/api${url}`, {
            method: 'POST',
            headers: imageHeaders,
            body: formData,
          });
          let data = await response.json();
          console.log(data)
          let gotRes={status:response.status,data}
          console.log("got res inside instance",gotRes)
          return gotRes;
        } catch (error) {
          console.error('Error with POST request:', error);
          throw error;
        }
      }
      // Add other HTTP methods (PUT, DELETE, etc.) as needed
    };
  } catch (error) {
    console.error('Error setting up Fetch instance:', error);
    throw error;
  }
};

export default createFetchInstance;
