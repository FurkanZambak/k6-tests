import http from 'k6/http';
import { sleep, check } from 'k6';
import { randomString } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
import { SharedArray } from 'k6/data';

const userCredentials = new SharedArray('users with credentials', function() {
    return JSON.parse(open('./users.json')).users;
});

console.log(userCredentials);

export default function () {
    userCredentials.forEach((item) => {
        const credentials = {
            username: item.username,
            password: item.password
        };
    
        let res = http.post(
            'https://test-api.k6.io/user/register/',
            JSON.stringify(credentials),
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    
        check(res, {
            'status is 201': (r) => r.status === 201
        });
    });
    
}