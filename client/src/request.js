export default function request({
  url,
  method = 'post',
  data,
  headers = {},
  // requestList,
}) {
  return new Promise(resolve => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    Object.keys(headers).forEach(key => {
      xhr.setRequestHeader(key, headers[key]);
    });
    
    xhr.send(data);
    xhr.onload = (e) => {
      resolve({
        // 可以通过xhr.responseType指定返回类型
        data: e.target.response
      })
    }
  })
}