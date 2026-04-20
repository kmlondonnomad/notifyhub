# NotifyHub Architecture

Flow:
1. route receives input
2. service normalizes payload
3. queue creates job item
4. processor selects channel
5. provider sends notification
6. history and status are returned

Main folders:
- src/routes
- src/services
- src/queue
- src/channels
- src/utils
- src/ui
- tests
- docs
