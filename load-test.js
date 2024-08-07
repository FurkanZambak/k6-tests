import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        {
            duration: '5m', // Ramp up stage and duration is about 10% of the total duration
            target: 100
        },
        {
            duration: '30m',
            target: 100
        },
        {
            duration: '5m', // Ramp down stage and duration is about 10% of the total duration
            target: 0
        }
    ]
}

export default function () {
    http.get('https://test.k6.io');
    sleep(1);
    http.get("https://test.k6.io/contacts.php");
    sleep(2);
    http.get("https://test.k6.io/news.php");
    sleep(2);
}