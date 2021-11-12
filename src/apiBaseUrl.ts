const prod = {
    url: {
        apiUrl: process.env.REACT_APP_API_URL,
    }
};

const test = {
    url: {
        apiUrl: 'https://localhost:44384/api',
        //apiUrl: process.env.REACT_APP_API_URL,
    }
};



export const config = process.env.NODE_ENV === 'development' ? test : prod;
