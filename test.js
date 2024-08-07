import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {
//   cloud: {
//     distribution: { 'amazon:us:ashburn': { loadZone: 'amazon:us:ashburn', percent: 100 } },
//     apm: [],
//   },
  thresholds: {},
  scenarios: {
    Scenario_1: {
      executor: 'ramping-vus',
      stages: [
        { target: 1, duration: '2m'}
      ],
      //gracefulStop: '30s',
    //   stages: [
    //     { target: 1, duration: '1m' },
    //     { target: 1, duration: '3m30s' },
    //     { target: 0, duration: '1m' },
    //   ],
    //   gracefulRampDown: '30s',
      exec: 'scenario_1',
    },
  },
}

export function scenario_1() {
  let response

  group('page_1 - https://seam.riskscore.cards/user/login/welcome', function () {
    response = http.post(
      'https://seam.riskscore.cards/User/CheckLoginStatus',
      {
        email: 'furkan.zambak@blackkite.com',
        returnUrl: '/Dashboard',
        __RequestVerificationToken:
          'p0YMUlg6j1u4TVu900LyNM9gocRE2FwcAZ1neBGERRhtOKiex_uUjNd6ET-l0EbokLntr7E4QdRodiXrAM3dWYjcGnFCJBGlonQMG6jz6Q2gDuJUm314v1jThViyoEOSlH3CeoPXqgyofm2w4CDdkQ2',
      },
      {
        headers: {
          accept: 'application/json, text/javascript, */*; q=0.01',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'x-newrelic-id': 'VwADWVBaABABV1JXDgQOUVcA',
          'x-requested-with': 'XMLHttpRequest',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjM2NDg2OTgiLCJhcCI6IjEzODYwMTg5NDIiLCJpZCI6ImNmMjJkZjViNTRiMzNiZDYiLCJ0ciI6IjgyZDczZGQ4ZjU0OWMyNTU5MmE2YzdkOGIzNzY0NmQ0IiwidGkiOjE3MTk4MjI2MDQzNTJ9fQ==',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-82d73dd8f549c25592a6c7d8b37646d4-cf22df5b54b33bd6-01',
          tracestate: '3648698@nr=0-1-3648698-1386018942-cf22df5b54b33bd6----1719822604352',
        },
      }
    )
    sleep(8.5)
  })

  group('page_2 - https://seam.riskscore.cards/user/login/loginwithpass', function () {
    response = http.post(
      'https://seam.riskscore.cards/account/login',
      {
        email: 'furkan.zambak@blackkite.com',
        password: 'g$czh_QtLm9#8_Ks',
        returnUrl: '/Dashboard',
        __RequestVerificationToken:
          'p0YMUlg6j1u4TVu900LyNM9gocRE2FwcAZ1neBGERRhtOKiex_uUjNd6ET-l0EbokLntr7E4QdRodiXrAM3dWYjcGnFCJBGlonQMG6jz6Q2gDuJUm314v1jThViyoEOSlH3CeoPXqgyofm2w4CDdkQ2',
      },
      {
        headers: {
          accept: 'application/json, text/javascript, */*; q=0.01',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'x-newrelic-id': 'VwADWVBaABABV1JXDgQOUVcA',
          'x-requested-with': 'XMLHttpRequest',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjM2NDg2OTgiLCJhcCI6IjEzODYwMTg5NDIiLCJpZCI6IjE2MmNkMGE5MjBlMDZiNDMiLCJ0ciI6IjhmYzdhODNjMmEzMjhhODgxYWU1YWQxN2RlNDQwMTAwIiwidGkiOjE3MTk4MjI2MTI4MDh9fQ==',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-8fc7a83c2a328a881ae5ad17de440100-162cd0a920e06b43-01',
          tracestate: '3648698@nr=0-1-3648698-1386018942-162cd0a920e06b43----1719822612808',
        },
      }
    )
  })

  group('page_3 - https://seam.riskscore.cards/Dashboard', function () {
    response = http.get('https://seam.riskscore.cards/Dashboard', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(9.5)

    response = http.post(
      'https://seam.riskscore.cards/DashboardDrawWidget/RefreshItem',
      {
        customerid: '28',
        dashid: '19',
        widgetStatisticId: '163',
      },
      {
        headers: {
          accept: 'application/json, text/javascript, */*; q=0.01',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'x-newrelic-id': 'VwADWVBaABABV1JXDgQOUVcA',
          'x-requested-with': 'XMLHttpRequest',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjM2NDg2OTgiLCJhcCI6IjEzODYwMTg5NDIiLCJpZCI6IjdiM2M1NmNjOWQzNTc3YzgiLCJ0ciI6Ijc0Mjg3YjgxYjBkYWU2MGIxMjY1ODZhNzljOWNlNzc5IiwidGkiOjE3MTk4MjI2MjI2MDN9fQ==',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-74287b81b0dae60b126586a79c9ce779-7b3c56cc9d3577c8-01',
          tracestate: '3648698@nr=0-1-3648698-1386018942-7b3c56cc9d3577c8----1719822622603',
        },
      }
    )

    response = http.post(
      'https://seam.riskscore.cards/DashboardDrawWidget/RefreshItem',
      {
        customerid: '28',
        dashid: '19',
        widgetStatisticId: '156',
      },
      {
        headers: {
          accept: 'application/json, text/javascript, */*; q=0.01',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'x-newrelic-id': 'VwADWVBaABABV1JXDgQOUVcA',
          'x-requested-with': 'XMLHttpRequest',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjM2NDg2OTgiLCJhcCI6IjEzODYwMTg5NDIiLCJpZCI6IjE1Y2Y3ZWU4MGRlY2Q5OGIiLCJ0ciI6ImE4MDdkMTI1N2QzYjc1MjI2MmIyMDI0YzhjNTMwYWM3IiwidGkiOjE3MTk4MjI2MjI2MDR9fQ==',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-a807d1257d3b752262b2024c8c530ac7-15cf7ee80decd98b-01',
          tracestate: '3648698@nr=0-1-3648698-1386018942-15cf7ee80decd98b----1719822622604',
        },
      }
    )

    response = http.post(
      'https://seam.riskscore.cards/DashboardDrawWidget/RefreshItem',
      {
        customerid: '28',
        dashid: '19',
        widgetStatisticId: '160',
      },
      {
        headers: {
          accept: 'application/json, text/javascript, */*; q=0.01',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'x-newrelic-id': 'VwADWVBaABABV1JXDgQOUVcA',
          'x-requested-with': 'XMLHttpRequest',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjM2NDg2OTgiLCJhcCI6IjEzODYwMTg5NDIiLCJpZCI6IjExMWUyZDlmNTRlYWViZTAiLCJ0ciI6ImQ0NmZmMTMzMWQzMzY2NDlkZjhmOTU0ODE2MjJjY2YwIiwidGkiOjE3MTk4MjI2MjI2MDR9fQ==',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-d46ff1331d336649df8f95481622ccf0-111e2d9f54eaebe0-01',
          tracestate: '3648698@nr=0-1-3648698-1386018942-111e2d9f54eaebe0----1719822622604',
        },
      }
    )

    response = http.post(
      'https://seam.riskscore.cards/DashboardDrawWidget/RefreshItem',
      {
        customerid: '28',
        dashid: '19',
        widgetStatisticId: '158',
      },
      {
        headers: {
          accept: 'application/json, text/javascript, */*; q=0.01',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'x-newrelic-id': 'VwADWVBaABABV1JXDgQOUVcA',
          'x-requested-with': 'XMLHttpRequest',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjM2NDg2OTgiLCJhcCI6IjEzODYwMTg5NDIiLCJpZCI6IjM1NmY2MDcwZjI4YmUzOGIiLCJ0ciI6IjRkZGU4OTM5ODFiY2I0ODg3MTcyNTk4YzE3MjRkMWRmIiwidGkiOjE3MTk4MjI2MjI2MDV9fQ==',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-4dde893981bcb4887172598c1724d1df-356f6070f28be38b-01',
          tracestate: '3648698@nr=0-1-3648698-1386018942-356f6070f28be38b----1719822622605',
        },
      }
    )

    response = http.post(
      'https://seam.riskscore.cards/DashboardDrawWidget/RefreshItem',
      {
        customerid: '28',
        dashid: '19',
        widgetStatisticId: '91546',
      },
      {
        headers: {
          accept: 'application/json, text/javascript, */*; q=0.01',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'x-newrelic-id': 'VwADWVBaABABV1JXDgQOUVcA',
          'x-requested-with': 'XMLHttpRequest',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjM2NDg2OTgiLCJhcCI6IjEzODYwMTg5NDIiLCJpZCI6ImE5NjIzN2EyN2FkMDUzZmUiLCJ0ciI6ImMyYmYzNTIxYjA2YTExYzg2Y2M1YTUxMzdlOGMzYjk3IiwidGkiOjE3MTk4MjI2MjI2MDV9fQ==',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-c2bf3521b06a11c86cc5a5137e8c3b97-a96237a27ad053fe-01',
          tracestate: '3648698@nr=0-1-3648698-1386018942-a96237a27ad053fe----1719822622605',
        },
      }
    )

    response = http.post(
      'https://seam.riskscore.cards/DashboardDrawWidget/RefreshItem',
      {
        customerid: '28',
        dashid: '19',
        widgetStatisticId: '76257',
      },
      {
        headers: {
          accept: 'application/json, text/javascript, */*; q=0.01',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'x-newrelic-id': 'VwADWVBaABABV1JXDgQOUVcA',
          'x-requested-with': 'XMLHttpRequest',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjM2NDg2OTgiLCJhcCI6IjEzODYwMTg5NDIiLCJpZCI6IjhmM2RjZjU2MzRkZTIyMDYiLCJ0ciI6IjljZGZjYjJhNmQ3MmVhYzg4NmJiOTBhOGU0M2IxNmRhIiwidGkiOjE3MTk4MjI2MjI2MDZ9fQ==',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-9cdfcb2a6d72eac886bb90a8e43b16da-8f3dcf5634de2206-01',
          tracestate: '3648698@nr=0-1-3648698-1386018942-8f3dcf5634de2206----1719822622606',
        },
      }
    )

    response = http.post(
      'https://seam.riskscore.cards/DashboardDrawWidget/RefreshItem',
      {
        customerid: '28',
        dashid: '19',
        widgetStatisticId: '35716',
      },
      {
        headers: {
          accept: 'application/json, text/javascript, */*; q=0.01',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'x-newrelic-id': 'VwADWVBaABABV1JXDgQOUVcA',
          'x-requested-with': 'XMLHttpRequest',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjM2NDg2OTgiLCJhcCI6IjEzODYwMTg5NDIiLCJpZCI6ImIxMzI4ZGJlNWE0ZmZkMzIiLCJ0ciI6Ijg4ZTg5OTFjODRhZmM4MGVkYWFiNDAzZGM2MTY3MTgzIiwidGkiOjE3MTk4MjI2MjI2MDZ9fQ==',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-88e8991c84afc80edaab403dc6167183-b1328dbe5a4ffd32-01',
          tracestate: '3648698@nr=0-1-3648698-1386018942-b1328dbe5a4ffd32----1719822622606',
        },
      }
    )

    response = http.post(
      'https://seam.riskscore.cards/DashboardDrawWidget/RefreshItem',
      {
        customerid: '28',
        dashid: '19',
        widgetStatisticId: '162',
      },
      {
        headers: {
          accept: 'application/json, text/javascript, */*; q=0.01',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'x-newrelic-id': 'VwADWVBaABABV1JXDgQOUVcA',
          'x-requested-with': 'XMLHttpRequest',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjM2NDg2OTgiLCJhcCI6IjEzODYwMTg5NDIiLCJpZCI6IjlmYTFhNWQxNzk3MWVjYTIiLCJ0ciI6IjI1ZGExYTRmMTZiMDc5ZjBjMmIzNzBkMDQxNTU2N2UzIiwidGkiOjE3MTk4MjI2MjI2MDd9fQ==',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-25da1a4f16b079f0c2b370d0415567e3-9fa1a5d17971eca2-01',
          tracestate: '3648698@nr=0-1-3648698-1386018942-9fa1a5d17971eca2----1719822622607',
        },
      }
    )

    response = http.post(
      'https://seam.riskscore.cards/DashboardDrawWidget/RefreshItem',
      {
        customerid: '28',
        dashid: '19',
        widgetStatisticId: '34453',
      },
      {
        headers: {
          accept: 'application/json, text/javascript, */*; q=0.01',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'x-newrelic-id': 'VwADWVBaABABV1JXDgQOUVcA',
          'x-requested-with': 'XMLHttpRequest',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjM2NDg2OTgiLCJhcCI6IjEzODYwMTg5NDIiLCJpZCI6IjUwNTE4NDRhMjNkODJlMzkiLCJ0ciI6IjRhYjlmYzcyOWJiYjkyMDQwMmJlM2MzM2UxOGI3YjI5IiwidGkiOjE3MTk4MjI2MjI2MDd9fQ==',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-4ab9fc729bbb920402be3c33e18b7b29-5051844a23d82e39-01',
          tracestate: '3648698@nr=0-1-3648698-1386018942-5051844a23d82e39----1719822622607',
        },
      }
    )

    response = http.post(
      'https://seam.riskscore.cards/DashboardDrawWidget/RefreshItem',
      {
        customerid: '28',
        dashid: '19',
        widgetStatisticId: '115205',
      },
      {
        headers: {
          accept: 'application/json, text/javascript, */*; q=0.01',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'x-newrelic-id': 'VwADWVBaABABV1JXDgQOUVcA',
          'x-requested-with': 'XMLHttpRequest',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjM2NDg2OTgiLCJhcCI6IjEzODYwMTg5NDIiLCJpZCI6IjJkOWFmMzBjZjQ0OTg5ZGIiLCJ0ciI6IjExNmE4ZDgxNDI5NGMzNTNkZWI0ZTAzYWY1MGE2YWJiIiwidGkiOjE3MTk4MjI2MjI2MDh9fQ==',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-116a8d814294c353deb4e03af50a6abb-2d9af30cf44989db-01',
          tracestate: '3648698@nr=0-1-3648698-1386018942-2d9af30cf44989db----1719822622608',
        },
      }
    )

    response = http.post(
      'https://seam.riskscore.cards/DashboardDrawWidget/RefreshItem',
      {
        customerid: '28',
        dashid: '19',
        widgetStatisticId: '57416',
      },
      {
        headers: {
          accept: 'application/json, text/javascript, */*; q=0.01',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'x-newrelic-id': 'VwADWVBaABABV1JXDgQOUVcA',
          'x-requested-with': 'XMLHttpRequest',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjM2NDg2OTgiLCJhcCI6IjEzODYwMTg5NDIiLCJpZCI6IjAwNjhlNTYwODBiNWZlN2EiLCJ0ciI6ImVkMTJmNzRkNzcyMGU3ZGYwNTg4ZmNmNzUzMGNiMjJhIiwidGkiOjE3MTk4MjI2MjI2MDh9fQ==',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-ed12f74d7720e7df0588fcf7530cb22a-0068e56080b5fe7a-01',
          tracestate: '3648698@nr=0-1-3648698-1386018942-0068e56080b5fe7a----1719822622608',
        },
      }
    )

    response = http.post(
      'https://seam.riskscore.cards/DashboardDrawWidget/RefreshItem',
      {
        customerid: '28',
        dashid: '19',
        widgetStatisticId: '34455',
      },
      {
        headers: {
          accept: 'application/json, text/javascript, */*; q=0.01',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'x-newrelic-id': 'VwADWVBaABABV1JXDgQOUVcA',
          'x-requested-with': 'XMLHttpRequest',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjM2NDg2OTgiLCJhcCI6IjEzODYwMTg5NDIiLCJpZCI6IjQxNmNmYWJiZTFmZDQ2MWMiLCJ0ciI6IjJjYzY5YjY4NjkxYmJlMjlkYjVlMmE2NzI4YzQ0OWRmIiwidGkiOjE3MTk4MjI2MjI2MDl9fQ==',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-2cc69b68691bbe29db5e2a6728c449df-416cfabbe1fd461c-01',
          tracestate: '3648698@nr=0-1-3648698-1386018942-416cfabbe1fd461c----1719822622609',
        },
      }
    )

    response = http.post(
      'https://seam.riskscore.cards/DashboardDrawWidget/RefreshItem',
      {
        customerid: '28',
        dashid: '19',
        widgetStatisticId: '57415',
      },
      {
        headers: {
          accept: 'application/json, text/javascript, */*; q=0.01',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'x-newrelic-id': 'VwADWVBaABABV1JXDgQOUVcA',
          'x-requested-with': 'XMLHttpRequest',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjM2NDg2OTgiLCJhcCI6IjEzODYwMTg5NDIiLCJpZCI6ImM2YmI1YzI3NDFiNzYzZGMiLCJ0ciI6IjA3ODk2ZDQyNDRjOTAyNWJjZjYxYTljZjg3OGNhM2U1IiwidGkiOjE3MTk4MjI2MjI2MDl9fQ==',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-07896d4244c9025bcf61a9cf878ca3e5-c6bb5c2741b763dc-01',
          tracestate: '3648698@nr=0-1-3648698-1386018942-c6bb5c2741b763dc----1719822622609',
        },
      }
    )

    response = http.post(
      'https://seam.riskscore.cards/DashboardDrawWidget/RefreshItem',
      {
        customerid: '28',
        dashid: '19',
        widgetStatisticId: '114026',
      },
      {
        headers: {
          accept: 'application/json, text/javascript, */*; q=0.01',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'x-newrelic-id': 'VwADWVBaABABV1JXDgQOUVcA',
          'x-requested-with': 'XMLHttpRequest',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjM2NDg2OTgiLCJhcCI6IjEzODYwMTg5NDIiLCJpZCI6IjJkYWY5OTk1ZDZhZGNmODgiLCJ0ciI6ImQ5MGFlZTBkMjM0ZDRhMTFlNDE2YmQxZWU1MGYyODFhIiwidGkiOjE3MTk4MjI2MjI2MTB9fQ==',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-d90aee0d234d4a11e416bd1ee50f281a-2daf9995d6adcf88-01',
          tracestate: '3648698@nr=0-1-3648698-1386018942-2daf9995d6adcf88----1719822622610',
        },
      }
    )

    response = http.post(
      'https://seam.riskscore.cards/DashboardDrawWidget/RefreshItem',
      {
        customerid: '28',
        dashid: '19',
        widgetStatisticId: '113678',
      },
      {
        headers: {
          accept: 'application/json, text/javascript, */*; q=0.01',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'x-newrelic-id': 'VwADWVBaABABV1JXDgQOUVcA',
          'x-requested-with': 'XMLHttpRequest',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjM2NDg2OTgiLCJhcCI6IjEzODYwMTg5NDIiLCJpZCI6ImRmOTA5YWVkOWRlNTc3ZTUiLCJ0ciI6IjY1YzRlNDg2MTFlMzYxNzA0YzM4Y2VhOWM1M2E5ZmVlIiwidGkiOjE3MTk4MjI2MjI2MTB9fQ==',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-65c4e48611e361704c38cea9c53a9fee-df909aed9de577e5-01',
          tracestate: '3648698@nr=0-1-3648698-1386018942-df909aed9de577e5----1719822622610',
        },
      }
    )

    response = http.post(
      'https://seam.riskscore.cards/DashboardDrawWidget/RefreshItem',
      {
        customerid: '28',
        dashid: '19',
        widgetStatisticId: '178606',
      },
      {
        headers: {
          accept: 'application/json, text/javascript, */*; q=0.01',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'x-newrelic-id': 'VwADWVBaABABV1JXDgQOUVcA',
          'x-requested-with': 'XMLHttpRequest',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjM2NDg2OTgiLCJhcCI6IjEzODYwMTg5NDIiLCJpZCI6IjcxOGI0ZWZjYWQxN2FjY2IiLCJ0ciI6ImJhNzhhMjA3N2I0MjdlZGY5OTU5NmNiZjRjMmIzOWQ4IiwidGkiOjE3MTk4MjI2MjI2MTF9fQ==',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-ba78a2077b427edf99596cbf4c2b39d8-718b4efcad17accb-01',
          tracestate: '3648698@nr=0-1-3648698-1386018942-718b4efcad17accb----1719822622611',
        },
      }
    )

    response = http.post(
      'https://seam.riskscore.cards/DashboardDrawWidget/RefreshItem',
      {
        customerid: '28',
        dashid: '19',
        widgetStatisticId: '178740',
      },
      {
        headers: {
          accept: 'application/json, text/javascript, */*; q=0.01',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'x-newrelic-id': 'VwADWVBaABABV1JXDgQOUVcA',
          'x-requested-with': 'XMLHttpRequest',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjM2NDg2OTgiLCJhcCI6IjEzODYwMTg5NDIiLCJpZCI6ImU1MWM5Njc0YjJiYWE3YzIiLCJ0ciI6Ijc3OTJjMGY1ZjM5OWFlMjY4ZDk5ZTYzMWEwMzM4NDIyIiwidGkiOjE3MTk4MjI2MjI2MTJ9fQ==',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-7792c0f5f399ae268d99e631a0338422-e51c9674b2baa7c2-01',
          tracestate: '3648698@nr=0-1-3648698-1386018942-e51c9674b2baa7c2----1719822622612',
        },
      }
    )

    response = http.post(
      'https://seam.riskscore.cards/DashboardDrawWidget/RefreshItem',
      {
        customerid: '28',
        dashid: '19',
        widgetStatisticId: '178605',
      },
      {
        headers: {
          accept: 'application/json, text/javascript, */*; q=0.01',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'x-newrelic-id': 'VwADWVBaABABV1JXDgQOUVcA',
          'x-requested-with': 'XMLHttpRequest',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjM2NDg2OTgiLCJhcCI6IjEzODYwMTg5NDIiLCJpZCI6IjZkMzI4MTNiNGIwYWYzM2MiLCJ0ciI6IjlmM2U3MGU5Njk5OTFlZWNhY2MzODdmODhkMzlhYzg1IiwidGkiOjE3MTk4MjI2MjI2MTJ9fQ==',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-9f3e70e969991eecacc387f88d39ac85-6d32813b4b0af33c-01',
          tracestate: '3648698@nr=0-1-3648698-1386018942-6d32813b4b0af33c----1719822622612',
        },
      }
    )

    response = http.post(
      'https://seam.riskscore.cards/DashboardDrawWidget/RefreshItem',
      {
        customerid: '28',
        dashid: '19',
        widgetStatisticId: '164340',
      },
      {
        headers: {
          accept: 'application/json, text/javascript, */*; q=0.01',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'x-newrelic-id': 'VwADWVBaABABV1JXDgQOUVcA',
          'x-requested-with': 'XMLHttpRequest',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjM2NDg2OTgiLCJhcCI6IjEzODYwMTg5NDIiLCJpZCI6ImMyMjRkMzdhY2M5NjQxYmUiLCJ0ciI6ImQxMzQwYmFiZDU5YzNkNjUzYjRjMjRhZWU5M2Q2MTQxIiwidGkiOjE3MTk4MjI2MjI2MTN9fQ==',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-d1340babd59c3d653b4c24aee93d6141-c224d37acc9641be-01',
          tracestate: '3648698@nr=0-1-3648698-1386018942-c224d37acc9641be----1719822622613',
        },
      }
    )

    response = http.get(
      'https://seam.riskscore.cards/signalr/negotiate?clientProtocol=1.5&connectionData=%5B%7B%22name%22%3A%22chathub%22%7D%2C%7B%22name%22%3A%22notificationhub%22%7D%5D&_=1719822621157',
      {
        headers: {
          accept: 'text/plain, */*; q=0.01',
          'content-type': 'application/json; charset=UTF-8',
          'x-newrelic-id': 'VwADWVBaABABV1JXDgQOUVcA',
          'x-requested-with': 'XMLHttpRequest',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjM2NDg2OTgiLCJhcCI6IjEzODYwMTg5NDIiLCJpZCI6IjgzNDg0YmZiNjFmNDNmYWQiLCJ0ciI6IjhkNTY2NDNhMzA3MzZhMTNiNmQ4OTMyMDBiMzQyYWM0IiwidGkiOjE3MTk4MjI2MjI2NzZ9fQ==',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-8d56643a30736a13b6d893200b342ac4-83484bfb61f43fad-01',
          tracestate: '3648698@nr=0-1-3648698-1386018942-83484bfb61f43fad----1719822622676',
        },
      }
    )

    response = http.get('https://seam.riskscore.cards/Zendesk/GetZendeskJwtToken', {
      headers: {
        newrelic:
          'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjM2NDg2OTgiLCJhcCI6IjEzODYwMTg5NDIiLCJpZCI6ImM0ZjBkYmJlNmU3ZmM0YTAiLCJ0ciI6IjA0MTcyZmQ4NWIwZjExYWQ3NmRkYjNkOTgyMGM3ZTU3IiwidGkiOjE3MTk4MjI2MjI4NjV9fQ==',
        'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        traceparent: '00-04172fd85b0f11ad76ddb3d9820c7e57-c4f0dbbe6e7fc4a0-01',
        tracestate: '3648698@nr=0-1-3648698-1386018942-c4f0dbbe6e7fc4a0----1719822622865',
      },
    })

    response = http.get(
      'https://seam.riskscore.cards/Findings/BreachAndRansomwareIndexBar?BreachIndex=0.241&RansomwareIndex=0.483',
      {
        headers: {
          accept: 'text/html, */*; q=0.01',
          'x-newrelic-id': 'VwADWVBaABABV1JXDgQOUVcA',
          'x-requested-with': 'XMLHttpRequest',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjM2NDg2OTgiLCJhcCI6IjEzODYwMTg5NDIiLCJpZCI6ImI5Y2YxNjU2YzdlZTUwZDIiLCJ0ciI6ImMyM2Y1MDE5MjQ5OWIxNWJhOWYwNTg5ZWZlYjk2NTk4IiwidGkiOjE3MTk4MjI2MjMxNjV9fQ==',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-c23f50192499b15ba9f0589efeb96598-b9cf1656c7ee50d2-01',
          tracestate: '3648698@nr=0-1-3648698-1386018942-b9cf1656c7ee50d2----1719822623165',
        },
      }
    )
    sleep(1)

    response = http.get(
      'https://seam.riskscore.cards/signalr/start?transport=serverSentEvents&clientProtocol=1.5&connectionToken=3i5xdRKiWxkEV2m2QVpjNXJHVn54KwY0ufTRw7QL%2FCmZEkd0uMw9BPJAkPbVNVN9ivfkEIO%2BqIZYBi6Q3WFRdsWFczz7zFp5ub%2FHhBSEQ3uckJ6f9S%2B8%2Bn3dR%2FTUXNG8%2BoKHsC6ayNn5xbmTvSFE4DbYFmhZj5fIZjIZqi8S%2FDZaF5YieyoM2Dz6de09nSE5xOZpCwi%2BtZTeUGgz0HOGEA%3D%3D&connectionData=%5B%7B%22name%22%3A%22chathub%22%7D%2C%7B%22name%22%3A%22notificationhub%22%7D%5D&_=1719822621158',
      {
        headers: {
          accept: 'text/plain, */*; q=0.01',
          'content-type': 'application/json; charset=UTF-8',
          'x-newrelic-id': 'VwADWVBaABABV1JXDgQOUVcA',
          'x-requested-with': 'XMLHttpRequest',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjM2NDg2OTgiLCJhcCI6IjEzODYwMTg5NDIiLCJpZCI6IjY4ZTAzZWVkZTdjYWQ1YzQiLCJ0ciI6IjVhOWJiMTQwOGQ4ZGU1MmNmYTE2ZDA5MTc5N2RkOTZlIiwidGkiOjE3MTk4MjI2MjQyMDl9fQ==',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-5a9bb1408d8de52cfa16d091797dd96e-68e03eede7cad5c4-01',
          tracestate: '3648698@nr=0-1-3648698-1386018942-68e03eede7cad5c4----1719822624209',
        },
      }
    )
    sleep(1.4)

    response = http.get(
      'https://seam.riskscore.cards/NotificationTemplates/GetActiveNotifications?_=1719822621159',
      {
        headers: {
          accept: 'application/json, text/javascript, */*; q=0.01',
          'x-newrelic-id': 'VwADWVBaABABV1JXDgQOUVcA',
          'x-requested-with': 'XMLHttpRequest',
          newrelic:
            'eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjM2NDg2OTgiLCJhcCI6IjEzODYwMTg5NDIiLCJpZCI6IjBhNTYzNjc5NjdiNTRlMjMiLCJ0ciI6Ijk1N2U2ODM4MGNmNzA5N2VkNGJmNTZmYWMxNDJjMWE3IiwidGkiOjE3MTk4MjI2MjU2MTV9fQ==',
          'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          traceparent: '00-957e68380cf7097ed4bf56fac142c1a7-0a56367967b54e23-01',
          tracestate: '3648698@nr=0-1-3648698-1386018942-0a56367967b54e23----1719822625615',
        },
      }
    )
  })
}
