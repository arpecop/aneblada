# aneblada

node.js cli

1. clone the repo
2. cd aneblada && npm install -g .
3. run "aneblada" command

node-red JSON

`

[
{
"id": "884b47e52f7bdab8",
"type": "tab",
"label": "motivator",
"disabled": false,
"info": ""
},
{
"id": "654a67bce9abe448",
"type": "inject",
"z": "884b47e52f7bdab8",
"name": "How Motivated you are today?",
"props": [
{
"p": "sallary",
"v": "10",
"vt": "num"
},
{
"p": "workplace",
"v": "10",
"vt": "num"
},
{
"p": "coworkers",
"v": "10",
"vt": "num"
}
],
"repeat": "",
"crontab": "",
"once": false,
"onceDelay": 0.1,
"topic": "",
"x": 170,
"y": 320,
"wires": [
[
"f14c55975e52d59d"
]
]
},
{
"id": "f14c55975e52d59d",
"type": "function",
"z": "884b47e52f7bdab8",
"name": "validate",
"func": "const { sallary, workplace, coworkers } = msg\n\nif (\n sallary < 0 ||\n sallary > 10 ||\n workplace < 0 ||\n workplace > 10 ||\n coworkers < 0 ||\n workplace > 10\n) {\n return { payload: 'Invalid selection' }\n} else {\n const sum = sallary + workplace + coworkers;\n const overall = sum / 3\n const percentage = (100 \* sum) / 30\n return { payload: { overall, percentage} }\n}\n",
"outputs": 1,
"noerr": 0,
"initialize": "",
"finalize": "",
"libs": [],
"x": 420,
"y": 320,
"wires": [
[
"dcb5b5e418135a20"
]
]
},
{
"id": "dcb5b5e418135a20",
"type": "debug",
"z": "884b47e52f7bdab8",
"name": "",
"active": true,
"tosidebar": true,
"console": false,
"tostatus": false,
"complete": "payload",
"targetType": "msg",
"statusVal": "",
"statusType": "auto",
"x": 630,
"y": 340,
"wires": []
}
]

`
