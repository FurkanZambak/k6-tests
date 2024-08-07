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

    res = http.post(
        "https://test-api.k6.io/my/crocodiles/",
        JSON.stringify({
            name: 'Croc',
            sex: 'M',
            date_of_birth: '1970-10-10'
        }),
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            }
        }
    );
    const crocId = res.json().id;
    console.log(crocId);

    res = http.get(
        "https://test-api.k6.io/my/crocodiles/" + crocId,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }
    );

    check(res, {
        'Status is OK': (r) => r.status === 200,
        'Croc id is valid': (r) => r.json().id === crocId
    })

    res = http.put(
        `https://test-api.k6.io/my/crocodiles/${crocId}/`,
        JSON.stringify({
            name: 'Croc1',
            sex: 'M',
            date_of_birth: '1970-10-10'
        }),
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            }
        }
    );

    res = http.patch(
        `https://test-api.k6.io/my/crocodiles/${crocId}/`,
        JSON.stringify({
            sex: 'F'
        }),
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            }
        }
    );

    res = http.del(
        `https://test-api.k6.io/my/crocodiles/${crocId}/`,
        null,
        {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }
        
    );

    console.log(res.status);
    
}