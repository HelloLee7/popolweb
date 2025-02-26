# app.py

from flask import Flask, render_template, url_for

app = Flask(__name__)

# Context processor를 사용하여 모든 템플릿에서 url_for 사용 가능하게 함
@app.context_processor
def inject_url_for():
    return dict(url_for=url_for)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)