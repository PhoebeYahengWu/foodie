import axios from 'axios';

export default {
    // Get stores from api
    getStores: function(term, location) {
        return axios({
                'method': 'GET',
                 'url': `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`,
                'headers': {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.REACT_APP_YELP_API_KEY}` 
                }
            })
    },

    // Get all saved stores
    getSavedStores: function() {
        return axios.get("/api/store")
    },
    deleteStore: function(id) {
        return axios.delete(`/api/store/${id}`);
    },
    // Save a store to the database
    saveStore: function(storeData, id) {
        return axios.post(`/api/store/${id}`, storeData);
    }
}