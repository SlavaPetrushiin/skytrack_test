const requestImageApi = {
    getImage(){
        return fetch('https://api.giphy.com/v1/gifs/random?api_key=gR30u9O8KPOanwIQupHbD90d4k57EOeY')
    }
};

export default requestImageApi;