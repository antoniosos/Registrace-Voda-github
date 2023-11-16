from flask import Flask, render_template, request

app = Flask(__name__, static_url_path='/static', static_folder='static', template_folder='templates')


@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html'), 200


@app.route('/druha_stranka', methods=['GET', 'POST'])
def druha_stranka():
    return render_template('druha_stranka.html', zprava="Tajná zpráva.."), 200


@app.route('/registrace', methods=['GET', 'POST'])
def registrace_stranka():
    if request.method == 'GET':
        return render_template('registrace.html'), 200
    if request.method == 'POST':
        nickname = request.form['nick']
        friend = request.form['kanoe_kamarad']
        print(nickname + ' ' + friend)
        return render_template('index.html'), 200


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)
