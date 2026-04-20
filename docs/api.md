# NotifyHub API

## notificationsRoute(payload)

Example payload:
- channel: email
- type: welcome
- message: Hello user

## templatesRoute(data)

Example data:
- name: Burak
- message: System alert
- status: sent

## historyRoute(item)

Example item:
- id: history-1
- channel: sms
- status: failed

## statusRoute()

Returns summary and per-channel stats.
