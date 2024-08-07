import http from 'k6/http';

export const options = {
    thresholds: {
        http_req_duration: ['p(95)<1000'],
        'http_req_duration{status:200}': ['p(95)<1000'],
        'http_req_duration{status:201}': ['p(95)<1000']
    }
}

export default function () {
    http.get('https://run.mocky.io/v3/1192b9e3-0531-4472-808e-0fed96d9f22c');
    http.get('https://run.mocky.io/v3/3384cda4-7849-4ef7-bf99-050a8c8bab73?mocky-delay=2000ms');
}