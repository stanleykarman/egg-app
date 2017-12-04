<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>list</title>
</head>
<body>
    <div>
        {% for item in list %}
        <p>{{ item.model }}：{{ item.plate }} : {{ item.year }}</p>
        {% endfor %}
    </div>
</body>
</html>