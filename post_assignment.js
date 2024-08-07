import http from 'k6/http';
import { check } from 'k6';

const body = JSON.stringify({
    username: 'test_1719477032537',
    password: 'test'
});

const params = {
    headers: {
        'Content-Type': 'application/json'
    }
};

export default function () {
    let res = http.post('https://test-api.k6.io/auth/token/login/', body, params);
    const token = res.json().access;
    console.log(res.json().access);

    check(res, {
        'Response body has access token': (r) => r.body.includes("access")
    })

    http.get(
        "https://test-api.k6.io/my/crocodiles/",
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }
    );
}