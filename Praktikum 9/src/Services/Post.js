import { domainPath } from "./Config";

const PostAPI = (path, data) => {
    const promise = new Promise((reslove, reject)=>{
        fetch(`${domainPath}/${path}`, {
        method : 'post',
        headers : {
            'Accept': 'application/json',
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data)
    })
        .then((result) => {
            reslove(result);
        }, (err) => {
            reject(err);
        })
    })
    return promise;
}
export default PostAPI;